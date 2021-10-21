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
const UserProcessor_1 = require("../../../Processor/Processor/UserProcessor");
const UserSchema_1 = require("../Schema/UserSchema");
const userRoutes = (server, options) => __awaiter(void 0, void 0, void 0, function* () {
    server.post("/user/create", { schema: UserSchema_1.createUser }, (req, reply) => {
        let zkUser = req.body;
        const userProcessor = new UserProcessor_1.UserProcessor();
        userProcessor.createUser(zkUser).then((res) => {
            if (res == null) {
                reply.redirect(307, '/signin');
            }
            else {
                reply.send(res);
            }
        });
    });
    server.get("/user/isexisting", { schema: UserSchema_1.checkUser }, (req, reply) => __awaiter(void 0, void 0, void 0, function* () {
        let zkUser = req.query;
        const userProcessor = new UserProcessor_1.UserProcessor();
        reply.send({ result: yield userProcessor.checkIsExistingUser(zkUser) });
    }));
    server.put("/user/login", { schema: UserSchema_1.userlogin }, (req, reply) => {
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
    server.put("/user/update/:zkuid", { schema: UserSchema_1.userupdate, preValidation: Auth_1.default }, (req, reply) => {
        let zkUser = req.body;
        zkUser.zkuid = Number(req.params["zkuid"]);
        const userProcessor = new UserProcessor_1.UserProcessor();
        userProcessor.updateUser(zkUser).then((res) => {
            if (res != null) {
                reply.send(res);
            }
            else {
                reply.status(404);
                reply.send({});
            }
        });
    });
    server.post("/user/logout", { preValidation: Auth_1.default }, (req, reply) => __awaiter(void 0, void 0, void 0, function* () {
        let zkUser = {};
        zkUser.authToken = {};
        zkUser.authToken.accessToken = req.headers["x-access-token"].toString();
        const userProcessor = new UserProcessor_1.UserProcessor();
        reply.headers({ "x-access-token": null });
        reply.headers({ "x-zkuid": null });
        zkUser.zkuid = CommonUtils_1.CommonUtils.getZkuid(req);
        let isTerminated = false;
        isTerminated = yield userProcessor.terminateSession(zkUser, false);
        reply.send(isTerminated);
    }));
    server.post("/user/terminatesession", { preValidation: Auth_1.default }, (req, reply) => __awaiter(void 0, void 0, void 0, function* () {
        let zkUser = {};
        zkUser.authToken = {};
        zkUser.authToken.accessToken = req.headers["x-access-token"].toString();
        const userProcessor = new UserProcessor_1.UserProcessor();
        reply.headers({ "x-access-token": null });
        reply.headers({ "x-zkuid": null });
        zkUser.zkuid = CommonUtils_1.CommonUtils.getZkuid(req);
        let isTerminated = false;
        isTerminated = yield userProcessor.terminateSession(zkUser, true);
        reply.send(isTerminated);
    }));
});
exports.default = (0, fastify_plugin_1.default)(userRoutes);
//# sourceMappingURL=UserRoute.js.map