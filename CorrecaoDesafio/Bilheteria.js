// Conteúdo de cada caixa (definição de variável: array)
let caixas = ['Papel', 'Clips', 'Grampo', 'Elastico', 'Caneta', 'Lapis', 'Borracha', 'Tesoura', 'ERRO', 'Tinta'];

// Laço de repetição: contagem das caixas
for (let i = 0; i < caixas.length; i++) {

    // Desvio condicional: caixas extraviadas
    if (i == 4 || i == 7) { // Retirada do '$'
        continue; // Pula iteração
    }

    // Desvio condicional: caixa com erro
    if (caixas[i] == "ERRO") 
        break; // Encerra o laço

    console.log("Caixa conferida: " + (i + 1) + ": " + caixas[i]); // Exibe no console a caixa e seu conteúdo
}
