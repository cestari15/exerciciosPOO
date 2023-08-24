class ContaBancaria3
{
    nomeT:string;
    saldo:number;


    constructor(nomeT:string, saldo:number)
    {
        this.nomeT=nomeT; 
        this.saldo=saldo;
    }

    
    consultarSaldo3()
    {
        
        return "o saldo da conta de "+this.nomeT +  this.saldo + ",00 de saldo "
    }
    depositar3(deposito:number)
    {
        
        return "o saldo da conta "+ this.nomeT +" depois do deposito é de " + (deposito + this.saldo);
    }
    saque3(saque:number){

        
        if(this.saldo < saque){
            return "Saldo Indisponivel"
        } else{

            return "Saque Realizado com sucesso, saldo da conta atual é de " + (this.saldo - saque);
        }

    }
    saque4(saque:number){

        
        if(this.saldo < saque){
            return "Saldo Indisponivel"
        } else{

            return "Saque Realizado com sucesso, saldo da conta atual é de " + (this.saldo - saque);
        }

    }
}
let retornar3 = new ContaBancaria3("Rafael", 5000000);
console.log(retornar3.consultarSaldo3());

let depositar3 = new ContaBancaria3("Rafael",200000);
console.log(depositar3.depositar3(500));

let saque333 = new ContaBancaria3("", 700000);
console.log(saque333.saque3(20000));

let saque44 = new ContaBancaria3("", 680000 );
console.log(saque44.saque3(55555200));