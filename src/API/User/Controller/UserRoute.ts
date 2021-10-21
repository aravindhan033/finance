import { FastifyInstance, FastifyPluginAsync, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import fp from 'fastify-plugin';
import { CommonUtils } from "../../../Library/CommonUtils";
import AuthtokenValidation from "../../../Library/Middleware/Auth";
import { Authtoken } from "../../../Processor/Model/Authtoken";
import { ZKUser } from "../../../Processor/Model/User";
import { UserProcessor } from "../../../Processor/Processor/UserProcessor";
import { createUser, userlogin ,checkUser,userupdate} from "../Schema/UserSchema";

const userRoutes: FastifyPluginAsync = async (server: FastifyInstance, options: FastifyPluginOptions) => {
    
    server.post("/user/create", { schema: createUser }, (req, reply) => {
        let zkUser: ZKUser = req.body as ZKUser;
        const userProcessor: UserProcessor = new UserProcessor();
        userProcessor.createUser(zkUser).then((res) => {
            if(res==null){
                reply.redirect(307,'/signin')                
            }
            else{
                reply.send(res);
            }
        });
    });
    
    server.get("/user/isexisting", { schema: checkUser }, async (req, reply) => {
        let zkUser: ZKUser = req.query as ZKUser;
        const userProcessor: UserProcessor = new UserProcessor();
        reply.send({result:await userProcessor.checkIsExistingUser(zkUser)});
    });

    server.put("/user/login", { schema: userlogin }, (req, reply) => {
        let zkUser: ZKUser = req.body as ZKUser;
        let loginInfo: JSON = {} as JSON;
        loginInfo["device"] = req.body["device"]
        loginInfo["location"] = req.body["location"]
        loginInfo["ipaddress"] = req.body["ipaddress"];
        const userProcessor: UserProcessor = new UserProcessor();
        userProcessor.userLogin(zkUser, loginInfo).then((res) => {
            if (res != null) {
                reply.headers({ "x-access-token": res["accessToken"] });
                reply.headers({ "x-zkuid": res["zkuid"] });
                reply.send({});
            }
        }).catch((err) => {
            reply.send({});

        });
    });
    
    server.put("/user/update/:zkuid", { schema: userupdate , preValidation: AuthtokenValidation }, (req, reply) => {
        let zkUser: ZKUser = req.body as ZKUser;        
        zkUser.zkuid=Number(req.params["zkuid"]);        
        const userProcessor: UserProcessor = new UserProcessor();
        userProcessor.updateUser(zkUser).then((res)=>{
            if(res!=null){
                reply.send(res);
            }
            else{
                reply.status(404);
                reply.send({});
            }
        });
    });
    server.post("/user/logout", { preValidation: AuthtokenValidation }, async (req, reply) => {
        let zkUser: ZKUser = {} as ZKUser;        
        zkUser.authToken={} as Authtoken;
        zkUser.authToken.accessToken= req.headers["x-access-token"].toString();
        const userProcessor: UserProcessor = new UserProcessor();
        reply.headers({ "x-access-token": null });
        reply.headers({ "x-zkuid": null});                
        zkUser.zkuid=CommonUtils.getZkuid(req); 
        let isTerminated:Boolean=false;    
        isTerminated=await userProcessor.terminateSession(zkUser,false)
        reply.send(isTerminated);

    });

    server.post("/user/terminatesession", { preValidation: AuthtokenValidation }, async (req, reply) => {
        let zkUser: ZKUser = {} as ZKUser;
        zkUser.authToken={} as Authtoken;
        zkUser.authToken.accessToken= req.headers["x-access-token"].toString();
        const userProcessor: UserProcessor = new UserProcessor();
        reply.headers({ "x-access-token": null });
        reply.headers({ "x-zkuid": null});        
        zkUser.zkuid=CommonUtils.getZkuid(req); 
        let isTerminated:Boolean=false;    
        isTerminated=await userProcessor.terminateSession(zkUser,true)
        reply.send(isTerminated);
    })

    


}
export default fp(userRoutes)

