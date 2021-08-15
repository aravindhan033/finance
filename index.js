"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fastify_1 = __importDefault(require("fastify"));
var server = fastify_1.default();
server.get("/ping", function (req, reply) {
    reply.send("ponguu");
});
server.listen(8000, function (err, address) {
    console.log("I am and ready mate !");
});
