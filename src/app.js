import { Numberbases } from './numbases.js'
function getTenNumIn(){
let base = document.getElementById('base').value;
let baser = parseInt(base);
if(baser){
let x = new Numberbases(baser);
let convert = parseInt(document.getElementById('numb1').value);

document.getElementById('result1').innerHTML = x.getNumFromBaseTenNum(convert);
document.getElementById('basest').innerHTML='<sub>'+baser+'</sub>'
}
}
document.getElementById('numb1').onkeyup = function(){getTenNumIn()}



 