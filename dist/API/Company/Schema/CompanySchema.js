"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserToCompany = exports.updateCompany = exports.createCompany = void 0;
exports.createCompany = { body: {
        type: "object",
        properties: {
            companyName: { type: "string" },
            companyAddress: { type: "string" },
            country: { type: "string" },
        },
        required: ["companyName"]
    } };
exports.updateCompany = {
    body: {
        type: "object",
        properties: {
            companyName: { type: "string" },
            companyAddress: { type: "string" },
            country: { type: "string" },
        },
        required: ["companyName"]
    }
};
exports.addUserToCompany = { body: {
        type: "object",
        properties: {
            zkcid: { type: "number" },
            zkuid: { type: "number" },
            user_profile: { type: "string" },
        },
        required: ["zkcid", "zkuid"]
    } };
//# sourceMappingURL=CompanySchema.js.map