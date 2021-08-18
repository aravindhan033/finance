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
const UserProcessor_1 = require("../../../Processor/User/Processor/UserProcessor");
const UserSchema_1 = require("../Schema/UserSchema");
const userRoutes = (server, options) => __awaiter(void 0, void 0, void 0, function* () {
    server.post("/createuser", { schema: UserSchema_1.createUser }, (req, reply) => {
        let zkUser = req.body;
        const userProcessor = new UserProcessor_1.UserProcessor();
        userProcessor.createUser(zkUser).then((res) => {
            reply.send(res);
        });
    });
    server.post("/userlogin", { schema: UserSchema_1.userlogin }, (req, reply) => {
        let zkUser = req.body;
        let loginInfo = {};
        loginInfo["device"] = req.body["device"];
        loginInfo["location"] = req.body["location"];
        loginInfo["ipaddress"] = req.body["ipaddress"];
        const userProcessor = new UserProcessor_1.UserProcessor();
        userProcessor.userLogin(zkUser, loginInfo).then((res) => {
            if (res != null) {
                reply.headers({ "x-access-token": res["accessToken"] });
                reply.headers({ "x-zkuid": res["zkuid"] });
                reply.send({});
            }
        }).catch((err) => {
            reply.send({});
        });
    });
});
exports.default = fastify_plugin_1.default(userRoutes);
//# sourceMappingURL=UserRoute.js.map