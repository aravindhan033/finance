"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonDBPersistence = void 0;
var commondb_client_1 = require("../Schema/generated/commondb_client");
var commonDBPersistence = /** @class */ (function () {
    function commonDBPersistence() {
        this.db = new commondb_client_1.PrismaClient();
    }
    return commonDBPersistence;
}());
exports.commonDBPersistence = commonDBPersistence;
