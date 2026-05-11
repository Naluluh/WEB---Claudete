// função
function almoxarifadoCorrigido(){
    // Conteúdo de cada caixa (definição de variável: array)
    let itens = document.getElementById("listaCaixas");
    let mensagem = document.getElementById("mensagem");
    let caixas = ['Papel', 'Clips', 'Grampo', 'Elastico', 'Caneta', 'Lapis', 'Borracha', 'Tesoura', 'ERRO', 'Tinta'];
    let relatorio = document.getElementById("relatorio");
    let lista = document.createElement("li");
    
    // Laço de repetição: contagem das caixas
    for (let i = 0; i < caixas.length; i++) {

        // Desvio condicional: caixas extraviadas
        if (i == 4 || i == 7) { // Retirada do '$'
            continue; // Pula iteração
        }

        // Desvio condicional: caixa com erro
        if (caixas[i] == "ERRO") {

            // Mensagem com erro
            lista.innerHTML += "<p style='color:red'>ERRO na caixa " + (i + 1) + "</p>";
            break;
        }

        // Mensagem exibida
        lista.innerHTML += "Caixa conferida: " + (i + 1) + ": " + caixas[i] + "<br>"; 
    }

    // Espaço entre listas
    lista.style.marginBottom = "30px";

    // Adiciona itens à lista
    itens.append(lista);
}
