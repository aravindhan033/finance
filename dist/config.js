"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const result = dotenv_1.default.config({ path: "/Users/aravind-5668/Aravind/pet/finance/.env" });
//const result = dotenv.config();
console.log(result);
const config = {
    refreshTokenExpire: (60 * 60 * 24) * 200,
    refreshTokenSecret: result.parsed["PASSWORD_HASH_SECRET"],
    accessTokenExpire: 60 * 20,
    accessTokenSecret: result.parsed["PASSWORD_HASH_SECRET"],
};
exports.default = config;
//# sourceMappingURL=config.js.map