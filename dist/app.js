"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const UserRoute_1 = __importDefault(require("./API/User/Controller/UserRoute"));
const server = fastify_1.default();
server.register(UserRoute_1.default);
server.get("/ping", (req, reply) => {
    reply.send("ponguu");
});
server.listen(8000, (err, address) => {
    console.log("I am and ready mate !");
});
//# sourceMappingURL=app.js.map