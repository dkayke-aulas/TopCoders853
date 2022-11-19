const promise1 = new Promise((resolve, reject) => {
    console.log('promessa 1');
    setTimeout(() => resolve('promessa sucesso 1'), 2000)
})

const promise2 = new Promise((resolve, reject) => {
    console.log('promessa 2');
    setTimeout(() => reject('promessa sucesso 2'), 1000)
})

// promise1.then((sucesso1) => {

//     promise2.then((sucesso2) => {
//         console.log(sucesso1, sucesso2);
//     })

// })


Promise.all([promise1, promise2]).then((sucesso) => {
    const [sucesso1, sucesso2] = sucesso
    console.log(sucesso1, sucesso2);
})

Promise.allSettled([promise1, promise2]).then((sucesso) => {
    // const [sucesso1, sucesso2] = sucesso
    console.log(sucesso);
})





// promise
//     .then((retornoSucesso) => {
//         console.log(retornoSucesso);
//     })
//     .catch((retornoErro) => {
//         console.log(retornoErro);
//     })
//     .finally(() => {
//         console.log("ACABOU!");
//     })



