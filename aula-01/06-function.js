const teste = function() {
    console.log("Invocou a função 1");
}

const teste2 = () => {
    console.log("Invocou a função 2");
}

function teste3() {
    console.log("Invocou a função 3");
}

function soma(varA = 1, varB = 1) {
    console.log("A soma é", varA + varB);
}

teste();
teste2();
teste3();
soma(2, NaN);

// (() => {
//     console.log("Invocou a função auto invocada")
// })()