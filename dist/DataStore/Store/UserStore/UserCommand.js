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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCommand = void 0;
const CommonClientPerisistence_1 = require("../../Configuration/CommonClientPerisistence");
const BaseStore_1 = require("../BaseStore");
class UserCommand extends BaseStore_1.BaseStore {
    createUser(zkuser) {
        const _super = Object.create(null, {
            plainToEntityType: { get: () => super.plainToEntityType }
        });
        return __awaiter(this, void 0, void 0, function* () {
            let rawJson = null;
            const persistence = new CommonClientPerisistence_1.commonClientPersistence();
            try {
                const newZkuser = yield persistence.db.zarkUser.create({
                    data: JSON.parse(JSON.stringify(zkuser))
                }).catch((err) => {
                    throw (err);
                }).finally(() => __awaiter(this, void 0, void 0, function* () {
                    persistence.db.$disconnect();
                }));
                rawJson = _super.plainToEntityType.call(this, newZkuser);
            }
            catch (error) {
                console.log(error.message);
            }
            finally {
                persistence.db.$disconnect();
            }
            return rawJson;
        });
    }
    updateUser(zkuser) {
        const _super = Object.create(null, {
            plainToEntityType: { get: () => super.plainToEntityType }
        });
        return __awaiter(this, void 0, void 0, function* () {
            let rawJson = null;
            const persistence = new CommonClientPerisistence_1.commonClientPersistence();
            try {
                const newZkuser = yield persistence.db.zarkUser.update({
                    where: {
                        zkuid: zkuser.zkuid
                    },
                    data: JSON.parse(JSON.stringify(zkuser))
                }).catch((err) => {
                    throw (err);
                }).finally(() => __awaiter(this, void 0, void 0, function* () {
                    persistence.db.$disconnect();
                }));
                rawJson = _super.plainToEntityType.call(this, newZkuser);
            }
            catch (error) {
                console.log(error.message);
            }
            finally {
                persistence.db.$disconnect();
            }
            return rawJson;
        });
    }
    deleteUser(zkuser) {
        throw new Error("Method not implemented.");
    }
    addAuthToken(authToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const persistence = new CommonClientPerisistence_1.commonClientPersistence();
            let newAuthToken = {};
            try {
                let newToken = yield persistence.db.authtoken.create({
                    data: JSON.parse(JSON.stringify(authToken))
                }).catch((err) => {
                    throw (err);
                }).finally(() => __awaiter(this, void 0, void 0, function* () {
                    persistence.db.$disconnect();
                }));
                newAuthToken = JSON.parse(JSON.stringify(newToken));
            }
            catch (error) {
                console.log(error);
            }
            finally {
                persistence.db.$disconnect();
            }
            return newAuthToken;
        });
    }
    updateUserAccessToken(authToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const persistence = new CommonClientPerisistence_1.commonClientPersistence();
            let newAuthToken = {};
            try {
                let newToken = yield persistence.db.authtoken.update({
                    where: {
                        authId: authToken.authId
                    },
                    data: { accessToken: authToken.accessToken }
                }).catch((err) => {
                    throw (err);
                }).finally(() => __awaiter(this, void 0, void 0, function* () {
                    persistence.db.$disconnect();
                }));
                newAuthToken = JSON.parse(JSON.stringify(newToken));
            }
            catch (error) {
                console.log(error);
            }
            finally {
                persistence.db.$disconnect();
            }
            return newAuthToken;
        });
    }
    deleteAuthToken(authToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const persistence = new CommonClientPerisistence_1.commonClientPersistence();
            let newAuthToken = {};
            try {
                let newToken = yield persistence.db.authtoken.delete({
                    where: {
                        authId: authToken.authId
                    },
                }).catch((err) => {
                    throw (err);
                }).finally(() => __awaiter(this, void 0, void 0, function* () {
                    persistence.db.$disconnect();
                }));
                newAuthToken = JSON.parse(JSON.stringify(newToken));
            }
            catch (error) {
                console.log(error);
            }
            finally {
                persistence.db.$disconnect();
            }
            return newAuthToken;
        });
    }
}
exports.UserCommand = UserCommand;
//# sourceMappingURL=UserCommand.js.map