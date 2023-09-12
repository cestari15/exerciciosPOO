class ProdutoLoja{
    nomeProduto: string;
    precoProduto: number;
    
         
    
    constructor(nomeProduto: string, precoProduto: number){
        this.nomeProduto = nomeProduto;
        this.precoProduto = precoProduto;
    }
    }
    
    class CarrinhoDeCompra{
    
        produtos: ProdutoLoja[] = [];
       
        constructor(){
    
        }
        adicionarAoCarrinho(produto: ProdutoLoja) {
            this.produtos.push(produto)
        }
        exibirCarrinho(){
            if (this.produtos.length > 0) {
                for (let i = 0; i < this.produtos.length; i++) {                    
                    console.log("Produto: " + this.produtos[i].nomeProduto + ' de R$:' 
                    + this.produtos[i].precoProduto + ",00 adicionado com sucesso");
                }
               
            }
            else {
                return "nenhum produto adicionado ao carrinho";
            }
    
        }
        removerDoCarrinho(produtos: ProdutoLoja) {
            this.produtos = this.produtos.filter((item) => item.nomeProduto !== produtos.nomeProduto);
            return "evento deletado"
        }
    
        somaDosProdutos(){
            let soma = 0 
            for (let i = 0; i < this.produtos.length; i++) {
    
               
                soma = this.produtos[i].precoProduto + soma;
               
           
           
    
            }
            return soma.toFixed(2);
           
        }
    }
    
    class Loja{
        estoque: ProdutoLoja[] = [];
        carrinho = new CarrinhoDeCompra;
        constructor(){
    
        }
         
    
        adicionarProdutoNaLoja(estoque: ProdutoLoja){
                this.estoque.push(estoque)
        }
    
        removerProdutoEstoque(produto: ProdutoLoja) { 
            this.estoque = this.estoque.filter((item) => item.nomeProduto !== produto.nomeProduto);
            return "Produto deletado"
        }
    
        exibirEstoque(){
            if (this.estoque.length > 0) {
                for (let i = 0; i < this.estoque.length; i++) {                    
                    console.log("Produto: " + this.estoque[i].nomeProduto );
                }
               
            }
            else {
                return "nenhum produto adicionado ao carrinho";
            }
    
        }
    
        AdicionarProdutosCarrinho(estoque:ProdutoLoja, produto: ProdutoLoja){
    
            const produtoEncontrado = this.estoque.find(
             item => item.nomeProduto == produto.nomeProduto
            );
           
           
         if(produtoEncontrado){
             this.carrinho.adicionarAoCarrinho(produto);
             return "Produto adicionado ao carrinho de compras"
         }
         else{
             return "Produto não encontrado no estoque";
         }
         }
        
     
    
    }
    
    
    
    const produto0 = new ProdutoLoja("Tenis", 15);
    const produto5 = new ProdutoLoja("matinho", 15);
    const produto6 = new ProdutoLoja("sapato", 1000);
    const produto7 = new ProdutoLoja("Notebook", 6000);
    
    
    const carrinho = new CarrinhoDeCompra();
    
    console.log(carrinho.exibirCarrinho());
    carrinho.adicionarAoCarrinho(produto0);
    carrinho.adicionarAoCarrinho(produto5);
    carrinho.adicionarAoCarrinho(produto6);
    carrinho.adicionarAoCarrinho(produto7);
    
    console.log(carrinho.exibirCarrinho());
    
    console.log(carrinho.exibirCarrinho());
    console.log(carrinho.somaDosProdutos());
    
    
    const produto9 = new ProdutoLoja("sapato", 1000);
    
    const estoque = new Loja();
    
    
    console.log(estoque.adicionarProdutoNaLoja(produto9));
    console.log(estoque.adicionarProdutoNaLoja(produto0));
    
    console.log(estoque.exibirEstoque());
    
    console.log(estoque.removerProdutoEstoque(produto0));
    
    console.log(estoque.exibirEstoque());

    console.log(carrinho.exibirCarrinho());
    