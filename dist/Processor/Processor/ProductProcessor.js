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
exports.ProductProcessor = void 0;
const ProductCommand_1 = require("../../DataStore/Store/FinanceDataStore/ProductStore/ProductCommand");
const UnitProcessor_1 = require("./UnitProcessor");
class ProductProcessor {
    addProduct(zkproduct) {
        return __awaiter(this, void 0, void 0, function* () {
            let newzkProduct;
            try {
                if (zkproduct.zkp_unit_name != null) {
                    const unitProc = new UnitProcessor_1.UnitProcessor();
                    let zkUnit = yield unitProc.findOrAddUnit(zkproduct.zkp_unit_name, zkproduct.zkcid);
                    zkproduct.zkp_unit = zkUnit != null ? zkUnit.zk_unit_id : null;
                }
                if (this.validateProduct(newzkProduct)) {
                    const productCmd = new ProductCommand_1.ProductCommand();
                    newzkProduct = yield productCmd.create(zkproduct);
                    //productCmd.addProductTax(newzkProduct,)
                }
            }
            catch (error) {
            }
            return newzkProduct;
        });
    }
    updateProduct(zkproduct) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield null;
        });
    }
    addProductTaxMapping(zkpid, zktaxid) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    deleteProductTaxMapping(zkpid, zktaxid) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    validateProduct(zkproduct) {
        return true;
    }
}
exports.ProductProcessor = ProductProcessor;
//# sourceMappingURL=ProductProcessor.js.map