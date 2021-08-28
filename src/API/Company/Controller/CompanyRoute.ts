import { FastifyInstance, FastifyPluginAsync, FastifyPluginOptions } from "fastify";
import fp from "fastify-plugin";
import { CommonUtils } from "../../../Library/CommonUtils";
import AuthtokenValidation from "../../../Library/Middleware/Auth";
import { ZarkCompany } from "../../../Processor/User/Model/Company";
import { CompanyProcessor } from "../../../Processor/User/Processor/CompanyProcessor";

const companyRoutes: FastifyPluginAsync = async (server: FastifyInstance, options: FastifyPluginOptions) => {

    server.post("/company/create", {
        schema: {
            body: {
                type: "object",
                properties: {
                    companyName: { type: "string" },
                    companyAddress: { type: "string" },
                    country: { type: "string" },
                },
                required: ["companyName"]
            }
        }, preValidation: AuthtokenValidation
    }, (req, reply) => {
        const zkcompany = req.body as ZarkCompany;
        zkcompany.createdBy=CommonUtils.getZkuid(req);
        const companyPrc = new CompanyProcessor();
        companyPrc.createCompany(zkcompany).then((res) => {
            if (res != null) {
                reply.send(res);
            }
            else {
                reply.status(500);
                reply.send({});
            }
        })
    });    
    server.put("/company/update", {
        schema: {
            body: {
                type: "object",
                properties: {
                    companyName: { type: "string" },
                    companyAddress: { type: "string" },
                    country: { type: "string" },
                },
                required: ["companyName"]
            }
        }, preValidation: AuthtokenValidation
    }, (req, reply) => {
        const zkcompany = req.body as ZarkCompany;
        const companyPrc = new CompanyProcessor();
        companyPrc.updateCompanyDetails(zkcompany).then((res) => {
            if (res != null) {
                reply.send(res);
            }
            else {
                reply.send({});
            }
        })
    });
};

export default fp(companyRoutes);