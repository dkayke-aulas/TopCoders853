import { UserPost } from "../services/user.service.js"
import Compress from "compress.js"

const signup = document.createElement('form')
signup.setAttribute('id', 'p-signup')

// const recuperarEDevolverBase64 = async () => {
//     return new Promise((resolve, reject) => {
//         const file = signup.querySelector('input[type="file"]').files[0]
//         // const file = event.target.files[0]
//         if (file) {
//             const reader = new FileReader()
//             reader.readAsDataURL(file)
//             reader.onload = () => {
//                 resolve(reader.result);
//             }
//             reader.onerror = () => {
//                 reject(null)
//             }
//         }
//         else {
//             reject(null)
//         }
//     })
// }

const recuperarEComprimirFoto = async () => {
    return new Promise((resolve, reject) => {
        const compress = new Compress()
        const upload = signup.querySelector('input[type="file"]')
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

const criarConta = async (event) => {
    event.preventDefault()

    const fd = new FormData(signup)

    // const foto = await recuperarEDevolverBase64()
    // if (foto) fd.append('foto', foto)
    
    const foto = await recuperarEComprimirFoto()
    if (foto) fd.append('foto', foto.data)

    const response = await UserPost(fd)

    console.log(response);
    if (response.status === 200) {
        console.log("CADASTROU");
        window.open('#login', '_self')
    }
}

const events = () => {
    signup.addEventListener('submit', criarConta)
    // const inputFoto = signup.querySelector('input[type="file"]')
    // inputFoto.addEventListener('input', imagemParaBase64)
}

export const CriarConta = () => {
    signup.innerHTML = (`
        <input type="text" name="nome" placeholder="Nome">
        <input type="text" name="email" placeholder="Usuário">
        <input type="password" name="senha" placeholder="Senha">
        <input type="file" accept="image/*" name="foto" placeholder="Foto">
        <button>Criar conta</button>
        
        <p>Já possui conta? <a href="/#login" target="_self">Entre aqui!</a></p>
    `)

    events()
    return signup
}
