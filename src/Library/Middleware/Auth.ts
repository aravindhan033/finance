import { FastifyPluginAsync, FastifyRequest, FastifyReply } from "fastify";
import { jwt } from 'jsonwebtoken';
import config from "../../config";
import { UserProcessor } from "../../Processor/User/Processor/UserProcessor";

const AuthtokenValidation = async (request:FastifyRequest,reply:FastifyReply,done) => {
    let accessToken:any=request.headers["x-access-token"];
    if(accessToken!=null){

    }
    else{
        await jwt.verify(accessToken,config.accessTokenSecret,async (err,res)=>{
            if(err){
                const userProcessor: UserProcessor = new UserProcessor();
                accessToken=await (await userProcessor.getAccessToken(res)).authToken;                
                if(accessToken!=null){
                    reply.headers({"x-access-token":accessToken});
                    done();
                }
                

            }else{                
                done();
            }

        });
    }

};

export default AuthtokenValidation;
