
# Dominando funções em JavaScript
Repositório das práticas do curso **Dominando funções em JavaScript** do bootcamp **Impulso JavaScript Evolution** da **DIO**

## Atividade 1
- Crie uma função que recebe o array **alunos** e um número que irá representar a média final 
- Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final
- Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno

## Atividade 2
Dada a função `calculaIdade`, utilize os métodos call e apply para modificar o valor de `this`. Crie seus próprios objetos para esta atividade!

```js
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}
```
## Referência
 - [Site da DIO](https://dio.me)
 - [Bootcamp](https://web.dio.me/track/214643d2-7f11-430b-ada2-4319b0db6327)