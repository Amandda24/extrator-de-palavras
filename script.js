const botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("click", mostraPalavrasChave );

function mostraPalavrasChave() {
    const texto = document.querySelector("#entrada-de-texto").Value;
    const campoResultado = document.querySelector("#resultado-palavraChave")
    const palavrasChave = processaTexto(texto);

    campoResultado.textContent = palavras;
}

function processTexto(texto) {
    let palavras = texto.split(/\P[L]+/u);
    return palavras;
}