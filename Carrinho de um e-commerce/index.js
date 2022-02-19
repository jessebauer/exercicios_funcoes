const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000

        }
    ],
    imprimirResumo: function (carrinho) {
        let somaItens = 0;
        let precoTotal = 0;
        for (let produtos of this.produtos) {
            somaItens += produtos.qtd;
            precoTotal += (produtos.qtd * produtos.precoUnit);
        }
        console.log(
            `Cliente: ${this.nomeDoCliente} 
            Total de itens: ${somaItens} itens
            Total a pagar: R$ ${(precoTotal / 100).toFixed(2)}`)
    }

}

function addProdutoAoCarrinho(carrinho, produto) {
    for (let i = 0; i < carrinho.produtos.length; i++) {
        if (carrinho.produtos[i].id == produto.id) {
            carrinho.produtos[i].qtd += produto.qtd;
            return
        } else if (i < (carrinho.produtos.length - 1)) {
            carrinho.produtos.push(produto);
            return
        }
    }
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}
addProdutoAoCarrinho(carrinho, novaBermuda);
carrinho.imprimirResumo();