const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};
let acertos = 0;
function corrigirProva(prova) {
    for (let correcao of prova.questoes) {
        if (correcao.resposta === correcao.correta) {
            acertos++;

        } else {
            prova.valor -= 2
        }
    }
    return `O aluno(a) ${prova.aluno} acertou ${acertos} e obteve nota ${prova.valor}`;
}
console.log(corrigirProva(prova));