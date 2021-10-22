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
        let accessToken = request.headers["x-access-token"];
        const decodedToken = jwt.decode(accessToken, config_1.default.accessTokenSecret);
        return Number(decodedToken.data.zkuid);
    }
    static getZkcid(request) {
        if (request.headers["x-zkcid"] != null) {
            return Number(request.headers["x-zkcid"]);
        }
        return null;
    }
    static convertNullToUndefined(value) {
        return value == null ? undefined : value;
    }
}
exports.CommonUtils = CommonUtils;
//# sourceMappingURL=CommonUtils.js.map