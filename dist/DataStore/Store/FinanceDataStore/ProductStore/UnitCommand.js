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
exports.UnitCommand = void 0;
const FinanceStoreCommand_1 = require("../FinanceStoreCommand");
class UnitCommand extends FinanceStoreCommand_1.FinanceStoreCommand {
    create(zkunit) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield _super.create.call(this, "zK_Unit", JSON.parse(JSON.stringify(zkunit)));
            return result != null ? JSON.parse(JSON.stringify(result)) : result;
        });
    }
    update(zkunit) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield _super.update.call(this, "zK_Unit", { zk_unit_id: zkunit.zk_unit_id }, JSON.parse(JSON.stringify(zkunit)));
            return result != null ? JSON.parse(JSON.stringify(result)) : result;
        });
    }
    delete(zkunit) {
        const _super = Object.create(null, {
            delete: { get: () => super.delete }
        });
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield _super.delete.call(this, "zK_Unit", { zk_unit_id: zkunit.zk_unit_id });
            return result != null ? JSON.parse(JSON.stringify(result)) : result;
        });
    }
}
exports.UnitCommand = UnitCommand;
//# sourceMappingURL=UnitCommand.js.map