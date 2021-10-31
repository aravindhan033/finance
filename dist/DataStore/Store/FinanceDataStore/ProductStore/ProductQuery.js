"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductQuery = void 0;
const FinanceStoreQuery_1 = require("../FinanceStoreQuery");
class ProductQuery extends FinanceStoreQuery_1.FinanceStoreQuery {
    getProductById(zkpid) {
        let product = super.fetchWithConditionAndJoin("zKProduct", { where: { zkpid: BigInt(zkpid) }, include: { ZK_Unit: true } });
        return product != null ? product : null;
    }
    getProductByFilter() {
        throw new Error("Method not implemented.");
    }
}
exports.ProductQuery = ProductQuery;
//# sourceMappingURL=ProductQuery.js.map