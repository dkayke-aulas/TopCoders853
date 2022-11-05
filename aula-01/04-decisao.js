// PODE ENTRAR GRATIS
// 1 - se for maior de idade e se for feminino
// 1 feminino / 2 masculino
console.log('\n', '--- 1 ---', '\n');
const maiorDeIdade = true
const sexoBiologico = '1'
const filhxDoChefe = true

// dois iguais, valida apenas o VALOR
// três iguais, valida o VALOR e o TIPO

if (maiorDeIdade && sexoBiologico === 1) {
    console.log('Pode entrar 1');
}
else if(filhxDoChefe == true) {
    console.log('Pode entrar 2');    
}
else {
    console.log('Não pode entrar 1');
}


// MENU
// 10/15/25 - Criar, 35/38 - Atualização
console.log('\n', '--- 2 ---', '\n');
const opcao = 35

switch(opcao) {
    case 10:
    case 15:
    case 25:
        console.log('Criar');
        break
    case 35:
    case 38:
        console.log('Atualizar');
        break
    default: 
        console.log('ERRO!');
        break                
}

console.log('\n', '--- 3 ---', '\n');

const ehRico = true
const moraNoBR = true

ehRico && moraNoBR ? console.log('é rico!') : console.log('é pobre');
