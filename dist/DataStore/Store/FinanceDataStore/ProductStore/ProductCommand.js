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
exports.ProductCommand = void 0;
const FinanceStoreCommand_1 = require("../FinanceStoreCommand");
class ProductCommand extends FinanceStoreCommand_1.FinanceStoreCommand {
    addProductTax(zkproduct, zktaxid) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield _super.create.call(this, "zK_Product_Tax_Mapping", { zk_tax_id: zktaxid, zkpid: zkproduct.zkpid, zkcid: zkproduct.zkcid });
            return result != null ? true : false;
        });
    }
    deleteProductTax(zkproduct, zktaxid) {
        const _super = Object.create(null, {
            delete: { get: () => super.delete }
        });
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield _super.delete.call(this, "zK_Product_Tax_Mapping", { zk_tax_id: zktaxid, zkpid: zkproduct.zkpid, zkcid: zkproduct.zkcid });
            return result != null ? JSON.parse(JSON.stringify(result)) : result;
        });
    }
    create(zkproduct) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            delete zkproduct.zkp_unit_name;
            let result = yield _super.create.call(this, "zKProduct", JSON.parse(JSON.stringify(zkproduct)));
            return result != null ? JSON.parse(JSON.stringify(result)) : result;
        });
    }
    update(zkproduct) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield _super.update.call(this, "zKProduct", { zkpid: zkproduct.zkpid }, JSON.parse(JSON.stringify(zkproduct)));
            return result != null ? JSON.parse(JSON.stringify(result)) : result;
        });
    }
    delete(zkproduct) {
        const _super = Object.create(null, {
            delete: { get: () => super.delete }
        });
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield _super.delete.call(this, "zKProduct", { zkpid: zkproduct.zkpid });
            return result != null ? JSON.parse(JSON.stringify(result)) : result;
        });
    }
}
exports.ProductCommand = ProductCommand;
//# sourceMappingURL=ProductCommand.js.map