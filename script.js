const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como é sua noite de sono?,
            alternativas: [
            {   
            texto:"Boa",
            afirmação: "afirmação",
            },
            {
                texto:"Ruim",
                afirmação:"afirmação",
            },
        ]

    {
        enunciado: "Sua alimentação é saudavel?",
        alternativas: [
            {   
                texto:"Sim",
                afirmação: "afirmação",
                },
                {
                    texto:"Não",
                    afirmação:"afirmação",
                },
            ]
    },

    {
        enunciado: "Qual é a duração do seu sono?",
        alternativas: [
            {   
                texto:"Mais de 8 horas",
                afirmação: "afirmação",
                },
                {
                    texto:"Menos de 8 horas",
                    afirmação:"afirmação",
                },
            ]
    },

    {
        enunciado: "Qual sua cor preferida?",
        alternativas: [
            {   
                texto:"Azul",
                afirmação: "afirmação",
                },
                {
                    texto:"Rosa",
                    afirmação:"afirmação",
                },
            ]
    },
    {
        enunciado: "Quantos litros de agua você?",
        alternativas: [
            {   
                texto:"Mais de 3 litros ",
                afirmação: "afirmação",
                },
                {
                    texto:"Menos de 3 litros ",
                    afirmação:"afirmação",
                },
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal ="";

function mostraPergunta() {



  
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",()> respostaSelecionada(alternativa));   
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecinada){
    cost afirmacoes = opcaoSelecionada.afirmacoes;
    atual++;
    mostraPergunta();
}
mostraPergunta