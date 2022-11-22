import { UserPost } from "../services/user.service.js"

const signup = document.createElement('form')
signup.setAttribute('id', 'p-signup')

const criarConta = async (event) => {
    event.preventDefault()
    const fd = new FormData(signup)
    const response = await UserPost(fd)

    console.log(response);
    if(response.status === 200) {
        console.log("CADASTROU");
        window.open('#login', '_self')
    }    
}


const events = () => {
    signup.addEventListener('submit', criarConta)
}

export const CriarConta = () => {
    signup.innerHTML = (`
        <input type="text" name="nome" placeholder="Nome">
        <input type="text" name="email" placeholder="Usuário">
        <input type="password" name="senha" placeholder="Senha">
        <button>Criar conta</button>
        
        <p>Já possui conta? <a href="/#login" target="_self">Entre aqui!</a></p>
    `)

    events()
    return signup
}
