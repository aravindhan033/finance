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
exports.UserCompanyProcessor = void 0;
const UserCompanyCommand_1 = require("../../DataStore/Store/FinanceDataStore/UserCompanyStore/UserCompanyCommand");
class UserCompanyProcessor {
    addUserToCompany(zkuid, zkcid, user_profile) {
        return __awaiter(this, void 0, void 0, function* () {
            if (zkuid != null && zkcid != null) {
                const userCompanyCommand = new UserCompanyCommand_1.UserCompanyCommand();
                yield userCompanyCommand.addUserToCompany(zkuid, zkcid, user_profile);
                return true;
            }
            else {
                return false;
            }
        });
    }
}
exports.UserCompanyProcessor = UserCompanyProcessor;
//# sourceMappingURL=UserCompanyProcessor.js.map