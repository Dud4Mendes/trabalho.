const mensagensDivertidas =
[
    "por que o arqueologo escolheu essa profissão? porque a carreira dele estava em ruinas",
    "qual é a panela que está sempre triste? a panela depressão",
    "qual é a parte do Halloween favorita dos pedófilos? entregas grátis",
    "como o átomo atende o telefone? Próton,",
]

let botaoDivertido = document.getElementById("botaoDivertido");
let mensagenDivertida = document.getElementById("mensagemDivertida");

botaoDivertido.addEventListener('click', function(){
    //Math.floor(x) retora o menor numero inteiro para o numero "x".
    //Math.random() retorna um numero pseudo-aleatorio no intervalo.
    const mensagemAleatoria = mensagensDivertidas[Math.floor(Math.random() * mensagensDivertidas.length)]

    mensagenDivertida.textContent = mensagemAleatoria;

} )