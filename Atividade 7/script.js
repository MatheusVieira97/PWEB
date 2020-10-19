'use strict'

function Maior(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

let num1 = prompt("Digite num 1");
let num2 = prompt("Digite num 2");
let num3 = prompt("Digite num 3");
let oMaior = Maior(num1,num2,num3);

alert("Verifique resultado no console");

console.log(oMaior);