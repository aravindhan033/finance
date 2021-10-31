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
exports.FinanceStoreCommand = void 0;
const FinanceClientPersistence_1 = require("../../Configuration/FinanceClientPersistence");
class FinanceStoreCommand {
    create(tablename, rowData) {
        return __awaiter(this, void 0, void 0, function* () {
            let rawJson = null;
            const persistence = new FinanceClientPersistence_1.financeClientPersistence();
            try {
                const newRow = yield persistence.db[tablename].create({
                    data: rowData
                }).catch((err) => {
                    throw (err);
                }).finally(() => __awaiter(this, void 0, void 0, function* () {
                    persistence.db.$disconnect();
                }));
                rawJson = newRow;
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
    createMany(tablename, rowData) {
        return __awaiter(this, void 0, void 0, function* () {
            let rawJson = null;
            const persistence = new FinanceClientPersistence_1.financeClientPersistence();
            try {
                const newRow = yield persistence.db[tablename].createMany({
                    data: rowData
                }).catch((err) => {
                    throw (err);
                }).finally(() => __awaiter(this, void 0, void 0, function* () {
                    persistence.db.$disconnect();
                }));
                rawJson = newRow;
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
    update(tablename, whereCondition, updatedRowData) {
        return __awaiter(this, void 0, void 0, function* () {
            let rawJson = null;
            const persistence = new FinanceClientPersistence_1.financeClientPersistence();
            try {
                const updatedRow = yield persistence.db[tablename].update({
                    where: whereCondition,
                    data: updatedRowData
                }).catch((err) => {
                    throw (err);
                }).finally(() => __awaiter(this, void 0, void 0, function* () {
                    persistence.db.$disconnect();
                }));
                rawJson = updatedRow;
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
    delete(tablename, whereCondition) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = false;
            const persistence = new FinanceClientPersistence_1.financeClientPersistence();
            try {
                const deletedRow = yield persistence.db[tablename].delete({
                    where: whereCondition
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
exports.FinanceStoreCommand = FinanceStoreCommand;
//# sourceMappingURL=FinanceStoreCommand.js.map