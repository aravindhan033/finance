"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonClientPersistence = void 0;
var commondb_client_1 = require("../Schema/generated/commondb_client");
var commonClientPersistence = /** @class */ (function () {
    function commonClientPersistence() {
        this.db = new commondb_client_1.PrismaClient();
        this.db.$connect();
    }
    return commonClientPersistence;
}());
exports.commonClientPersistence = commonClientPersistence;
