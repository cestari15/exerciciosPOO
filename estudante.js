"use strict";
class Estudante {
    constructor(nome, idade, notas) {
        this.nome = nome;
        this.idade = idade;
        this.notas = notas;
    }
    verificador() {
        let soma = 0;
        let media = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma = soma + this.notas[i];
        }
        media = soma / this.notas.length;
        if (media >= 7) {
            return "Parabéns," + this.nome + "! Sua média é " + media + " e você está aprovado(a) e você tem " + this.idade + " caso você não saiba";
        }
        else {
            return this.nome, "sua média é " + media + " e você precisa estudar mais para melhorar seu desempenho " + this.idade + " caso você não saiba";
        }
    }
}
let total = new Estudante("Maria", 20, [8, 7.5, 9.2, 6.8, 9.5]);
console.log(total.verificador());
