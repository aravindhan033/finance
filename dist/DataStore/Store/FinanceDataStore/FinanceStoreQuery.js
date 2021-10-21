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
exports.FinanceStoreQuery = void 0;
const FinanceClientPersistence_1 = require("../../Configuration/FinanceClientPersistence");
class FinanceStoreQuery {
    fetch(tablename, whereCondition) {
        return __awaiter(this, void 0, void 0, function* () {
            const persistence = new FinanceClientPersistence_1.financeClientPersistence();
            let rawJson = null;
            try {
                const data = yield persistence.db[tablename].findFirst({
                    where: whereCondition
                }).catch((err) => {
                    throw (err);
                }).finally(() => __awaiter(this, void 0, void 0, function* () {
                    persistence.db.$disconnect();
                }));
                rawJson = data;
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
    fetchAll(tablename, whereCondition) {
        return __awaiter(this, void 0, void 0, function* () {
            const persistence = new FinanceClientPersistence_1.financeClientPersistence();
            let rawJson = null;
            try {
                const data = yield persistence.db.zK_Unit.findMany({
                    where: whereCondition
                }).catch((err) => {
                    throw (err);
                }).finally(() => __awaiter(this, void 0, void 0, function* () {
                    persistence.db.$disconnect();
                }));
                rawJson = data;
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
}
exports.FinanceStoreQuery = FinanceStoreQuery;
//# sourceMappingURL=FinanceStoreQuery.js.map