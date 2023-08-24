class MinhaConta
{
    nomeT:string;
    saldo:number;


    constructor(nomeT:string, saldo:number)
    {
        this.nomeT=nomeT; 
        this.saldo=saldo;
    }

    
    consultarSaldo()
    {
        
        return "o saldo da conta de "+this.nomeT +  this.saldo + ",00 de saldo "
    }
    depositar2(deposito:number)
    {
        
        return "o saldo da conta "+ this.nomeT +" depois do deposito é de " + (deposito + this.saldo);
    }
    saque(saque:number){

        
        if(this.saldo < saque){
            return "Saldo Indisponivel"
        } else{

            return "Saque Realizado com sucesso, saldo da conta atual é de " + (this.saldo - saque);
        }

    }
    saque2(saque:number){

        
        if(this.saldo < saque){
            return "Saldo Indisponivel"
        } else{

            return "Saque Realizado com sucesso, saldo da conta atual é de " + (this.saldo - saque);
        }

    }
}
let retornar = new MinhaConta("jõao", 1000);
console.log(retornar.consultarSaldo());

let depositar = new MinhaConta("jõao",1000);
console.log(depositar.depositar2(500));

let saque = new MinhaConta("", 1500);
console.log(saque.saque(200));

let saque2 = new MinhaConta("", 1300);
console.log(saque.saque2(5200));
