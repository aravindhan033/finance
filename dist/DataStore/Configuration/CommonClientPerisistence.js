"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonClientPersistence = void 0;
const commondb_client_1 = require("../../../Schema/generated/commondb_client");
class commonClientPersistence {
    constructor() {
        console.log("cleit");
        this.db = new commondb_client_1.PrismaClient();
        this.db.$connect();
    }
}
exports.commonClientPersistence = commonClientPersistence;
//# sourceMappingURL=CommonClientPerisistence.js.map