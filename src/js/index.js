/*

OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostra o proximo cartão da lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
    - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
    - passo 3 - fazer aparecer o proximo carta da lista
    - passo 4 - buscar o cartão que esta selecionado e esconder

OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostra o anteior cartão da lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
    - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
    - passo 3 - fazer aparecer o anterior carta da lista
    - passo 4 - buscar o cartão que esta selecionado e esconder

*/




/*

OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostra o proximo cartão da lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
    - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
    - passo 3 - fazer aparecer o proximo carta da lista
    - passo 4 - buscar o cartão que esta selecionado e esconder
*/
//  - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartao = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado(){ 
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}
function mostrarCartao(indiceCartao){
    cartao[indiceCartao].classList.add('selecionado');
}

//- passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
btnAvancar.addEventListener('click', function (){

    if(cartaoAtual === cartao.length - 1) return;

    esconderCartaoSelecionado();
        cartaoAtual++
        mostrarCartao(cartaoAtual);  
})

btnVoltar.addEventListener('click', function (){

    if(cartaoAtual === 0) return;

    esconderCartaoSelecionado();
        cartaoAtual--
        mostrarCartao(cartaoAtual);
       
        
        
})