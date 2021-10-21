import { FastifyInstance, FastifyPluginAsync, FastifyPluginOptions } from "fastify";
import fp from "fastify-plugin";
import { CommonUtils } from "../../../Library/CommonUtils";
import AuthtokenValidation from "../../../Library/Middleware/Auth";
import { ZarkCompany } from "../../../Processor/Model/Company";
import { ZKUserCompanyMapping } from "../../../Processor/Model/UserCompanyMapping";
import { CompanyProcessor } from "../../../Processor/Processor/CompanyProcessor";
import { UserCompanyProcessor } from "../../../Processor/Processor/UserCompanyProcessor";
import { addUserToCompany, createCompany, updateCompany } from "../Schema/CompanySchema";

const companyRoutes: FastifyPluginAsync = async (server: FastifyInstance, options: FastifyPluginOptions) => {

    server.post("/company/create", {
        schema: createCompany, preValidation: AuthtokenValidation
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
        schema:updateCompany , preValidation: AuthtokenValidation
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
    server.post("/company/adduser", {
        schema:addUserToCompany , preValidation: AuthtokenValidation
    }, (req, reply) => {
        const userMap = req.body as ZKUserCompanyMapping;
        const userCompanyPrc = new UserCompanyProcessor();
        userCompanyPrc.addUserToCompany(userMap.zkuid,userMap.zkcid,userMap.user_profile).then((res) => {
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