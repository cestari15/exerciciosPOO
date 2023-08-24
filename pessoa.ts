class Pessoa {
    nome:string;
    idade:number;
    comidas:string[];

    constructor(nome: string, idade:number, comidas:string[])
    {
        this.nome=nome;
        this.idade=idade;
        this.comidas=comidas;
    }

    cumprimentar(){

        let msgHabilitacao="já posso tirar minha CNH";
        if(this.idade < 18 )
        {
            msgHabilitacao="Não posso tirar minha CNH";
        } 

        return "olá meu nome é "+this.nome+" e tenho "+this.idade+" anos." + msgHabilitacao + ".";
    }


    comidasFavoritas()
    {
        console.log("Minha(s) comida(s) Favorita(s)");

        for(let i=0; i< this.comidas.length; i++)
        {
            console.log(this.comidas[i]);
        }
    }
}


let pessoa1 = new Pessoa("Jõao", 18, ["doguinho", "Lucas Ronlado", "Espaguete"]);

console.log(pessoa1.cumprimentar());

console.log(pessoa1.comidasFavoritas());

