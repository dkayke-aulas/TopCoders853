const header = document.createElement('header')
header.setAttribute('id', 'c-header')


const sair = () => {
    sessionStorage.clear()
    window.open('#login', '_self')
    console.log("saiu");
}


const events = () => {
    const btnSair = header.querySelector('#sair')
    btnSair.addEventListener('click', sair)
}

export const Header = () => {
    const user = JSON.parse(sessionStorage.getItem('@user'))

    header.innerHTML = `
        <label>${user?.nome}</label>
        <button id="sair">Sair</button>
    `
    events()
    return header
}