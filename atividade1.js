const alunos = [
	{
		nome: 'Jeisel',
		nota: 5,
	},

    {
        nome: 'Dias',
		nota: 9,
	},

    {
		nome: 'Silva',
		nota: 6,
	},
];

function confereAprovados(alunos, media = 5) {
    let aprovados = [];

    for(let i = 0; i < alunos.length; i++) {
        let { nome, nota } = alunos[i]

        if(nota >= media) aprovados.push(nome);
    }

    return aprovados
}

console.log(confereAprovados(alunos));
console.log(confereAprovados(alunos, 7));