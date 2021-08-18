import { FastifyInstance, FastifyPluginAsync, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import fp from 'fastify-plugin';
import AuthtokenValidation from "../../../Library/Middleware/Auth";
import { ZKUser } from "../../../Processor/User/Model/User";
import { UserProcessor } from "../../../Processor/User/Processor/UserProcessor";
import { createUser } from "../Schema/UserSchema";


const userRoutes: FastifyPluginAsync = async (server: FastifyInstance, options: FastifyPluginOptions) => {
    server.post("/createuser", { schema: createUser }, (req, reply) => {
        let zkUser: ZKUser = req.body as ZKUser;
        const userProcessor: UserProcessor = new UserProcessor();
        userProcessor.createUser(zkUser).then((res) => {
            reply.send(res);
        });
    });
    server.post("/userlogin", { schema: createUser ,preValidation:AuthtokenValidation}, (req, reply) => {
        let zkUser: ZKUser = req.body as ZKUser;
        let loginInfo:JSON={} as JSON;
        loginInfo["device"]=req.body["device"]
        loginInfo["location"]=req.body["location"]
        loginInfo["ipaddress"]=req.body["ipaddress"];
        const userProcessor: UserProcessor = new UserProcessor();
        userProcessor.userLogin(zkUser,loginInfo).then((res) => {
            if(res!=null){
                reply.headers({"x-access-token":res["accessToken"]});
                reply.headers({"x-zkuid":res["zkuid"]});
                reply.send({});
            }
        });
    });
}
export default fp(userRoutes)

