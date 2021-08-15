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
class UserRoutingHandlers {
    createUser(request, reply) {
        console.log("in router");
        let zkUser = request.body;
        const userProcessor = new UserProcessor_1.UserProcessor();
        userProcessor.createUser(zkUser).then((res) => {
            reply.send(res);
        });
    }
}
const userRoutes = (server, options) => __awaiter(void 0, void 0, void 0, function* () {
    const routeHandler = new UserRoutingHandlers();
    server.post("/createuser", { schema: UserSchema_1.createUser }, (req, reply) => {
        routeHandler.createUser(req, reply);
    });
});
exports.default = fastify_plugin_1.default(userRoutes);
//# sourceMappingURL=UserRoute.js.map