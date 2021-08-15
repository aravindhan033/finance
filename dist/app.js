"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const UserRoute_1 = __importDefault(require("./API/User/Controller/UserRoute"));
const server = fastify_1.default({ logger: true });
server.register(UserRoute_1.default);
server.get("/ping", (req, reply) => {
    reply.send("ponguu");
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