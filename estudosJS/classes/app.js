// Estudo da aula da Clínica 2:
class Pedido{
    // Criando atributos
    #cliente;
    #lanche;
    #quantidade;
    #preco_unitario;

    // Método construtor
    construtor(cliente, lanche, quantidade, preco_unitario){
        this.#cliente = cliente;
        this.#lanche = lanche;
        this.#quantidade = Number(quantidade);
        this.#preco_unitario = Number(preco_unitario);
    }

    // Método Get
    getCliente(){
        return this.#cliente
    }

    getLanche(){
        return this.#lanche
    }

    getQuantidade(){
        return this.#quantidade
    }
    getPrecoUnitario(){
        return this.#preco_unitario
    }

    //  Função que calcula o total do pedido
    calcularTotal(){
        const total = this.#quantidade * this.#preco_unitario;
        return Number(total).toFixed(2);
    }

    // Método para cliassificar o pedido
    definirClassificacao(){
        const total = this.calcularTotal();
        switch(true){
            case total < 20:
                return "Pedido pequeno";
            case total < 40:
                return "Pedido médio";
            case total < 60: 
                return "Pedido grande";
            default:
                return "Pedido muito grande";
        }
    }
}

class PainelLanchonete{
    // Criando as propriedades / atributos
    #pedidos = [];
    #form;
    #tabelaCorpo;

    // Método construtor
    construtor(){
        this.#form = document.getElementById("form-clientes")
        this.#tabelaCorpo = document.getElementById("tabela-corpo")
    }
}