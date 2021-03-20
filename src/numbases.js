"use strict";
export const __esModule = true;
//const _Numberbases = void 0;
//export { _Numberbases as Numberbases };
var Numberbases = /** @class */ (function () {
    //private _counted:string[];
    const warning = 'Only base numbers less than 16.'
    function Numberbases(base) {
        this._counts = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
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
}());
const _Numberbases = Numberbases;
export { _Numberbases as Numberbases };
