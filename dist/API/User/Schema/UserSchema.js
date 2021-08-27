"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.userupdate = exports.checkUser = exports.userlogin = exports.createUser = void 0;
const createUser = {
    body: {
        type: "object",
        properties: {
            firstname: { type: "string" },
            lastname: { type: "string" },
            email: { type: "string" },
            mobile_number: { type: "string" },
            password: { type: "string" },
            country: { type: "string" },
            timezone: { type: "string" },
        },
        required: ["firstname", "password"]
    }
};
exports.createUser = createUser;
const userlogin = {
    body: {
        type: "object",
        properties: {
            email: { type: "string" },
            mobile_number: { type: "string" },
            password: { type: "string" },
            device: { type: "string" },
            location: { type: "string" },
            ipaddress: { type: "string" }
        },
        required: ["password"]
    }
};
exports.userlogin = userlogin;
const checkUser = {
    querystring: {
        type: "object",
        properties: {
            email: { type: "string" },
            mobile_number: { type: "string" },
        },
    }
};
exports.checkUser = checkUser;
const userupdate = {
    body: {
        type: "object",
        properties: {
            zkuid: { type: "number" },
            firstname: { type: "string" },
            lastname: { type: "string" },
            email: { type: "string" },
            mobile_number: { type: "string" },
            password: { type: "string" },
            country: { type: "string" },
            timezone: { type: "string" },
            language: { type: "string" },
        },
        required: ["zkuid"]
    }
};
exports.userupdate = userupdate;
const logout = {
    body: {
        type: "object",
        properties: {
            zkuid: { type: "number" }
        },
        required: ["zkuid"]
    }
};
exports.logout = logout;
//# sourceMappingURL=UserSchema.js.map