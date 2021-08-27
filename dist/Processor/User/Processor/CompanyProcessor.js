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
exports.CompanyProcessor = void 0;
const CompanyCommand_1 = require("../../../DataStore/Store/CompanyStore/CompanyCommand");
class CompanyProcessor {
    createCompany(zkcompany) {
        return __awaiter(this, void 0, void 0, function* () {
            const companyCommand = new CompanyCommand_1.CompanyCommand();
            let newCompany = yield companyCommand.create(zkcompany);
            return newCompany;
        });
    }
    updateCompanyDetails(zkcompany) {
        return __awaiter(this, void 0, void 0, function* () {
            const companyCommand = new CompanyCommand_1.CompanyCommand();
            let updatedCompany = yield companyCommand.update(zkcompany);
            return updatedCompany;
        });
    }
}
exports.CompanyProcessor = CompanyProcessor;
//# sourceMappingURL=CompanyProcessor.js.map