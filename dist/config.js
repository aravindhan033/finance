"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//const result = dotenv.config();
const config = {
    refreshTokenExpire: (60 * 60 * 24) * 200,
    refreshTokenSecret: process.env.PASSWORD_HASH_SECRET,
    accessTokenExpire: 60 * 20,
    accessTokenSecret: process.env.PASSWORD_HASH_SECRET,
};
exports.default = config;
//# sourceMappingURL=config.js.map