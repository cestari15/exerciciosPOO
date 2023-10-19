"use strict";
class ProdutoLoja {
    constructor(nomeDoProduto, precoDoProduto) {
        this.nomeDoProduto = nomeDoProduto;
        this.precoDoProduto = precoDoProduto;
    }
}
class CarrinhoDeCompras {
    constructor() {
        this.produtosDoCarrinho = [];
    }
    adicionarProduto(produto) {
        this.produtosDoCarrinho.push(produto);
        return "Produto adicionado com sucesso";
    }
    excluirProduto(nomeDoProduto) {
        this.produtosDoCarrinho = this.produtosDoCarrinho.filter((item) => item.nomeDoProduto !== nomeDoProduto);
    }
    calcularValorTotal() {
        let soma = 0;
        for (let i = 0; i < this.produtosDoCarrinho.length; i++) {
            soma = soma + this.produtosDoCarrinho[i].precoDoProduto;
        }
        return soma.toFixed(2);
    }
    exibirProdutos() {
        console.log("Produtos do Carrinho:");
        for (let i = 0; i < this.produtosDoCarrinho.length; i++) {
            console.log("Produto: " + this.produtosDoCarrinho[i].nomeDoProduto + "R$ " + this.produtosDoCarrinho[i].precoDoProduto.toFixed(2));
        }
        //const nomeDosProdutos = this.produtosDoCarrinho.map(
        //  item => "Produto:" + item.nomeDoProduto + 'R$' + item.precoDoProduto.toFixed(2));
        // console.log(nomeDosProdutos.join(","));
    }
}
class Loja {
    constructor() {
        this.produtosDoEstoque = [];
        this.carrinhoDeCompra = new CarrinhoDeCompras();
    }
    adicionarProdutoAoEstoque(produto) {
        this.produtosDoEstoque.push(produto);
    }
    removerProdutoDoEstoque(produto) {
        this.produtosDoEstoque = this.produtosDoEstoque.filter((item) => item.nomeDoProduto !== produto.nomeDoProduto);
    }
    adicionarProdutoAoCarrinho(produto) {
        const produtoEncontrado = this.produtosDoEstoque.find(item => item.nomeDoProduto === produto.nomeDoProduto);
        if (produtoEncontrado) {
            this.carrinhoDeCompra.adicionarProduto(produtoEncontrado);
            return "Produto adicionado ao carrinho de compra";
        }
        else {
            return "Produto não encontrado ao estoque da loja";
        }
    }
    removerProdutoDoCarrinho(produto) {
        this.carrinhoDeCompra.excluirProduto(produto.nomeDoProduto);
    }
    exibirProdutosDoCarrinho() {
        this.carrinhoDeCompra.exibirProdutos();
    }
}
// Ciando Produtos
const produtoLoja = new ProdutoLoja("Camiseta", 40.00);
const produtoLoja1 = new ProdutoLoja("Calça", 40.00);
const produtoLoja2 = new ProdutoLoja("Sapato", 150.50);
const produtoLoja3 = new ProdutoLoja("Meia", 23.54);
//Criando a Loja
const minhaLoja = new Loja();
//Adicionando  Produto ao Carrinho de compras
minhaLoja.adicionarProdutoAoEstoque(produtoLoja);
minhaLoja.adicionarProdutoAoEstoque(produtoLoja1);
minhaLoja.adicionarProdutoAoEstoque(produtoLoja2);
minhaLoja.adicionarProdutoAoEstoque(produtoLoja3);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja1);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja2);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja3);
//Adicionando Produto ao Estoque
//Remover Produto do Carrinho de Compra
minhaLoja.removerProdutoDoCarrinho(produtoLoja3);
//Remover Produto do Estoque da Loja
minhaLoja.removerProdutoDoEstoque(produtoLoja3);
//Exibindo Produtos Do Carrinho de compra
minhaLoja.exibirProdutosDoCarrinho();
//Exibindovalor total do carrinho
console.log("Total de carrinho de compras: R$ " + minhaLoja.carrinhoDeCompra.calcularValorTotal());
