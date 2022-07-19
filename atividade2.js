const player1 = {
    nome: 'Jeisel',
    idade: 37,
}

const player2 = {
    nome: 'Dias',
    idade: 18,
}

function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(player1,5));
console.log(calculaIdade.apply(player2,[5]));