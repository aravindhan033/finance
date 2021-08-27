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
const config_1 = __importDefault(require("../../config"));
const UserProcessor_1 = require("../../Processor/User/Processor/UserProcessor");
var jwt = require('jsonwebtoken');
const AuthtokenValidation = (request, reply, done) => __awaiter(void 0, void 0, void 0, function* () {
    let accessToken = request.headers["x-access-token"];
    let isValid = false;
    if (accessToken != null) {
        yield jwt.verify(accessToken, config_1.default.accessTokenSecret, (err, res) => __awaiter(void 0, void 0, void 0, function* () {
            if (err != null) {
                if ("TokenExpiredError" == err.name) {
                    const decodedToken = jwt.decode(accessToken, config_1.default.accessTokenSecret);
                    const userProcessor = new UserProcessor_1.UserProcessor();
                    accessToken = yield (yield userProcessor.getAccessToken(null, accessToken, decodedToken.data.zkuid)).authToken;
                    if (accessToken == null) {
                        reply.redirect(307, '/signin');
                    }
                    else {
                        reply.headers({ "x-access-token": accessToken });
                        isValid = true;
                    }
                }
            }
            else {
                isValid = true;
            }
        }));
    }
    if (!isValid) {
        reply.status(403);
        reply.send({});
    }
    done();
});
exports.default = AuthtokenValidation;
//# sourceMappingURL=Auth.js.map