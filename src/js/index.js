const btnavancar = document.getElementById('btn-avancar');
const btnvoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll(".cartao");
let cartaoatual = 0;

btnavancar.addEventListener('click', function () {
    if (cartaoatual === cartoes.length - 1) return;

    escondercartaoselecionada();

    cartaoatual++;
    mostrarcartao(cartaoatual);
});

btnvoltar.addEventListener('click', function(){
    if(cartaoatual === 0)return
    
    escondercartaoselecionada();

    cartaoatual --;
    mostrarcartao(cartaoatual);
});

function mostrarcartao(cartaoatual) {
    cartoes[cartaoatual].classList.add("selecionada");
}

function escondercartaoselecionada() {
    const cartaoselecionada = document.querySelector(".selecionada");
    cartaoselecionada.classList.remove("selecionada");
}
