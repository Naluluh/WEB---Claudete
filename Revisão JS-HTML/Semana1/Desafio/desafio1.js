// Desafio Final: A Poção da Jovem Alquimista (A "Historinha")
// Função padrão para a preparação da poção
function Alquimia(){
    const ing1 = document.getElementById("ingrediente1").value;
    const ing2 = document.getElementById("ingrediente2").value;
    const luas = document.getElementById("luas").value;
    let linha = document.getElementById("linhaIng");
    let linhaP = document.getElementById("linhaP");
    linha.querySelectorAll("td").forEach(td => td.remove());
    linhaP.querySelectorAll("td").forEach(td => td.remove());

    // Variáveis
    let potencia = 0;
    let pocao;

    // Verifica as combinações de ingredientes
    // em que a preparação da poção é bem-sucedida
    if (ing1 === 'Raiz de Dragão' && ing2 === 'Orvalho da Manhã' || ing1 === 'Orvalho da Manhã' && ing2 === 'Raiz de Dragão'){
        pocao = true;
    } else if(ing1 === 'Pó de Fada' && ing2 === 'Lágrima de Fênix' || ing1 === 'Lágrima de Fênix' && ing2 === 'Pó de Fada'){
        pocao = true;
    } else{
        pocao = null;
    }

    // Atribui a potência da poção 
    if(luas === 'cheia'){
        potencia = 'em dobro';
    } else if (luas === 'crescente'){
        potencia = 'normal';
    } else if (luas === 'nova'){
        potencia = 'pela metade';
    }

    // Exibe os ingredientes e a fase da lua no console
    console.log(`Ingrediente 1: ${ing1}`);
    console.log(`Ingrediente 2: ${ing2}`);
    console.log(`Fase da Lua: ${luas}`);

    // Inserção dos dados na página web
    let colunaI1 = document.createElement("td");
    let colunaI2 = document.createElement("td");
    colunaI1.textContent = ing1;
    colunaI2.textContent = ing2;
    linha.appendChild(colunaI1);
    linha.appendChild(colunaI2);
    let colunaP = document.createElement("td")
    colunaP.colSpan = 2;

    // Exibe a mensagem se a poção foi um sucesso
    if (pocao === true && potencia !== 0){
        colunaP.textContent = `Sucesso! Você criou uma Poção da Vitalidade com potência ${potencia}!`;
        console.log(`Sucesso! Você criou uma Poção da Vitalidade com potência ${potencia}!`);
    }
    // Exibe a mensagem se a poção falhou
    else { 
        colunaP.textContent = `A mistura explode em uma fumaça colorida! A poção falhou.`;
        console.log(`A mistura explode em uma fumaça colorida! A poção falhou.`);
    }
    linhaP.appendChild(colunaP);
}