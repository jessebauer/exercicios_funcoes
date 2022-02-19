const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        this.saldo += valor;

        this.historicos[this.historicos.length] = {
            tipo: 'Deposito',
            valor: valor
        }

        console.log(`Deposito de R$${valor / 100} realizado para o cliente: ${this.nome}`);

    },
    sacar: function (valor) {
        if (valor > this.saldo) {
            console.log(`Saldo insuficiente para o saque de: ${this.nome}`)
            return
        } else {
            this.saldo -= valor;
            console.log(`Saque de R$${valor / 100} realizado para o cliente: Maria`)
        }
        this.historicos[this.historicos.length] = {
            tipo: 'Saque',
            valor: valor

        }
    },
    extrato: function () {
        console.log(`Extrato de ${this.nome} - Saldo: R$${this.saldo / 100}
Histórico:
${contaBancaria.historicos}`);
    }
}
contaBancaria.depositar(10000);
contaBancaria.sacar(50000);
contaBancaria.sacar(5000);
contaBancaria.extrato();