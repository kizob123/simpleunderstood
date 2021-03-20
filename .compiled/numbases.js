"use strict";

exports.__esModule = true;
exports.Numberbases = void 0;
var Numberbases = /** @class */function () {
    //private _counted:string[];
    function Numberbases(base) {
        this._counts = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
        this._base = base;
    }
    Numberbases.prototype.getNumFromBaseTenNum = function (baseTen) {
        var rem = "";
        var div = baseTen;
        var newNum = '';
        while (div > 0) {
            if (div > 0) {
                rem = this._counts[div % this._base];
                div = Math.floor(div / this._base);
            }
            newNum = rem + newNum;
        }
        return newNum;
    };
    Numberbases.prototype.getBase = function () {
        return this._base;
    };
    return Numberbases;
}();
exports.Numberbases = Numberbases;
//# sourceMappingURL=numbases.js.map