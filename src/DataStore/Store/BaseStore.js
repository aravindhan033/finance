"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseStore = void 0;
var BaseStore = /** @class */ (function () {
    function BaseStore() {
    }
    BaseStore.prototype.plainToEntityType = function (resultSet) {
        var rawJson = JSON.parse(JSON.stringify(resultSet));
        return rawJson;
    };
    BaseStore.prototype.plainToEntityTypeArr = function (resultSet) {
        var rawJson = new Array();
        resultSet.forEach(function (obj) {
            rawJson.push(JSON.parse(JSON.stringify(obj)));
        });
        return rawJson;
    };
    return BaseStore;
}());
exports.BaseStore = BaseStore;
