// Exercício 1: Verificador de Estoque (Foco: for...of)

// Lista de produtos
const produtos = [
    { produto: 'caderno', quantidade: 280, situacao: "" },
    { produto: 'caneta', quantidade: 500, situacao: "" },
    { produto: 'lápis de cor', quantidade: 19, situacao: "" },
    { produto: 'borracha', quantidade: 50, situacao: "" },
    { produto: 'folha sulfite', quantidade: 100, situacao: "" }
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

        // Cria coluna da quantidade
        const colunaQuantidade = document.createElement("td");
        colunaQuantidade.textContent = item.quantidade;

        // Cria coluna da situação
        const colunaSituacao = document.createElement("td");

        if (item.situacao === "Baixo") {
            colunaSituacao.innerHTML = '<span style="color: red;">Baixo</span>';
        } else {
            colunaSituacao.textContent = "Suficiente";
        }

        // Adiciona as colunas na linha
        linha.appendChild(colunaProduto);
        linha.appendChild(colunaQuantidade);
        linha.appendChild(colunaSituacao);

        // Adiciona a linha na tabela
        corpoDaTabela.appendChild(linha);
    }

    console.log(produtos);
}