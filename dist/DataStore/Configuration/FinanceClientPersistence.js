"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.financeClientPersistence = void 0;
const financedb_client_1 = require("../../../Schema/generated/financedb_client");
class financeClientPersistence {
    constructor() {
        console.log("fin db connected");
        this.db = new financedb_client_1.PrismaClient();
    }
}
exports.financeClientPersistence = financeClientPersistence;
//# sourceMappingURL=FinanceClientPersistence.js.map