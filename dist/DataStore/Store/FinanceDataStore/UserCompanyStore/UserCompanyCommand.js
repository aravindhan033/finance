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
exports.UserCompanyCommand = void 0;
const FinanceClientPersistence_1 = require("../../../Configuration/FinanceClientPersistence");
class UserCompanyCommand {
    addUserToCompany(zkuid, zkcid, user_profile) {
        return __awaiter(this, void 0, void 0, function* () {
            let rawJson = null;
            const persistence = new FinanceClientPersistence_1.financeClientPersistence();
            try {
                const newzkcompany = yield persistence.db.zKUserCompanyMapping.create({
                    data: {
                        zkuid: zkuid,
                        zkcid: zkcid,
                        user_profile: user_profile
                    }
                }).catch((err) => {
                    throw (err);
                }).finally(() => __awaiter(this, void 0, void 0, function* () {
                    persistence.db.$disconnect();
                }));
                rawJson = JSON.parse(JSON.stringify(newzkcompany));
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
    updateUserProfile(zkuid, zkcid, user_profile) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = false;
            const persistence = new FinanceClientPersistence_1.financeClientPersistence();
            try {
                const updatedzkcompany = yield persistence.db.zKUserCompanyMapping.update({
                    where: {
                        zkuid_zkcid: {
                            zkcid: zkcid,
                            zkuid: zkuid
                        }
                    },
                    data: { user_profile: user_profile }
                }).catch((err) => {
                    throw (err);
                }).finally(() => __awaiter(this, void 0, void 0, function* () {
                    persistence.db.$disconnect();
                }));
                result = true;
            }
            catch (error) {
                console.log(error.message);
            }
            finally {
                persistence.db.$disconnect();
            }
            return result;
        });
    }
    deleteUserFromCompany(zkuid, zkcid) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = false;
            const persistence = new FinanceClientPersistence_1.financeClientPersistence();
            try {
                const updatedzkcompany = yield persistence.db.zKUserCompanyMapping.delete({
                    where: {
                        zkuid_zkcid: {
                            zkcid: zkcid,
                            zkuid: zkuid
                        }
                    },
                }).catch((err) => {
                    throw (err);
                }).finally(() => __awaiter(this, void 0, void 0, function* () {
                    persistence.db.$disconnect();
                }));
                result = true;
            }
            catch (error) {
                console.log(error.message);
            }
            finally {
                persistence.db.$disconnect();
            }
            return result;
        });
    }
}
exports.UserCompanyCommand = UserCompanyCommand;
//# sourceMappingURL=UserCompanyCommand.js.map