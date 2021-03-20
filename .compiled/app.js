'use strict';

var _numbases = require('./numbases.js');

function getTenNumIn() {
  var base = document.getElementById('base').value;
  var baser = parseInt(base);
  if (baser) {
    var x = new _numbases.Numberbases(baser);
    var convert = parseInt(document.getElementById('numb1').value);

    document.getElementById('result1').innerHTML = x.getNumFromBaseTenNum(convert);
    document.getElementById('basest').innerHTML = '<sub>' + baser + '</sub>';
  }
}
document.getElementById('numb1').onkeyup = function () {
  getTenNumIn();
};
//# sourceMappingURL=app.js.map