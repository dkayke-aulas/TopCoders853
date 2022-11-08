// const aleatorio = [
    //     'banana',
    //     25,
    //     {oi: true},
    //     [9]
// ]

// const fruta = aleatorio[0]
// const idade = aleatorio[1]
// const objeto = aleatorio[2]
// const array = aleatorio[3]

// const [fruta, idade, um, tres, ...banana] = aleatorio

// console.log(fruta.toUpperCase());
// console.log(idade);
// console.log(objeto);
// console.log(array);

// console.log(aleatorio);
// console.log(banana);

// const frutas = []

// console.log(frutas.length);

// push e pop
// frutas.push('banana')
// const qtd = frutas.push('caju')
// const pop = frutas.pop()
// frutas.push('melancia')
// console.log(frutas);
// console.log(pop, qtd);

// unshift e shift
// console.log(frutas.length);
// frutas.unshift('banana')
// const qtd2 = frutas.unshift('caju')
// const pop2 = frutas.shift()
// frutas.unshift('melancia')

// console.log(frutas);
// console.log(pop2, qtd2);

// const rem = frutas.splice(1, 2, 'pitanga', 'morango')
// console.log(frutas);
// console.log(rem);

const nome = ["Dannyel", "Maria", "João", "Joana"]

const replica = [...nome]

console.log(nome);
console.log(replica);

nome[1] = "Fernanda"
console.log(nome);
console.log(replica);