const pessoa = {
    nome: 'Dannyel',
    idade: 25
}

const pessoaAtualizada = {
    idades: 26,
    ehProgramador: true
}

// console.log(pessoa);
// console.log(pessoaAtualizada);

const atual = Object.assign(pessoa, pessoaAtualizada)

// console.log(atual);





const nome = 'Dannyel'
const sobrenome = 'Andrade'

// const nomeCompleto = nome + ' ' + sobrenome
const nomeCompleto = `${nome} ${sobrenome}`

// console.log(nomeCompleto);



const frutas = ['banana', 'melancia', 'pitanga']

for (cachorro of frutas) {
    console.log(cachorro);
} 
