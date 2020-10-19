'use strict'

//Utilizar 3 formas de criar objetos

//Forma Literal
let Obj1 = {
    RA: "0030481911029",
    Nome: "Matheus Soares Vieira",
}

//Usando Constructor
let Obj2 = new Object();
Obj2.RA = "0030481911029";
Obj2.Nome = "Matheus Soares Vieira";


//Função Construtora
function Obj(RA, Nome) {
    this.RA = RA;
    this.nome = Nome;
}

let Obj3 = new Obj("0030481911029", "Matheus Soares Vieira");

console.log(Obj1);
console.log(Obj2);
console.log(Obj3);






