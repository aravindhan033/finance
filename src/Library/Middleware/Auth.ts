import { FastifyRequest, FastifyReply } from "fastify";
import Boom from 'boom';
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
                    const decodedToken = jwt.decode(accessToken, config.accessTokenSecret);
                    const userProcessor: UserProcessor = new UserProcessor();
                    accessToken = await (await userProcessor.getAccessToken(decodedToken.data.refreshToken, decodedToken.data.zkuid)).authToken;
                    if (accessToken != null) {
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
        //throw new Boom();
        reply.status(403);
    }
    done();

};

export default AuthtokenValidation;
