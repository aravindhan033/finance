import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify";
import config from "../../config";
import { UserProcessor } from "../../Processor/User/Processor/UserProcessor";
var jwt = require('jsonwebtoken');

const AuthtokenValidation = async (request: FastifyRequest, reply: FastifyReply, done) => {    
    let accessToken: any = request.headers["x-access-token"];    
    let isValid = false;
    if (accessToken != null) {
        await jwt.verify(accessToken, config.accessTokenSecret, async (err, res) => {
            if (err != null) {
                if ("TokenExpiredError" == err.name) {
                    const decodedToken = await jwt.decode(accessToken, config.accessTokenSecret);
                    const userProcessor: UserProcessor = new UserProcessor();
                    accessToken =  (await userProcessor.getAccessToken(null,accessToken, decodedToken.data.zkuid)).accessToken;                    
                    if (accessToken == null) {
                        reply.redirect(307, '/signin')
                    }
                    else{
                        reply.headers({ "x-access-token": accessToken });                        
                        isValid = true;
                    }
                }
            }
            else {
                isValid = true;                                
            }            
        });
    }
    if (!isValid) {
        reply.status(403);
        reply.send({});
    }
    done();

};

export default AuthtokenValidation;
