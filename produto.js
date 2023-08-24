"use strict";
class Produto {
    constructor(nome, valor, desconto) {
        this.nome = nome;
        this.valor = valor;
        this.desconto = desconto;
    }
    Creatina() {
        return "o produto de nome " + this.nome + " tem o valor de " + " R$ " + this.valor + " porém tem " + this.desconto + " % " + "de desconto "
            + "terá um novo valor de " + " R$ " + (this.valor * this.desconto) / 100;
    }
    Whey() {
        return "o produto de nome " + this.nome + " tem o valor de " + " R$ " + this.valor + " porém tem " + this.desconto + " % " + "de desconto"
            + "terá um novo valor de " + " R$ " + (this.valor * this.desconto) / 100;
    }
    Carro() {
        return "o produto de nome " + this.nome + " tem o valor de " + " R$ " + this.valor + " porém tem " + this.desconto + " % " + "de desconto"
            + "terá um novo valor de " + " R$ " + (this.valor * this.desconto) / 100;
    }
}
let creatina = new Produto("creatina", 50, 50);
let whey = new Produto("Whey", 100, 50);
let carro = new Produto("carro", 50000, 50);
console.log(creatina.Creatina());
console.log(whey.Whey());
console.log(carro.Carro());
