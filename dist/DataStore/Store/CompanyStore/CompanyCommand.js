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
exports.CompanyCommand = void 0;
const CommonClientPerisistence_1 = require("../../Configuration/CommonClientPerisistence");
class CompanyCommand {
    create(zkcompany) {
        return __awaiter(this, void 0, void 0, function* () {
            let rawJson = null;
            const persistence = new CommonClientPerisistence_1.commonClientPersistence();
            try {
                const newzkcompany = yield persistence.db.zarkCompany.create({
                    data: JSON.parse(JSON.stringify(zkcompany))
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
    update(zkcompany) {
        return __awaiter(this, void 0, void 0, function* () {
            let rawJson = null;
            const persistence = new CommonClientPerisistence_1.commonClientPersistence();
            try {
                const updatedzkcompany = yield persistence.db.zarkCompany.update({
                    where: {
                        zkcid: zkcompany.zkcid
                    },
                    data: JSON.parse(JSON.stringify(zkcompany))
                }).catch((err) => {
                    throw (err);
                }).finally(() => __awaiter(this, void 0, void 0, function* () {
                    persistence.db.$disconnect();
                }));
                rawJson = JSON.parse(JSON.stringify(updatedzkcompany));
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
    delete(zkcompany) {
        return __awaiter(this, void 0, void 0, function* () {
            let rawJson = null;
            const persistence = new CommonClientPerisistence_1.commonClientPersistence();
            try {
                const updatedzkcompany = yield persistence.db.zarkCompany.delete({
                    where: {
                        zkcid: zkcompany.zkcid
                    },
                }).catch((err) => {
                    throw (err);
                }).finally(() => __awaiter(this, void 0, void 0, function* () {
                    persistence.db.$disconnect();
                }));
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
}
exports.CompanyCommand = CompanyCommand;
//# sourceMappingURL=CompanyCommand.js.map