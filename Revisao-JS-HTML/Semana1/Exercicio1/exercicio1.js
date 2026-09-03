// Exercício 1: Tarifas do Hotel Tecnoville (Foco: switch case)
// Array dos tipos de quarto
const tipoQuarto = ["Standard", "Deluxe", "Suite"];
// Função padrão para mostrar o tipo de quarto e sua respectiva diária
function mostrar(){
    // Variáveis que serão exibidas na página web 
    const corpoTabela = document.getElementById("corpo-tabela");
    corpoTabela.innerHTML = "";
    let diaria = "";
    // Índice do array tipoQuarto
    let i = 1;
        // Estrutura caso...seja para definir o valor da diária
        //  de acordo com o tipo de quarto
        switch(tipoQuarto[i]){
            case "Standard":
                diaria = 150.0;
                break;
            case "Deluxe":
                diaria = 250.0;
                break;
            case "Suite":
                diaria = 400.0;
                break;
            default:
                console.log("Erro. Tipo de quarto inválido.")
        }

    // Estruturação da tabela (linhas e colunas) e seus 
    // respectivos dados
    let linha = document.createElement("tr");
    let colunaQuarto = document.createElement("td");
    let colunaDiaria = document.createElement("td");
    colunaQuarto.textContent = tipoQuarto[i];
    colunaDiaria.textContent = diaria;
    linha.appendChild(colunaQuarto);
    linha.appendChild(colunaDiaria);
    corpoTabela.appendChild(linha);

    // Exibição dos dados no console
    console.log(`Tipo de Quarto: ${tipoQuarto[i]}`)
    console.log(`Valor da Diária: ${diaria}`)
}

