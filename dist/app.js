"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const UserRoute_1 = __importDefault(require("./API/User/Controller/UserRoute"));
const BaseResponse_1 = __importDefault(require("./API/BaseResponse"));
const Auth_1 = __importDefault(require("./Library/Middleware/Auth"));
const CompanyRoute_1 = __importDefault(require("./API/Company/Controller/CompanyRoute"));
const server = (0, fastify_1.default)({ logger: true });
server.register(BaseResponse_1.default);
server.register(require('fastify-swagger'), {
    exposeRoute: true,
    routePrefix: '/documentation',
    swagger: {
        info: { title: 'finance-api' },
    },
});
server.register(UserRoute_1.default);
server.register(CompanyRoute_1.default);
server.register(require('fastify-boom'));
server.get("/ping", (req, reply) => {
    reply.send(req.headers);
});
server.get("/authcheck", { preValidation: Auth_1.default }, (req, reply) => {
    reply.send({});
});
server.listen(8000, (err, address) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`server listening on ${address}`);
    console.log("I am and ready mate !");
});
//# sourceMappingURL=app.js.map