import { ContactPost } from "../services/contact.service.js"
import { Header } from "../components/header.component.js"
import Compress from "compress.js"

const contact = document.createElement('form')
contact.setAttribute('id', 'p-criar-contato')

const recuperarEComprimirFoto = async () => {
    return new Promise((resolve, reject) => {
        const compress = new Compress()
        const upload = contact.querySelector('input[type="file"]')
        const files = [...upload.files]

        const options = {
            size: 2,
            quality: 0.75,
            maxWidth: 300,
            maxHeight: 300,
            resize: true,
            rotate: false,
        }

        compress.compress(files, options)
            .then((data) => resolve(data[0]))
            .catch(() => reject(null))
    })
}

const criarContato = async (event) => {
    event.preventDefault()

    const fd = new FormData(contact)

    const foto = await recuperarEComprimirFoto()
    if (foto) fd.append('foto', foto.data)

    const telefones = []
    for (let [chave, valor] of fd) {
        // verifico se é um campo que possui chave com nome "numero" incluso e se o valor do numero foi preenchido
        if (chave.includes('numero') && valor) {

            // pega o numero que tem no fim do 'name' numero (pega tudo após 6 caracteres)
            const num = chave.substring(6)

            telefones.push({
                tipo: fd.get('tipo' + num),
                numero: fd.get('numero' + num)
            })

            // deleta a chave original, já que foi adicionado no array
            fd.delete('tipo' + num)
            fd.delete('numero' + num)
        }
    }

    const endereco = {
        logradouro: fd.get('logradouro'),
        cidade: fd.get('cidade'),
        estado: fd.get('estado'),
        cep: fd.get('cep'),
        pais: fd.get('pais')
    }

    // converte por ser um objeto
    fd.append('endereco', JSON.stringify(endereco))

    // deleto as propriedade de fd pois foi colocado no objeto endereço
    fd.delete('logradouro')
    fd.delete('cidade')
    fd.delete('estado')
    fd.delete('cep')
    fd.delete('pais')


    // verifica se existe telefone
    if (telefones.length > 0) {
        // apenda ele no form data convertendo pra string para não chegar quebrado na service
        fd.append('telefones', JSON.stringify(telefones))
    }

    const response = await ContactPost(fd)

    console.log(response);
    if (response.status === 200) {
        console.log("CADASTROU CONTATO");
        window.open('#contatos', '_self')
    }
}

const events = () => {
    contact.addEventListener('submit', criarContato)
}

export const CriarContato = () => {
    const header = Header()
    root.append(header)

    contact.innerHTML = (`
        <a href="/#contatos">Ver todos os contatos</a>
        <fieldset>
            <legend>Dados pessoais</legend>
            <input type="text" name="nome" placeholder="Nome">
            <input type="text" name="apelido" placeholder="Apelido">
            <input type="text" name="email" placeholder="E-mail">
        </fieldset>

        <fieldset>
            <legend>Telefone 1</legend>
            <select name="tipo1">
                <option value="casa">Casa</option>
                <option value="celular">Celular</option>
                <option value="trabalho">Trabalho</option>
            </select>
            <input type="tel" name="numero1" placeholder="Número de telefone">
        </fieldset>
        
        <fieldset>
            <legend>Telefone 2</legend>
            <select name="tipo2">
                <option value="casa">Casa</option>
                <option value="celular">Celular</option>
                <option value="trabalho">Trabalho</option>
            </select>
            <input type="tel" name="numero2" placeholder="Número de telefone">
        </fieldset>
        
        <fieldset>
            <legend>Telefone 3</legend>
            <select name="tipo3">
                <option value="casa">Casa</option>
                <option value="celular">Celular</option>
                <option value="trabalho">Trabalho</option>
            </select>
            <input type="tel" name="numero3" placeholder="Número de telefone">
        </fieldset>
        
        <fieldset>
            <legend>Endreço</legend>
            <input type="name" name="logradouro" placeholder="Logradouro">
            <input type="name" name="cidade" placeholder="Cidade">
            <input type="name" name="estado" placeholder="Estado">
            <input type="name" name="cep" placeholder="CEP">
            <input type="name" name="pais" placeholder="País">
        </fieldset>

        <fieldset>
        <legend>Telefone 3</legend>
        <textarea type="text" name="notas" placeholder="Observações"></textarea>

        <input type="file" accept="image/*" name="foto" placeholder="Foto">
        </fieldset>
        <button>Cadastrar contato</button>
        
    `)

    events()
    return contact
}
