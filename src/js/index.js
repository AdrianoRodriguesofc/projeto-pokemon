const botaoAlterartema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterartema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro")

    if (modoEscuroEstaAtivo) {
        //body.classList.remove("modo-escuro");

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/image/sun.png");
    } else {
        //body.classList.add("modo-escuro");

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/image/moon.png");
    }

})