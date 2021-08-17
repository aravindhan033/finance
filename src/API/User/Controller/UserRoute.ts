import { FastifyInstance, FastifyPluginAsync, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import fp from 'fastify-plugin';
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
    server.post("/userlogin", { schema: createUser }, (req, reply) => {

    });
}
export default fp(userRoutes)

