"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonUtils = void 0;
const config_1 = __importDefault(require("../config"));
var jwt = require('jsonwebtoken');
class CommonUtils {
    static getZkuid(request) {
        if (request.headers["x-zkuid"] != null) {
            return Number(request.headers["x-zkuid"]);
        }
        else {
            let accessToken = request.headers["x-access-token"];
            const decodedToken = jwt.decode(accessToken, config_1.default.accessTokenSecret);
            return Number(decodedToken.data.zkuid);
        }
    }
}
exports.CommonUtils = CommonUtils;
//# sourceMappingURL=CommonUtils.js.map