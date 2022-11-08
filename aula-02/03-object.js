const pessoa = {
    "nome": "Dannyel",
    idade: 25,
    "nome-da-mae": "Hercilia"
}

// pessoa.ehLetrado = true
// pessoa['gosta-de-comer'] = true

// console.log(pessoa);

// const atributo = "idade"
// const recupera = pessoa.atributo
// const recupera2 = pessoa[atributo]

// console.log(recupera, recupera2);

const chaves = Object.keys(pessoa)
// const obj = Object.values(pessoa)

// console.log(chaves);


const interruptores = [
    {nome: 'sala', ligado: true},
    {nome: 'banheiro', ligado: true},
    {nome: 'cozinha', ligado: false},
    {nome: 'quarto', ligado: true},
]

function callbackfn (value, index, array) {
    console.log(value, index);
}


const mapa = interruptores.map(callbackfn).filter(value => !!value)


Object.entries

console.log(mapa);
