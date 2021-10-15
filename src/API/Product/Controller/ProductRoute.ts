import { FastifyInstance, FastifyPluginAsync, FastifyPluginOptions } from "fastify";
import fp from "fastify-plugin";
import { ZKProduct } from "../../../Processor/User/Model/ProductModel";
import { ProductProcessor } from "../../../Processor/User/Processor/ProductProcessor";
import {addProduct } from "../Schema/ProductSchema";

const productRoutes: FastifyPluginAsync = async (server: FastifyInstance, options: FastifyPluginOptions) => {
    
    server.post("/product/add", { schema: addProduct } , (req, reply) => {
        let zkproduct: ZKProduct = req.body as ZKProduct;
        const productProcessor: ProductProcessor = new ProductProcessor();
        productProcessor.addProduct(zkproduct).then((res) => {            
        });
    });
};


export default fp(productRoutes);