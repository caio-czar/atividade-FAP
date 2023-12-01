class Banco {
    constructor(NumeroConta, SaldoConta, TipoConta) {
        this.conta = NumeroConta;
        this.saldo = SaldoConta;
        this.tipo = TipoConta;
    }
    
    mostrarDados() {
        alert(
            "Conta: " + this.conta +
            "\nSaldo: " + this.saldo +
            "\nTipo: " + this.tipo
        );
    }

    buscarSaldo() {
        alert("Seu saldo é de: " + this.saldo);
    }

    numeroDaConta() {
        alert("Número da conta: " + this.conta);
    }

    depositar(valorDepositado) {
        this.saldo += valorDepositado;
    }

    sacar(valorSacado) {
        this.saldo -= valorSacado;
    }
}

let conta1 = new Banco("001", 1200, "CC");

conta1.mostrarDados();

conta1.buscarSaldo();

conta1.depositar(600);

conta1.buscarSaldo();

conta1.sacar(450);

conta1.buscarSaldo();

conta1.mostrarDados();