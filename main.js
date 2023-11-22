class Aluno {
    constructor(nomeDoAluno, notaDoAluno) {
        this.nome = nomeDoAluno,
        this.nota = notaDoAluno
    }
}

let listaDeAlunos = []

function adicionaAluno(nome, nota){

    const aluno = new Aluno(nome, nota)

    listaDeAlunos.push(aluno)
}

adicionaAluno('Pedro', 10)
adicionaAluno('Joao', 2)
adicionaAluno('Maria', 6)
adicionaAluno('Helena', 8)

console.log(listaDeAlunos)

let alunosAprovados = listaDeAlunos.filter(estudante => estudante.nota > 6)

console.log(alunosAprovados)