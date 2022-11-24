import { Header } from "./../components/header.component.js"
import { UserPost } from "../services/user.service.js"
import { ContactGet } from "../services/contact.service.js"

const root = document.getElementById('root')
const contacts = document.createElement('form')
contacts.setAttribute('id', 'p-contatos')

const criarConta = async (event) => {
    event.preventDefault()
    const fd = new FormData(contacts)
    const response = await UserPost(fd)

    console.log(response);
    if (response.status === 200) {
        console.log("CADASTROU");
        window.open('#login', '_self')
    }
}


const events = () => {
    contacts.addEventListener('submit', criarConta)
}

export const Contatos = async () => {
    const header = Header()
    root.append(header)

    const constatos = await ContactGet()
    console.log(constatos);

    contacts.innerHTML = `
        <a href="/#criar-contato">+ Cadastrar contato</a>
    `

    constatos.data.forEach((contato) => {
        contacts.innerHTML += (`
            <h1>${contato.nome}</h1>
            <img src="data:image/jpeg;base64,${contato.foto}"/>
            <hr />
        `)
    })

    events()
    return contacts
}
