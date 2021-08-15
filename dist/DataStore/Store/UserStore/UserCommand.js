"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCommand = void 0;
const CommonClientPerisistence_1 = require("../../Configuration/CommonClientPerisistence");
const BaseStore_1 = require("../BaseStore");
class UserCommand extends BaseStore_1.BaseStore {
    createUser(zkuser) {
        const _super = Object.create(null, {
            plainToEntityType: { get: () => super.plainToEntityType }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const persistence = new CommonClientPerisistence_1.commonClientPersistence();
            persistence.db.$transaction;
            const newZkuser = yield persistence.db.zarkUser.create({
                data: JSON.parse(JSON.stringify(zkuser))
            });
            const rawJson = _super.plainToEntityType.call(this, newZkuser);
            return rawJson;
        });
    }
    updateUser(zkuser) {
        throw new Error("Method not implemented.");
    }
    deleteUser(zkuser) {
        throw new Error("Method not implemented.");
    }
}
exports.UserCommand = UserCommand;
//# sourceMappingURL=UserCommand.js.map