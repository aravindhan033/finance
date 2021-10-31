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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const Auth_1 = __importDefault(require("../../../Library/Middleware/Auth"));
const ProductProcessor_1 = require("../../../Processor/Processor/ProductProcessor");
const UnitProcessor_1 = require("../../../Processor/Processor/UnitProcessor");
const TaxProcessor_1 = require("../../../Processor/Processor/TaxProcessor");
const ProductSchema_1 = require("../Schema/ProductSchema");
const CommonUtils_1 = require("../../../Library/CommonUtils");
const productRoutes = (server, options) => __awaiter(void 0, void 0, void 0, function* () {
    server.post("/product/add", { schema: ProductSchema_1.addProduct, preValidation: Auth_1.default }, (req, reply) => {
        let zkproduct = req.body["product"];
        zkproduct.zkcid = CommonUtils_1.CommonUtils.getZkcid(req);
        let taxArr = req.body["tax"];
        const productProcessor = new ProductProcessor_1.ProductProcessor();
        productProcessor.addProduct(zkproduct, taxArr).then((res) => {
            if (res != null) {
                reply.send(res);
            }
            else {
                reply.send({});
            }
        }).catch(() => {
            reply.status(500);
            reply.send({});
        });
    });
    server.get("/product/get/:zkpid", { preValidation: Auth_1.default }, (req, reply) => {
        let zkpid = req.params["zkpid"];
        const productProcessor = new ProductProcessor_1.ProductProcessor();
        productProcessor.getProduct(zkpid).then((res) => {
            if (res != null) {
                reply.send(res);
            }
            else {
                reply.send({});
            }
        });
    });
    server.post("/unit/add", { schema: ProductSchema_1.addProduct, preValidation: Auth_1.default }, (req, reply) => {
        let zkunit = req.body;
        const unitProcessor = new UnitProcessor_1.UnitProcessor();
        unitProcessor.findOrAddUnit(zkunit.zk_unit_name, zkunit.zkcid).then((res) => {
            if (res != null) {
                reply.send(res);
            }
            else {
                reply.send({});
            }
        });
    });
    server.post("/tax/add", { schema: ProductSchema_1.addtax, preValidation: Auth_1.default }, (req, reply) => {
        let zktax = req.body;
        zktax.zkcid = CommonUtils_1.CommonUtils.getZkcid(req);
        const taxProcessor = new TaxProcessor_1.TaxProcessor();
        taxProcessor.addTax(zktax).then((res) => {
            if (res != null) {
                reply.send(res);
            }
            else {
                reply.send({});
            }
        });
    });
    server.get("/tax/getAll", { schema: ProductSchema_1.addProduct, preValidation: Auth_1.default }, (req, reply) => {
        let zktax = req.body;
        const taxProcessor = new TaxProcessor_1.TaxProcessor();
    });
});
exports.default = (0, fastify_plugin_1.default)(productRoutes);
//# sourceMappingURL=ProductRoute.js.map