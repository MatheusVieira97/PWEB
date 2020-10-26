'use strict'

//Criar função construtora para triangulo e instanciar objeto
function Retangulo(baseEntr, alturaEntr) {
    this.base = baseEntr;
    this.altura = alturaEntr;
    this.area = 0;

    function calcArea() {
        return base * altura;        
    }
}

var Ret1 = new Retangulo(5, 10);

//Criar função conta e usar herança para corrente e poupança
function Conta() {
    var nome;
    var banco;
    var numConta;
    var saldo;

    this.setNome = function(nomeEntr) {
        nome = nomeEntr;
    }

    this.setBanco = function(bancoEntr) {
        banco = bancoEntr;
    }

    this.setNumConta = function(numContaEntr){
        numConta = numContaEntr;
    }

    this.setSaldo = function(saldoEntr) {
        saldo = saldoEntr;
    }

    this.getNome = function() {
        return nome;
    }
    this.getBanco = function() {
        return banco;
    }
    this.getNumConta = function() {
        return numConta;
    }
    this.getSaldo = function() {
        return saldo;
    }
}

function Corrente() {
    var saldoEspecial;
    this.getSaldoEspecial = function() {
        return saldoEspecial;
    }
    this.setSaldoEspecial = function(saldoEsp) { 
        saldoEspecial = saldoEsp;
    }
}

function Poupança() {
    var juros;
    var data;
    var vencimento;

    this.getJuros = function() {
        return juros;
    }

    this.getData = function() {
        return data;
    }

    this.getVencimento = function() {
        return vencimento;
    }

    this.setJuros = function(jurosEntr){
        juros = jurosEntr;
    }

    this.setData = function(dataEntr){
        data = dataEntr;
    }
}

Corrente.prototype = new Conta();
Poupança.prototype = new Conta();

//Instanciando objeto Corrente
var Corrente1 = new Corrente();

Corrente1.setNome('Matheus');
Corrente1.setBanco('Novo Banco');
Corrente1.setNumConta(1);
Corrente1.setSaldo(1000);
Corrente1.setSaldoEspecial(500);

//Instanciando objeto Poupança
var Poupança1 = new Poupança();

Poupança1.setNome('Jean');
Poupança1.setBanco('Novo Banco');
Poupança1.setNumConta(2);
Poupança1.setSaldo(1000);
Poupança1.setJuros(2);
Poupança1.setData('01/01/2021');


//Mostrar dados no console.log
console.log("Dados Correntista");
console.log(Corrente1.getNome());
console.log(Corrente1.getBanco());
console.log(Corrente1.getNumConta());
console.log(Corrente1.getSaldo());
console.log(Corrente1.getSaldoEspecial());

console.log('\n');

console.log("Dados Poupança");
console.log(Poupança1.getNome());
console.log(Poupança1.getBanco());
console.log(Poupança1.getNumConta());
console.log(Poupança1.getSaldo());
console.log(Poupança1.getJuros());
console.log(Poupança1.getData());

