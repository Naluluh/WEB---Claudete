// Exercício 3: Calculadora de Dano em Jogo RPG (Foco: Lógica com &&)
// Array com os elementos 'Fogo', 'Água' e 'Terra'
const elementos = ['Fogo', 'Água', 'Terra']

// Função padrão para calcular o dano
function Calculadora(){
    const tableElementos = document.getElementById("tabela-elem");
    const tableDano = document.getElementById("tabela-dano");
    const table = document.getElementById("tabela");
    table.innerHTML = "";
    tableElementos.innerHTML = "";
    tableDano.innerHTML = "";

    // Variáveis
    let atacante = elementos[2]
    let inimigo = elementos[0]
    let dano

    // Desvios condicionais (dano em dobro)
    // Fogo - Terra
    if (atacante == 'Fogo' && inimigo == 'Terra'){
        dano = 200;
    }
    // Água - Fogo
    else if (atacante == 'Água' && inimigo == 'Fogo'){
        dano = 200;
    }
    // Terra - Água
    else if (atacante == 'Terra' && inimigo == 'Água'){
        dano = 200;
    } 
    // Exceção (se for outra combinação de elementos)
    else {
        dano = 100;
    };

    // Inserção dos dados na tabela da página web
    let linhaElem = document.createElement("tr");
    let linhaDano = document.createElement("tr");
    let colunaAta = document.createElement("td");
    let colunaIni = document.createElement("td");
    let colunaDanoT = document.createElement("td");
    colunaAta.textContent = atacante;
    colunaIni.textContent = inimigo;
    linhaElem.appendChild(colunaAta);
    linhaElem.appendChild(colunaIni);
    tableElementos.appendChild(linhaElem);
    colunaDanoT.textContent = dano;
    linhaDano.appendChild(colunaDanoT);
    tableDano.appendChild(linhaDano);

    // Exibição dos dados no console
    console.log(`Atacante: ${atacante}`);
    console.log(`Inimigo: ${inimigo}`);
    console.log(`Dano Total: ${dano}`);
}
