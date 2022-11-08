// OPERADORES UNÁRIOS

// ------------ OPERADOR DE COERÇÃO

// const True = true
// const False = false

// console.log(+True); // 1
// console.log(+False); // 0
// console.log(-True); // -1
// console.log(-False); // -0

// const dez = 10
// console.log(+dez); // 10
// console.log(-dez); // -10

// const texto = "texto"
// console.log(+texto); // NaN
// console.log(-texto); // NaN

// console.log(texto + 10);
// console.log(texto - 10);

// console.log(String(10));
// console.log(Number('10'));
// console.log(Boolean('10'));

// console.log(+True + 1);

// ------------ OPERADOR RELACIONAL

// const pessoa = { nome: "Dannyel" }
// console.log('nome' in pessoa); // true
// console.log('idade' in pessoa); // false

// const frutas = ['abacate', 'banana', 'caju']
// console.log(1 in frutas); // true
// console.log(8 in frutas); // false

// ------------ OPERADOR ARITMÉTICO
// let dez = 10
// console.log(dez++); // 10
// console.log(++dez); // 11
// console.log(dez--); // 10
// console.log(--dez); // 9




// OPERADORES BINÁRIO

// ------------ OPERADOR ARITMÉTICO

// let x = 10
// const y = 20

// x = x + y
// x += y
// console.log(x); // 30

// x = x - y
// x -= y
// console.log(x); // 10

// x = x / y
// x /= y
// console.log(x); // 0.5

// x = x * y
// x *= y
// console.log(x); // 200

// x = x ** y
// x **= y
// console.log(x); // 100...

// x = x % y
// x %= y
// console.log(x); // 10

// ------------ OPERADOR COMPARAÇÃO

// const x = 10
// const y = 20
// const z = '20'

// console.log(x == y); // false
// console.log(x === y); // false
// console.log(y == z); // true // não compara o tipo, compara apenas o valor
// console.log(y === z); // false // compara o valor e o tipo

// console.log('\n');

// console.log(x != y); // true
// console.log(x !== y); // true
// console.log(y != z); // false // não compara o tipo, compara apenas o valor
// console.log(y !== z); // true // compara o valor e o tipo

// ------------ OPERADOR LÓGICO ARITMÉTICO

// const x = 10
// const y = 20

// console.log(x > y); // false
// console.log(x < y); // true
// console.log(x >= y); // false
// console.log(x <= y); // true

// ------------ OPERADOR LÓGICO

// const x = true
// const y = false

// const pessoa = { idade: 25 }

// console.log(x && y);
// console.log(x || y);
// console.log(!x);
// console.log(!y);
// console.log(!!x);
// console.log(!!y);
// console.log(!!pessoa.idade);
// console.log(!!pessoa.idades);


// TERNARIO

// ------------ OPERADOR LÓGICO

// const x = true
// const y = false

// x && y ? console.log('existem') : console.log('não existem');
// x || y ? console.log('existem') : console.log('não existem');
// x ? console.log('existe') : console.log('não existe');
// y ? console.log('existe') : console.log('não existe');

