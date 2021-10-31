import { FastifyInstance, FastifyPluginAsync, FastifyPluginOptions } from "fastify";
import AuthtokenValidation from "../../../Library/Middleware/Auth";

const orderRoutes: FastifyPluginAsync = async (server: FastifyInstance, options: FastifyPluginOptions) => {
    server.post("/order/add", { schema: {} ,preValidation: AuthtokenValidation} ,  (req, reply) => {
        let order_detail:any=req.body["order_detail"];
        const orderProcessor= new OrderProcessor();

    });

}