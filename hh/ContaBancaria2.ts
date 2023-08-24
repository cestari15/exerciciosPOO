class ContaBancaria2
{
    nomeT:string;
    saldo:number;


    constructor(nomeT:string, saldo:number)
    {
        this.nomeT=nomeT; 
        this.saldo=saldo;
    }

    
    consultarSaldo2()
    {
        
        return "o saldo da conta de "+this.nomeT +  this.saldo + ",00 de saldo "
    }
    depositar2(deposito:number)
    {
        
        return "o saldo da conta "+ this.nomeT +" depois do deposito é de " + (deposito + this.saldo);
    }
    saque2(saque:number){

        
        if(this.saldo < saque){
            return "Saldo Indisponivel"
        } else{

            return "Saque Realizado com sucesso, saldo da conta atual é de " + (this.saldo - saque);
        }

    }
    saque3(saque:number){

        
        if(this.saldo < saque){
            return "Saldo Indisponivel"
        } else{

            return "Saque Realizado com sucesso, saldo da conta atual é de " + (this.saldo - saque);
        }

    }
}
let retornar2 = new ContaBancaria2("Maria", 15000);
console.log(retornar2.consultarSaldo2());

let depositar2 = new ContaBancaria2("Maria",20000);
console.log(depositar2.depositar2(500));

let saque22 = new ContaBancaria2("", 35000);
console.log(saque22.saque2(200));

let saque33 = new ContaBancaria2("", 35000);
console.log(saque33.saque3(555200));
