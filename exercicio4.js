"use strict";
class Funcionario {
    constructor(nome, cargo, salario, inss, ir) {
        this.inss = 11;
        this.ir = 7.5;
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
        this.inss = inss;
        this.ir = ir;
    }
    SalarioL2() {
        let liquido1 = ((this.salario * this.inss) / 100);
        let salario1 = ((this.salario - liquido1));
        let liquido2 = ((salario1 * this.ir) / 100);
        let imposto = (liquido1 + liquido2);
        let liquido3 = (this.salario - imposto);
        return "Funcionário: " + this.nome + " Salário Bruto: " + this.salario + " Impostos a serem pagos:   " + imposto + " Salário Liquido : " + liquido3;
    }
    Salario3(percentual, ajuste) {
        percentual = ((this.salario * ajuste) / 100);
        percentual = (percentual + this.salario);
        let liquido1 = ((percentual * this.inss) / 100);
        let salario2 = ((percentual - liquido1));
        let liquido2 = ((salario2 * this.ir) / 100);
        let imposto = (liquido1 + liquido2);
        let liquido3 = (percentual - imposto);
        return "Funcionário: " + this.nome + ", Salario Bruto Novo: " + percentual + " impostos a serem pagos: " + imposto + " Salário Liquido: " + liquido3;
    }
}
let apresentar2 = new Funcionario("Ana Silvia", "", 3000, 11, 7.5);
console.log(apresentar2.SalarioL2());
let apresentar3 = new Funcionario("Ana Silvia", "", 3000, 11, 7.5);
console.log(apresentar3.Salario3(0, 10));
