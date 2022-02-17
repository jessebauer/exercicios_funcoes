/*
# Exercício 01

## Sistema de correção de provas

Nesse exercício vamos simular um sistema de correção de provas e imprimir a quantidade de acertos com a nota do aluno.

**a)** Declare uma função de nome `corrigirProva` que tenha apenas um parâmetro chamado `prova`. Faça commit do resultado.

**b)** Sabendo que o parâmetro `prova` será sempre um objeto com o seguinte formato: */
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
let acertosProva = 0;
function corrigirProva(prova) {
    for (let correcao of prova.questoes) {
        if (correcao.resposta === correcao.correta) {
            acertosProva++;

        } else {
            prova.valor -= 2
        }
    }
    return `O aluno(a) ${prova.aluno} acertou ${acertosProva} e obteve nota ${prova.valor}`;
}
console.log(corrigirProva(prova));