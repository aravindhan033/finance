import { FastifyInstance, FastifyPluginAsync, FastifyPluginOptions } from "fastify";
import fp from "fastify-plugin";
import AuthtokenValidation from "../../../Library/Middleware/Auth";
import { ZKProduct, ZKTax, ZKUnit } from "../../../Processor/Model/ProductModel";
import { ProductProcessor } from "../../../Processor/Processor/ProductProcessor";
import { UnitProcessor } from "../../../Processor/Processor/UnitProcessor";

import { TaxProcessor } from "../../../Processor/Processor/TaxProcessor";
import {addProduct ,addtax} from "../Schema/ProductSchema";
import { CommonUtils } from "../../../Library/CommonUtils";

const productRoutes: FastifyPluginAsync = async (server: FastifyInstance, options: FastifyPluginOptions) => {
    
    server.post("/product/add", { schema: addProduct ,preValidation: AuthtokenValidation} ,  (req, reply) => {
        let zkproduct: ZKProduct = req.body["product"] as ZKProduct;
        zkproduct.zkcid=CommonUtils.getZkcid(req);
        let taxArr: number[] = req.body["tax"] ;
        const productProcessor: ProductProcessor = new ProductProcessor();
        productProcessor.addProduct(zkproduct,taxArr).then((res) => {           
            if (res != null) {
                reply.send(res);
            }
            else {
                reply.send({});
            } 
        }).catch(()=>{
            reply.status(500);
            reply.send({});
        })
    });
    
    server.get("/product/get/:zkpid", { preValidation: AuthtokenValidation} ,  (req, reply) => {
        let zkpid:number = req.params["zkpid"]         
        const productProcessor: ProductProcessor = new ProductProcessor();
        productProcessor.getProduct(zkpid).then((res)=>{
            if (res != null) {
                reply.send(res);
            }
            else {
                reply.send({});
            } 
        })
        
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
    server.post("/tax/add", { schema: addtax ,preValidation: AuthtokenValidation} ,  (req, reply) => {
        let zktax: ZKTax = req.body as ZKTax;
        zktax.zkcid=CommonUtils.getZkcid(req)
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