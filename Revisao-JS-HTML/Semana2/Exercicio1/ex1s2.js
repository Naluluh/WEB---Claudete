// Exercício 1: Verificador de Estoque (Foco: for...of)
// Lista de produtos
const produtos = [{produto: 'caderno', quantidade: 280, situacao: ""}, 
    {produto: 'caneta', quantidade: 500, situacao: ""},
    {produto: 'lápis de cor', quantidade: 19, situacao: ""},
    {produto: 'borracha', quantidade: 50, situacao: ""},
    {produto: 'folha sulfite', quantidade: 100, situacao: ""}
];

// Função para verificar a quantidade/situação no/do estoque
function Verificar(){
    corpoDaTabela = document.getElementById("corpo-tabela");
    corpoDaTabela.innerHTML="";
    

    for (let produto in produtos){
        switch (produto){
            case 'caderno':
                if (produtos[0].quantidade < 200){
                   produtos.set("situacao","Baixo");
                };
                break;
            case 'caneta':
                if (produtos[1].quantidade < 250){
                   produtos.set("situacao","Baixo");
                };
                break;
            case 'lápis de cor':
                if (produtos[2].quantidade < 200){
                   produtos.set("situacao","Baixo");
                };
                break;
            case 'borracha':
                if (produtos[3].quantidade < 80){
                   produtos.set("situacao","Baixo");
                };
                break;
            case 'caderno':
                if (produtos[4].quantidade < 200){
                   produtos.set("situacao","Baixo");
                };
                break;
        }
    }
    if (!produtos.situacao){
        produtos.situacao = 'OK'
    }
};

const linha = document.createElement("tr");
const colunaProduto = document.createElement("td");
const colunaSituacao = document.createElement("td");

colunaProduto.textContent = produtos.produto
linha.appendChild(colunaProduto)

for (produtos in produtos){
    if (produtos.situacao === "Baixo"){
        colunaSituacao.innerHTML = "<style color="red">Baixo<style>"}
    else{
        colunaSituacao.innerHTML = "Suficiente"
    }
linha.appendChild(colunaSituacao)
corpoDaTabela.appendChild(linha)
} 
console.log(produtos)