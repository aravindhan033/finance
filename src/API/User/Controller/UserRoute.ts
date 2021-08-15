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

    server.route({
        method: "GET",
        url: "/getuser",
        handler: UserRoutingHandlers.createUser
    });
}

export default fp(userRoutes)

