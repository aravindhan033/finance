import { FastifyInstance, FastifyPluginAsync, FastifyPluginOptions } from "fastify";
import AuthtokenValidation from "../../../Library/Middleware/Auth";

const categoryRoutes: FastifyPluginAsync = async (server: FastifyInstance, options: FastifyPluginOptions) => {
    server.post("/category/add", { schema: {} ,preValidation: AuthtokenValidation} ,  (req, reply) => {

    });
}