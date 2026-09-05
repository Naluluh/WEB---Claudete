// Exercício 1: Verificador de Estoque (Foco: for...of)

// Lista de produtos
const produtos = [
    { produto: 'Caderno', quantidade: 280, situacao: "" },
    { produto: 'Caneta', quantidade: 500, situacao: "" },
    { produto: 'Lápis de cor', quantidade: 19, situacao: "" },
    { produto: 'Borracha', quantidade: 50, situacao: "" },
    { produto: 'Folha sulfite', quantidade: 100, situacao: "" }
];

// Função para verificar a quantidade/situação do estoque
function Verificar() {

    const corpoDaTabela = document.getElementById("corpo-tabela");
    corpoDaTabela.innerHTML = "";

    for (const item of produtos) {

        // Verifica a situação do produto
        if (item.quantidade < 200) {
            item.situacao = "Baixo";
        } else {
            item.situacao = "OK";
        }

        // Cria uma linha
        const linha = document.createElement("tr");

        // Cria coluna do produto
        const colunaProduto = document.createElement("td");
        colunaProduto.textContent = item.produto;

        // Cria coluna da situação
        const colunaSituacao = document.createElement("td");

        if (item.situacao === "Baixo") {
            colunaSituacao.innerHTML = '<span style="color: red;">Baixo</span>';
        } else {
            colunaSituacao.textContent = "Suficiente";
        }

        // Adiciona as colunas na linha
        linha.appendChild(colunaProduto);
        linha.appendChild(colunaSituacao);

        // Adiciona a linha na tabela
        corpoDaTabela.appendChild(linha);
    }

    // Exibe no console as informações
    console.log(produtos);
}