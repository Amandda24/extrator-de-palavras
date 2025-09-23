const botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("click", mostraPalavrasChave );

function mostraPalavrasChave() {
    const texto = document.querySelector("#entrada-de-texto").Value;
    const campoResultado = document.querySelector("#resultado-palavraChave")
    const palavrasChave = processaTexto(texto);

   
    campoResultado.textContent = palavras.join(",");
}
function processTexto(texto) {
    let palavras = texto.split(/\P[L]+/u);
  
    let frequencias = {};
    for (let i of palavras) {
        frequencias[i] = 0;
        for (let j of palavras) {
            if (i ==j) {
                frequencias[i]++;
            }
        }
    }
    return palavras;
}