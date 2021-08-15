"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseStore = void 0;
class BaseStore {
    plainToEntityType(resultSet) {
        const rawJson = JSON.parse(JSON.stringify(resultSet));
        return rawJson;
    }
    plainToEntityTypeArr(resultSet) {
        const rawJson = new Array();
        resultSet.forEach(function (obj) {
            rawJson.push(JSON.parse(JSON.stringify(obj)));
        });
        return rawJson;
    }
}
exports.BaseStore = BaseStore;
//# sourceMappingURL=BaseStore.js.map