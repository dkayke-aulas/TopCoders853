console.log('\n', '--- 1 ---', '\n');

var animal = 'Elefante'
let fruta = 'Banana'
const cor = 'Cinza'

let cidade = 30
console.log('cidade.', cidade);

console.log('animal.', animal);
console.log('fruta..', fruta);
console.log('cor....', cor);

{
    console.log('\n', '--- 2 ---', '\n');

    let cidade = 'Santos'
    console.log('cidade.', cidade);
    // cor = 'preto' // quebra pq é constante
    fruta = 'Melancia'
    console.log('animal.', animal);
    console.log('fruta..', fruta);
    console.log('cor....', cor);
    
    animal = 'Raposa'
}

console.log('\n', '--- 3 ---', '\n');

console.log('animal.', animal);
console.log('fruta..', fruta);
console.log('cor....', cor);