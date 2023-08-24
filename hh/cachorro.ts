class Cachorro{
    nome:string;
    raca:string;
    idade:number;


    constructor(nome:string, raca:string, idade:number)
    {
        this.nome=nome;
        this.raca=raca;
        this.idade=idade;
       
    }

    apresentar(){
        return "oi, eu sou " + this.nome+ " um " +this.raca+ " de " +this.idade+ " anos";
    }

    apresentarPara(pessoa:string){
        return "ola " + pessoa + " eu sou o dog " + this.nome + " e tenho " + this.idade + " anos de idade ";
    }
}


let test = new Cachorro("", "Rafael", 16);
console.log(test.nome);
console.log(test.apresentarPara("Lucas"));


let Lucas = new Cachorro("Lucas", "vira lata", 66);

let thor =new Cachorro("reginaldo", "morto de fome", 16);

console.log(Lucas.nome);

console.log(thor.nome);

console.log(Lucas.apresentar());
console.log(thor.apresentar());




