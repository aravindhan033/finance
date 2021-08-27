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
exports.CompanyQuery = void 0;
const CommonClientPerisistence_1 = require("../../Configuration/CommonClientPerisistence");
class CompanyQuery {
    get(zkcompany) {
        return __awaiter(this, void 0, void 0, function* () {
            const persistence = new CommonClientPerisistence_1.commonClientPersistence();
            let rawJson;
            try {
                const newzkcompany = yield persistence.db.zarkCompany.findFirst({
                    where: {
                        OR: [
                            {
                                zkcid: {
                                    equals: zkcompany.zkcid
                                }
                            }, {
                                companyName: {
                                    equals: zkcompany.companyName
                                },
                            }
                        ]
                    }
                }).catch((err) => {
                    throw (err);
                }).finally(() => __awaiter(this, void 0, void 0, function* () {
                    persistence.db.$disconnect();
                }));
                rawJson = JSON.parse(JSON.stringify(newzkcompany));
            }
            catch (err) {
                console.log(err);
            }
            finally {
                persistence.db.$disconnect();
            }
            return rawJson;
        });
    }
}
exports.CompanyQuery = CompanyQuery;
//# sourceMappingURL=CompanyQuery.js.map