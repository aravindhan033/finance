"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxQuery = void 0;
const CommonUtils_1 = require("../../../../Library/CommonUtils");
const FinanceStoreQuery_1 = require("../FinanceStoreQuery");
class TaxQuery extends FinanceStoreQuery_1.FinanceStoreQuery {
    get(zktaxid) {
        let result = super.fetch("zK_Tax", {
            zk_tax_id: {
                equals: CommonUtils_1.CommonUtils.convertNullToUndefined(zktaxid)
            }
        });
        return result;
    }
    getAll(zktaxid, zkcid) {
        let result = super.fetchAll("zK_Tax", {
            OR: [{
                    zk_tax_id: {
                        in: CommonUtils_1.CommonUtils.convertNullToUndefined(zktaxid)
                    }
                },
                {
                    zkcid: {
                        equals: CommonUtils_1.CommonUtils.convertNullToUndefined(zkcid)
                    }
                }
            ]
        });
        return result;
    }
}
exports.TaxQuery = TaxQuery;
//# sourceMappingURL=TaxQuery.js.map