import { Header } from "./../components/header.component.js"
import { UserPost } from "../services/user.service.js"
import { ContactGet } from "../services/contact.service.js"

const root = document.getElementById('root')
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

export const Contatos = async () => {
    const header = Header()
    root.append(header)

    const contatos = await ContactGet()
    console.log(contatos);

    signup.innerHTML = (`
        
    `)

    events()
    return signup
}
