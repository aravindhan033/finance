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
            let isExistingUser = yield this.checkIsExistingUser(zkuser);
            if (!isExistingUser) {
                const userCommand = new UserCommand_1.UserCommand();
                zkuser = yield this.convertPasswordToHash(zkuser);
                return yield userCommand.createUser(zkuser);
            }
            else {
                return null;
            }
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
            const userCommand = new UserQuery_1.UserQuery();
            const dbUser = yield userCommand.getUser(zkuser);
            let resultObject = {};
            if (dbUser != null && dbUser.password != null && (yield bcrypt.compare(zkuser.password, dbUser.password))) {
                zkuser.authToken = {};
                zkuser.authToken.loginInfo = loginInfo;
                zkuser.zkuid = dbUser.zkuid;
                zkuser = yield this.createAndSaveRefreshToken(zkuser);
                let accessToken = yield this.getAccessToken(zkuser.authToken.authId, zkuser.authToken.authToken, zkuser.zkuid);
                resultObject["accessToken"] = accessToken.accessToken;
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
            const userCommand = new UserCommand_1.UserCommand();
            zkuser.authToken = yield userCommand.addAuthToken(zkuser.authToken);
            return zkuser;
        });
    }
    getAccessToken(authId, expiredAccessToken, zkuid) {
        return __awaiter(this, void 0, void 0, function* () {
            let accessToken = {};
            try {
                const userQuery = new UserQuery_1.UserQuery();
                let isRefreshTokenValid = false;
                if (authId == null) {
                    let authTokenObj = yield this.getAuthId(zkuid, expiredAccessToken);
                    if (authTokenObj != null && authTokenObj.authId != null) {
                        accessToken.authId = authTokenObj.authId;
                        accessToken.authToken = authTokenObj.authToken;
                    }
                }
                else {
                    let refreshTokenObj = yield userQuery.getUserAuthTokenByAuthId(authId);
                    accessToken.authId = refreshTokenObj["authId"];
                    accessToken.authToken = refreshTokenObj["authToken"];
                }
                if (accessToken.authToken != null) {
                    yield jwt.verify(accessToken.authToken, config_1.default.refreshTokenSecret, (err, res) => __awaiter(this, void 0, void 0, function* () {
                        if (err == null) {
                            isRefreshTokenValid = true;
                        }
                    }));
                }
                if (isRefreshTokenValid) {
                    const userCommand = new UserCommand_1.UserCommand();
                    accessToken.expiration = Math.floor(Date.now() / 1000) + (config_1.default.accessTokenExpire);
                    accessToken.accessToken = yield jwt.sign({
                        exp: accessToken.expiration,
                        data: { "zkuid": zkuid }
                    }, config_1.default.accessTokenSecret);
                    accessToken = yield userCommand.updateUserAccessToken(accessToken);
                }
            }
            catch (err) {
                console.log(err);
            }
            return accessToken;
        });
    }
    checkIsExistingUser(zkuser) {
        return __awaiter(this, void 0, void 0, function* () {
            const userQuery = new UserQuery_1.UserQuery();
            const dbUser = yield userQuery.getUser(zkuser);
            return dbUser != null;
        });
    }
    updateUser(zkuser) {
        return __awaiter(this, void 0, void 0, function* () {
            if (zkuser.zkuid != null) {
                const userCommand = new UserCommand_1.UserCommand();
                let updateZkuser = yield userCommand.updateUser(zkuser);
                return updateZkuser;
            }
            else {
                return null;
            }
        });
    }
    getAuthId(zkuid, accessToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const userQuery = new UserQuery_1.UserQuery();
            let authToken = {};
            let refreshTokenArr = yield userQuery.getUserAuthToken(zkuid);
            if (refreshTokenArr != null && refreshTokenArr.length > 0) {
                for (let i = 0; i < refreshTokenArr.length; i++) {
                    if (accessToken == refreshTokenArr[i]["accessToken"]) {
                        authToken = refreshTokenArr[i];
                        break;
                    }
                }
            }
            return authToken;
        });
    }
    terminateSession(zkuser, allSession) {
        return __awaiter(this, void 0, void 0, function* () {
            if (zkuser.zkuid == null) {
                return false;
            }
            const userCommand = new UserCommand_1.UserCommand();
            if (allSession) {
                let sessionToken = {};
                sessionToken.authUserId = zkuser.zkuid;
                if (sessionToken != null && sessionToken.authUserId != null) {
                    yield userCommand.deleteUserAllAuthToken(sessionToken);
                    return true;
                }
            }
            else {
                let authTokenObj = yield this.getAuthId(zkuser.zkuid, zkuser.authToken.accessToken);
                if (authTokenObj != null && authTokenObj.authId != null) {
                    yield userCommand.deleteAuthToken(authTokenObj);
                    return true;
                }
            }
            return false;
        });
    }
}
exports.UserProcessor = UserProcessor;
//# sourceMappingURL=UserProcessor.js.map