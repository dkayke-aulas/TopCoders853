function init () {
    let banana = document.getElementsByTagName('h1')
    console.log(banana);
}

// init()

document.addEventListener('readystatechange', (event) => {
    // console.log("LOADING");
    // console.log(event.target.readyState);
    const load = document.querySelector("[role='alertdialog']")
    load.classList.add('loading')

    if(event.target.readyState === 'interactive') {
        console.log("Está carregando");
    }

    if(event.target.readyState === 'complete') {
        console.log("Carregou");
    }
})

window.addEventListener('DOMContentLoaded', () => {
    console.log("Apenas o DOM carregado");
    const pClique = document.getElementById('p-clique')
    const pClique2 = document.getElementById('p-clique2')

    function alerta() {
        window.alert('Você clicou em mim!')
    }
    
    pClique.addEventListener('click', alerta)
    
    function removerAlerta() {
        pClique.removeEventListener('click', alerta)
    }

    pClique2.addEventListener('click', removerAlerta,)
})

function removeLoader() {
    const load = document.querySelector("[role='alertdialog']")
    load.classList.remove('loading')
    document.body.style.overflow = 'unset'
}

window.addEventListener('load', () => {
    console.log("Tudo está carregado");
    removeLoader()
})

