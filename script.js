import { PALAVRAS_RUINS } from "./palavrasRuins.js"
const botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("click", mostraPalavrasChave);

function mostraPalavrasChave() {
    const texto = document.querySelector("#entrada-de-texto").Value;
    const campoResultado = document.querySelector("#resultado-palavraChave")
    const palavrasChave = processaTexto(texto);

    campoResultado.textContent = palavras.join(",");
}
function processTexto(texto) {
    let palavras = texto.split(/\P[L]+/u);
    for(let i in palavras){
        palavras[i] = palavras[i].toLowerCase();
    }

    palavras = TiraPalavrasRuins(palavras);

    const frequencias = contaFrequencias(palavras);
    let ordenadas = Object.keys(frequencias).sort(ordenaPalavra);

    function ordenaPalavra(p1, p2) {
        return frequencias[p2] - frequencias[p1];
    }

    console.log(ordenadas);
    return ordenadas.slice(0, 10);
}

function contaFrequencias(palavras) {
    let frequencias = {};
    for (let i of palavras) {
        frequencias[i] = 0;
        for (let j of palavras) {
            if (i == j) {
                frequencias[i]++;
            }
        }
    }
    return frequencias;
}

function tiraPalavrasRuins(palavras) {
    const PALAVRAS_RUINS = new Set(["para", "uma", "nós"]);
    const palavrasBoas = [];
    for (let palavas of palavras) {
        if(!PALAVRAS_RUINS.has(palavras) && palavras.length > 2) {
            palavrasBoas.push(palavras);
        }
    }
}
function tiraPalavrasRuins(palavras);{
    const PALAVRAS_RUINS = new Set([
    "que",
    "para",
    "com",
    "não",
    "uma",
    "por",
    "mais",
    "dos",
    "como",
    "mas",
    "foi",
    "ele",
    "das",
    "tem",
    "seu",
    "sua",
    "ser",
    "quando",
    "muito",
    "está",
    "também",
    "pelo",
    "pela",
    "até",
    "isso",
    "ela",
    "entre",
    "era",
    "depois",
    "sem",
    "mesmo",
    "aos",
    "ter",
    "seus",
    "quem",
    "nas",
    "esse",
    "eles",
    "estão",
    "você",
    "tinha",
    "foram",
    "essa",
    "num",
    "nem",
    "suas",
    "meu",
    "minha",
    "têm",
    "numa",
    "pelos",
    "elas",
    "havia",
    "seja",
    "qual",
    "será",
    "nós",
    "tenho",
    "lhe",
    "deles",
    "essas",
    "esses",
    "pelas",
    "este",
    "fosse",
    "dele",
    "vocês",
    "vos",
    "lhes",
    "meus",
    "minhas",
    "teu",
    "tua",
    "teus",
    "tuas",
    "nosso",
    "nossa",
    "nossos",
    "nossas",
    "dela",
    "delas",
    "esta",
    "estes",
    "estas",
    "aquele",
    "aquela",
    "aqueles",
    "aquelas",
    "isto",
    "aquilo",
    "estou",
    "estamos",
    "estive",
    "esteve",
    "estivemos",
    "estiveram",
    "estava",
    "estávamos",
    "estavam",
    "e",
    "ou",
    "onde",
    "aquilo",
    "embora",
    "apesar",
    "porque",
    "enquanto",
    "contudo",
    "entretanto",
    "portanto",
    "além",
    "antes",
    "todavia",
    "inclusive",
    "diante",
    "sobre",
    "quanto",
    "apenas",
    "desde",
    "uma vez",
    "segundo",
    "junto"
]);
    const palavrasBoas = [];
    for (let palavras of palavras) {
        if (!PALAVRAS_RUINS.has(palavras) palavras.length > 2 ){
            palavrasBoas.push(palavras);
        }
    }
    return palavrasBoas;
}

