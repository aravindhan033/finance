import { FastifyInstance, FastifyPluginAsync, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import fp from 'fastify-plugin';
import { ZKUser } from "../../../Processor/User/Model/User";
import { UserProcessor } from "../../../Processor/User/Processor/UserProcessor";
import { createUser } from "../Schema/UserSchema";

class UserRoutingHandlers {
    public createUser(request: FastifyRequest, reply: FastifyReply): void {
        console.log("in router");

        let zkUser: ZKUser = request.body as ZKUser;
        const userProcessor: UserProcessor = new UserProcessor();
        userProcessor.createUser(zkUser).then((res) => {
            reply.send(res);
        });
    }

}

const userRoutes: FastifyPluginAsync = async (server: FastifyInstance, options: FastifyPluginOptions) => {
    const routeHandler: UserRoutingHandlers = new UserRoutingHandlers();
    server.post("/createuser", { schema: createUser }, (req, reply) => {
        routeHandler.createUser(req, reply);
    })
}
export default fp(userRoutes)

