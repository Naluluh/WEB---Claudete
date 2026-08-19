// Exercício 2: Custo de Frete Regional (Foco: if/else if/else)
// Array com as regiões do Brasil válidas
const regioes = ["Sul", "Sudeste", "Centro-Oeste", "Nordeste", "Norte"];

// Função padrão para calcular o frete de acordo com a região
function CalcularFrete(){
    const corpoDaTable = document.getElementById("corpo-da-tabela");
    corpoDaTable.innerHTML = "";
    let linha = document.createElement("tr");
    let colunaRegiao = document.createElement("td");
    let colunaFrete = document.createElement("td");
    // Índice do array regioes
    let i = 5;
    // Criação da váriavel frete (sem valor/undefined)
    let frete;
    // Desvio condicional verificando se a região é "Sul"
    // e definindo o valor de 'frete'
    if (i == 0) frete = 25.0;
    // Desvio condicional aninhado verificando se a região é "Sudeste"
    else if (i == 1) frete = 20.0;
    // Desvio condicional aninhado verificando se a região é "Centro-Oeste"
    else if (i == 2) frete = 30.0;
    // Desvio condicional aninhado verificando se a região é "Nordeste"
    else if (i == 3) frete = 45.0;
    // Desvio condicional aninhado verificando se a região é "Norte"
    else if (i == 4) frete = 50.0;
    // Exceção (caso não seja uma região válida)
    else console.log("A entrega não está disponivel para essa localidade");

    // Desvio condicional verificando se 'frete' recebeu algum valor
    if (frete !== undefined) {
    colunaRegiao.textContent = regioes[i];
    colunaFrete.textContent = `R\$ ${frete.toFixed(2)}`;
    linha.appendChild(colunaRegiao);
    linha.appendChild(colunaFrete);
    corpoDaTable.appendChild(linha);

} 
    // Caso 'frete' não tenha recebido um valor
    else {
    colunaRegiao.textContent = "Inválido";
    colunaFrete.textContent = "R$ -----";
    linha.appendChild(colunaRegiao);
    linha.appendChild(colunaFrete);
    let linhaAviso = document.createElement("tr");
    let aviso = document.createElement("td");
    aviso.colSpan = 2;
    aviso.textContent = "A entrega não está disponível para essa localidade.";
    linhaAviso.appendChild(aviso);
    corpoDaTable.appendChild(linha);
    corpoDaTable.appendChild(linhaAviso);
    }
};
