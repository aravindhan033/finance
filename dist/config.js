"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const result = dotenv_1.default.config();
const config = {
    refreshTokenExpire: (60 * 60 * 24) * 200,
    refreshTokenSecret: process.env.PASSWORD_HASH_SECRET,
    accessTokenExpire: 60 * 20,
    accessTokenSecret: process.env.PASSWORD_HASH_SECRET,
};
exports.default = config;
//# sourceMappingURL=config.js.map