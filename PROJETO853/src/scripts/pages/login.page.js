import { AuthPost } from "../services/auth.service.js"

const login = document.createElement('form')
login.setAttribute('id', 'p-login')


const entrar = async (event) => {
    event.preventDefault()
    const fd = new FormData(login)
    const response = await AuthPost(fd)

    console.log(response);
    if(response.status === 200) {
        const {token, ...user} = response.data
        sessionStorage.setItem('@user', JSON.stringify(user))
        sessionStorage.setItem('@token', token)

        window.open('#contatos', '_self')
    }
    // if(response.status !== 200) window.alert('Deu ruim')
    // else window.alert('Deu bom!')

    // const json = await response.json()
    // console.log(json);

    
}


const events = () => {
    login.addEventListener('submit', entrar)
}

export const Login = () => {
    login.innerHTML = (`
        <input type="text" name="email" placeholder="Usuário">
        <input type="password" name="senha" placeholder="Senha">
        <button>Entrar</button>
        
        <p>Não possui conta? <a href="/#criar-conta" target="_self">Crie aqui!</a></p>
    `)

    events()
    return login
}
