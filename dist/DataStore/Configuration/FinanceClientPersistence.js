"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonDBPersistence = void 0;
const commondb_client_1 = require("../../../Schema/generated/commondb_client");
class commonDBPersistence {
    constructor() {
        this.db = new commondb_client_1.PrismaClient();
    }
}
exports.commonDBPersistence = commonDBPersistence;
//# sourceMappingURL=FinanceClientPersistence.js.map