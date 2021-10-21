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
exports.UnitProcessor = void 0;
const UnitCommand_1 = require("../../DataStore/Store/FinanceDataStore/ProductStore/UnitCommand");
const UnitQuery_1 = require("../../DataStore/Store/FinanceDataStore/ProductStore/UnitQuery");
class UnitProcessor {
    findOrAddUnit(unitName, zkcid) {
        return __awaiter(this, void 0, void 0, function* () {
            let zkunit = null;
            zkunit = yield this.findUnit(unitName.trim(), zkcid);
            if (zkunit == null) {
                zkunit = {};
                zkunit.zk_unit_name = unitName;
                zkunit.zkcid = zkcid;
                zkunit = yield this.addUnit(zkunit);
            }
            return zkunit;
        });
    }
    addUnit(zkunit) {
        return __awaiter(this, void 0, void 0, function* () {
            const unitCmd = new UnitCommand_1.UnitCommand();
            return yield unitCmd.create(zkunit);
        });
    }
    findUnit(unitName, zkcid) {
        return __awaiter(this, void 0, void 0, function* () {
            const unitQuery = new UnitQuery_1.UnitQuery();
            let zkUnit = yield unitQuery.get(null, unitName, zkcid);
            return zkUnit;
        });
    }
}
exports.UnitProcessor = UnitProcessor;
//# sourceMappingURL=UnitProcessor.js.map