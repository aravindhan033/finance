"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitQuery = void 0;
const CommonUtils_1 = require("../../../../Library/CommonUtils");
const FinanceStoreQuery_1 = require("../FinanceStoreQuery");
class UnitQuery extends FinanceStoreQuery_1.FinanceStoreQuery {
    getAll(zkunitid, zkcid) {
        let result = super.fetchAll("zK_Unit", { OR: [
                {
                    zk_unit_id: {
                        in: CommonUtils_1.CommonUtils.convertNullToUndefined(zkunitid)
                    }
                },
                {
                    zkcid: {
                        equals: CommonUtils_1.CommonUtils.convertNullToUndefined(zkcid)
                    }
                }
            ] });
        return result;
    }
    get(zkunitid, zkunitname, zkcid) {
        let result = super.fetch("zK_Unit", {
            OR: [
                {
                    zk_unit_name: {
                        equals: CommonUtils_1.CommonUtils.convertNullToUndefined(zkunitname)
                    }
                },
                {
                    zk_unit_id: {
                        equals: CommonUtils_1.CommonUtils.convertNullToUndefined(zkunitid)
                    }
                }
            ],
            AND: [{
                    zkcid: {
                        equals: zkcid
                    }
                }]
        });
        return result;
    }
}
exports.UnitQuery = UnitQuery;
//# sourceMappingURL=UnitQuery.js.map