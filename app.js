function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    //proteção do numero
    if (de >= ate) {
        alert('O primeiro número deve ser menor que o segundo número! (Não seja burro!)');
        return;
    }
    if (quantidade > ate - de + 1) {
        alert('A quantidade de números sorteados deve estar disponível entre o intervalo de números escolhido! (Nóia do caralho!)');
        return;
    }
    
    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
//loop para não sair número repetido
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de,ate);
        }
        sorteados.push(numero);
    }

    // Ordenar os números sorteados em ordem crescente
    sorteados.sort((a, b) => a - b);

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados.join(', ')}</label>`;
    alterarStatusBotao()
}

function obterNumeroAleatorio (min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
        
    }
}
function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}




   // }
   // if (quantidade >= ate - de ) {
   //     alert('A quantidade de números sorteados deve estar disponível entre o intervalo de números escolhido! (Nóia do caralho!)');
   //     return;
///} 
