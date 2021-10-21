import { FastifyInstance, FastifyPluginAsync, FastifyPluginOptions } from "fastify";
import fp from "fastify-plugin";
import AuthtokenValidation from "../../../Library/Middleware/Auth";
import { ZKProduct, ZKTax, ZKUnit } from "../../../Processor/Model/ProductModel";
import { ProductProcessor } from "../../../Processor/Processor/ProductProcessor";
import { UnitProcessor } from "../../../Processor/Processor/UnitProcessor";

import { TaxProcessor } from "../../../Processor/Processor/TaxProcessor";
import {addProduct } from "../Schema/ProductSchema";

const productRoutes: FastifyPluginAsync = async (server: FastifyInstance, options: FastifyPluginOptions) => {
    
    server.post("/product/add", { schema: addProduct ,preValidation: AuthtokenValidation} ,  (req, reply) => {
        let zkproduct: ZKProduct = req.body as ZKProduct;
        const productProcessor: ProductProcessor = new ProductProcessor();
        productProcessor.addProduct(zkproduct).then((res) => {           
            if (res != null) {
                reply.send(res);
            }
            else {
                reply.send({});
            } 
        });
    });
    
    server.get("/product/get", { schema: addProduct ,preValidation: AuthtokenValidation} ,  (req, reply) => {
        let zkproduct: ZKProduct = req.body as ZKProduct;
        const productProcessor: ProductProcessor = new ProductProcessor();
        productProcessor.addProduct(zkproduct).then((res) => {           
            if (res != null) {
                reply.send(res);
            }
            else {
                reply.send({});
            } 
        });
    });

    server.post("/unit/add", { schema: addProduct ,preValidation: AuthtokenValidation} ,  (req, reply) => {
        let zkunit: ZKUnit = req.body as ZKUnit;
        const unitProcessor: UnitProcessor = new UnitProcessor();
        unitProcessor.findOrAddUnit(zkunit.zk_unit_name,zkunit.zkcid).then((res) => {           
            if (res != null) {
                reply.send(res);
            }
            else {
                reply.send({});
            } 
        });
    });
    server.post("/tax/add", { schema: addProduct ,preValidation: AuthtokenValidation} ,  (req, reply) => {
        let zktax: ZKTax = req.body as ZKTax;
        const taxProcessor: TaxProcessor = new TaxProcessor();
        taxProcessor.addTax(zktax).then((res) => {           
            if (res != null) {
                reply.send(res);
            }
            else {
                reply.send({});
            } 
        });
    });

    server.get("/tax/getAll", { schema: addProduct ,preValidation: AuthtokenValidation} ,  (req, reply) => {
        let zktax: ZKTax = req.body as ZKTax;
        const taxProcessor: TaxProcessor = new TaxProcessor();
        
    });
    
};


export default fp(productRoutes);