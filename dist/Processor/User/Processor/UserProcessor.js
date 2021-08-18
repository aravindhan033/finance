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
exports.UserProcessor = void 0;
const UserCommand_1 = require("../../../DataStore/Store/UserStore/UserCommand");
const UserQuery_1 = require("../../../DataStore/Store/UserStore/UserQuery");
const config_1 = __importDefault(require("../../../config"));
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
class UserProcessor {
    createUser(zkuser) {
        return __awaiter(this, void 0, void 0, function* () {
            const cmd = new UserCommand_1.UserCommand();
            zkuser = yield this.convertPasswordToHash(zkuser);
            return yield cmd.createUser(zkuser);
        });
    }
    convertPasswordToHash(zkuser) {
        return __awaiter(this, void 0, void 0, function* () {
            let plainPassword = zkuser.password;
            let hashedPassword = yield bcrypt.hash(plainPassword, 10);
            zkuser.password = hashedPassword;
            return zkuser;
        });
    }
    userLogin(zkuser, loginInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            const cmd = new UserQuery_1.UserQuery();
            const dbUser = yield cmd.getUser(zkuser);
            let resultObject = {};
            if (dbUser != null && dbUser.password != null && (yield bcrypt.compare(zkuser.password, dbUser.password))) {
                zkuser.authToken = {};
                zkuser.authToken.loginInfo = loginInfo;
                zkuser.zkuid = dbUser.zkuid;
                zkuser = yield this.createAndSaveRefreshToken(zkuser);
                let accessToken = yield this.getAccessToken(zkuser.authToken.authToken, zkuser.zkuid);
                resultObject["accessToken"] = accessToken.authToken;
                resultObject["zkuid"] = zkuser.zkuid;
            }
            else {
            }
            return resultObject;
        });
    }
    createAndSaveRefreshToken(zkuser) {
        return __awaiter(this, void 0, void 0, function* () {
            let refreshToken = zkuser.authToken;
            refreshToken.expiration = Math.floor(Date.now() / 1000) + (config_1.default.refreshTokenExpire);
            refreshToken.authToken = yield jwt.sign({
                exp: refreshToken.expiration,
                data: { zkuid: zkuser.zkuid }
            }, config_1.default.refreshTokenSecret);
            refreshToken.authUserId = zkuser.zkuid;
            const cmd = new UserCommand_1.UserCommand();
            zkuser = yield cmd.addAuthToken(zkuser);
            return zkuser;
        });
    }
    getAccessToken(refreshToken, zkuid) {
        return __awaiter(this, void 0, void 0, function* () {
            let accessToken = {};
            yield jwt.verify(refreshToken, config_1.default.refreshTokenSecret, (err, res) => __awaiter(this, void 0, void 0, function* () {
                if (err) {
                    return null;
                }
                else {
                    const cmd = new UserCommand_1.UserCommand();
                    let refreshTokenArr = yield cmd.getUserAuthToken(zkuid);
                    let isRefreshTokenValid = false;
                    if (refreshTokenArr != null && refreshTokenArr.length > 0) {
                        for (let i = 0; i < refreshTokenArr.length; i++) {
                            if (refreshToken == refreshTokenArr[i]["authToken"]) {
                                isRefreshTokenValid = true;
                                break;
                            }
                        }
                    }
                    if (!isRefreshTokenValid) {
                        return null;
                    }
                    accessToken.expiration = Math.floor(Date.now() / 1000) + (config_1.default.accessTokenExpire);
                    accessToken.authToken = yield jwt.sign({
                        exp: accessToken.expiration,
                        data: { "authid": refreshToken, "zkuid": zkuid }
                    }, config_1.default.accessTokenSecret);
                }
            }));
            return accessToken;
        });
    }
}
exports.UserProcessor = UserProcessor;
//# sourceMappingURL=UserProcessor.js.map