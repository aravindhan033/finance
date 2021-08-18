"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userlogin = exports.createUser = void 0;
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
//# sourceMappingURL=UserSchema.js.map