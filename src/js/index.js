const btnavancar = document.getElementById('btn-avancar');
const btnvoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll(".cartao");
let cartaoatual = 0;

cartoes.forEach(cartao => {
    cartao.addEventListener("click", function () {
        const cartavirada = cartao.querySelector(".carta-virada");

        // virar o cartao
        cartao.classList.toggle("virar");
        //mostrar o fundo da carta
        cartavirada.classList.toggle('mostrar-fundo-carta');

        const descricao = cartao.querySelector.apply("descricao");
        descricao.classList.toggle("esconder");

    });
});

btnavancar.addEventListener('click', function () {
    if (cartaoatual === cartoes.length - 1) return;

    escondercartaoselecionada();

    cartaoatual++;
    mostrarcartao(cartaoatual);
});

btnvoltar.addEventListener('click', function () {
    if (cartaoatual === 0) return

    escondercartaoselecionada();

    cartaoatual--;
    mostrarcartao(cartaoatual);
});

function mostrarcartao(cartaoatual) {
    cartoes[cartaoatual].classList.add("selecionada");
}

function escondercartaoselecionada() {
    const cartaoselecionada = document.querySelector(".selecionada");
    cartaoselecionada.classList.remove("selecionada");
}
