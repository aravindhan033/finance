"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const CommonUtils_1 = require("../../../Library/CommonUtils");
const Auth_1 = __importDefault(require("../../../Library/Middleware/Auth"));
const CompanyProcessor_1 = require("../../../Processor/Processor/CompanyProcessor");
const UserCompanyProcessor_1 = require("../../../Processor/Processor/UserCompanyProcessor");
const CompanySchema_1 = require("../Schema/CompanySchema");
const companyRoutes = (server, options) => __awaiter(void 0, void 0, void 0, function* () {
    server.post("/company/create", {
        schema: CompanySchema_1.createCompany, preValidation: Auth_1.default
    }, (req, reply) => {
        const zkcompany = req.body;
        zkcompany.createdBy = CommonUtils_1.CommonUtils.getZkuid(req);
        const companyPrc = new CompanyProcessor_1.CompanyProcessor();
        companyPrc.createCompany(zkcompany).then((res) => {
            if (res != null) {
                reply.send(res);
            }
            else {
                reply.status(500);
                reply.send({});
            }
        });
    });
    server.put("/company/update", {
        schema: CompanySchema_1.updateCompany, preValidation: Auth_1.default
    }, (req, reply) => {
        const zkcompany = req.body;
        const companyPrc = new CompanyProcessor_1.CompanyProcessor();
        companyPrc.updateCompanyDetails(zkcompany).then((res) => {
            if (res != null) {
                reply.send(res);
            }
            else {
                reply.send({});
            }
        });
    });
    server.post("/company/adduser", {
        schema: CompanySchema_1.addUserToCompany, preValidation: Auth_1.default
    }, (req, reply) => {
        const userMap = req.body;
        const userCompanyPrc = new UserCompanyProcessor_1.UserCompanyProcessor();
        userCompanyPrc.addUserToCompany(userMap.zkuid, userMap.zkcid, userMap.user_profile).then((res) => {
            if (res != null) {
                reply.send(res);
            }
            else {
                reply.send({});
            }
        });
    });
});
exports.default = (0, fastify_plugin_1.default)(companyRoutes);
//# sourceMappingURL=CompanyRoute.js.map