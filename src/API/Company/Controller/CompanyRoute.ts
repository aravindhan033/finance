import { FastifyInstance, FastifyPluginAsync, FastifyPluginOptions } from "fastify";
import fp from "fastify-plugin";
import { REPL_MODE_SLOPPY } from "repl";
import AuthtokenValidation from "../../../Library/Middleware/Auth";
import { ZarkCompany } from "../../../Processor/User/Model/Company";
import { CompanyProcessor } from "../../../Processor/User/Processor/CompanyProcessor";

const companyRoutes: FastifyPluginAsync = async (server: FastifyInstance, options: FastifyPluginOptions) => {

    server.post("/createcompany",{preValidation:AuthtokenValidation},(req,reply)=>{
        const zkcompany = req.body as ZarkCompany;
        const companyPrc= new CompanyProcessor();
        companyPrc.createCompany(zkcompany).then((res)=>{
            if(res!=null){
                reply.send(res);
            }
            else{
                reply.send({});
            }
        })
    });
    server.put("/updatecompanydetails",{preValidation:AuthtokenValidation},(req,reply)=>{
        const zkcompany = req.body as ZarkCompany;
        const companyPrc= new CompanyProcessor();
        companyPrc.updateCompanyDetails(zkcompany).then((res)=>{
            if(res!=null){
                reply.send(res);
            }
            else{
                reply.send({});
            }
        })
    });
};

export default fp(companyRoutes);