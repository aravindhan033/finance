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
exports.TaxProcessor = void 0;
const TaxCommand_1 = require("../../DataStore/Store/FinanceDataStore/TaxStore/TaxCommand");
const TaxQuery_1 = require("../../DataStore/Store/FinanceDataStore/TaxStore/TaxQuery");
class TaxProcessor {
    getTax(zktaxid) {
        return __awaiter(this, void 0, void 0, function* () {
            const taxQry = new TaxQuery_1.TaxQuery();
            let newTax = yield taxQry.get(zktaxid);
            return newTax;
        });
    }
    getAllTax(zkcid) {
        return __awaiter(this, void 0, void 0, function* () {
            const taxQry = new TaxQuery_1.TaxQuery();
            let newTax = yield taxQry.getAll(null, zkcid);
            return newTax;
        });
    }
    addTax(zktax) {
        return __awaiter(this, void 0, void 0, function* () {
            const taxCmd = new TaxCommand_1.TaxCommand();
            let newTax = yield taxCmd.create(zktax);
            return newTax;
        });
    }
    deleteTax(zktax) {
        return __awaiter(this, void 0, void 0, function* () {
            const taxCmd = new TaxCommand_1.TaxCommand();
            let newTax = yield taxCmd.delete(zktax);
            return newTax;
        });
    }
}
exports.TaxProcessor = TaxProcessor;
//# sourceMappingURL=TaxProcessor.js.map