import { FastifyInstance, FastifyPluginAsync, FastifyPluginOptions, FastifyReply, FastifyRequest } from "fastify";
import fp from 'fastify-plugin';

class UserRoutingHandlers {
    public static createUser(request: FastifyRequest, reply: FastifyReply): void {
        reply.send({ res: "i am ready" });
    }

}

const userRoutes: FastifyPluginAsync = async (server: FastifyInstance, options: FastifyPluginOptions) => {
    server.route({
        method: "POST",
        url: "/createuser",
        handler: UserRoutingHandlers.createUser
    });

    server.get("/get", (req, reply) => {
       const a= server.diContainer.resolve("userCommand");
       
        UserRoutingHandlers.createUser(req, reply);
    })

}

export default fp(userRoutes)

