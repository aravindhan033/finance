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
exports.UserQuery = void 0;
const CommonClientPerisistence_1 = require("../../Configuration/CommonClientPerisistence");
const BaseStore_1 = require("../BaseStore");
class UserQuery extends BaseStore_1.BaseStore {
    getUser(zkuser) {
        const _super = Object.create(null, {
            plainToEntityType: { get: () => super.plainToEntityType }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const persistence = new CommonClientPerisistence_1.commonClientPersistence();
            let rawJson;
            try {
                const newZkuser = yield persistence.db.zarkUser.findFirst({
                    where: {
                        OR: [
                            {
                                zkuid: {
                                    equals: zkuser["zkuid"]
                                }
                            }, {
                                email: {
                                    equals: zkuser["email"]
                                },
                            },
                            {
                                mobile_number: {
                                    equals: zkuser["mobile_number"]
                                }
                            },
                        ]
                    }
                }).catch((err) => {
                    throw (err);
                }).finally(() => __awaiter(this, void 0, void 0, function* () {
                    persistence.db.$disconnect();
                }));
                rawJson = _super.plainToEntityType.call(this, newZkuser);
            }
            catch (err) {
                console.log(err);
            }
            finally {
                persistence.db.$disconnect();
            }
            return rawJson;
        });
    }
    getUserAuthToken(zkuid) {
        return __awaiter(this, void 0, void 0, function* () {
            let refreshTokenArr = null;
            const persistence = new CommonClientPerisistence_1.commonClientPersistence();
            try {
                let authToken = yield persistence.db.authtoken.findMany({
                    where: {
                        authUserId: {
                            equals: zkuid
                        }
                    }
                }).catch((err) => {
                    throw (err);
                }).finally(() => __awaiter(this, void 0, void 0, function* () {
                    persistence.db.$disconnect();
                }));
                refreshTokenArr = JSON.parse(JSON.stringify(authToken));
            }
            catch (erro) {
                console.log(erro);
            }
            finally {
                persistence.db.$disconnect();
            }
            return refreshTokenArr;
        });
    }
    getUserAuthTokenByAuthId(authId) {
        return __awaiter(this, void 0, void 0, function* () {
            let refreshTokenArr = null;
            const persistence = new CommonClientPerisistence_1.commonClientPersistence();
            try {
                let authToken = yield persistence.db.authtoken.findFirst({
                    where: {
                        authId: {
                            equals: authId
                        }
                    }
                }).catch((err) => {
                    throw (err);
                }).finally(() => __awaiter(this, void 0, void 0, function* () {
                    persistence.db.$disconnect();
                }));
                refreshTokenArr = JSON.parse(JSON.stringify(authToken));
            }
            catch (erro) {
                console.log(erro);
            }
            finally {
                persistence.db.$disconnect();
            }
            return refreshTokenArr;
        });
    }
}
exports.UserQuery = UserQuery;
//# sourceMappingURL=UserQuery.js.map