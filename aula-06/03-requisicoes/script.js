const xhttp = new XMLHttpRequest()

xhttp.open("GET", "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe")

// xhttp.onreadystatechange = function() {
//     if(this.readyState === 4 && this.status === 200) {
//         console.log(JSON.parse(this.response))
//     }
//     if(this.readyState === 4 && this.status === 404) {
//         console.log('Deu ruim')
//     }
// }

// xhttp.addEventListener('readystatechange', (event) => {
//     if(event.target.readyState === 4 && event.target.status === 200) {
//         console.log(JSON.parse(event.target.response))
//     }
//     if(event.target.readyState === 4 && event.target.status === 404) {
//         console.log('Deu ruim')
//     }
// })

// xhttp.onload = (event) => {
//     const json = JSON.parse(event.target.response)
//     console.log(json);
// }

// xhttp.send()







// fetch("https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe1")
//     .then((response) => {
//         return response.json()
//     })
//     .then((response2) => {
//         console.log((response2));
//     })
//     .catch((err) => {
//         console.log((err));
//     })












// const abc = async () => {

// }

// async function requisitar() {
//     const req = await fetch("https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe")
//     const json = await req.json()
//     return json
// }


// (async () => {
//     const abc = await requisitar()
//     console.log(abc);
// })()









// const headers = new Headers()

// headers.append('nome', 'dannyel')

// const dataRequest = {
//     headers: headers,
//     method: "POST",
//     body: JSON.stringify({ fruta: 'banana' })
// }

// fetch("https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe", dataRequest)

























const headers = new Headers()

headers.append('Content-Type', 'application/json')

const dataRequest = {
    headers: headers,
    method: "POST",
    body: JSON.stringify({
        email: 'dannyel@email.com',
        senha: "1234",
        nome: "Dannyel Kayke"
    })
}



const contatos = [
    {
        "id": "9892b7b3-45d0-4dfa-a8d3-d32e54392b2f",
        "nome": "Amanda",
        "idUsuario": "d5b07480-02dc-423a-a598-4c5564e1b9b7",
        "apelido": "",
        "email": "",
        "notas": "",
    "foto": "data:image/png;base64,abcdefghijklmnopqrstuvwxyz",
        "telefones": [
            {
                "tipo": "casa",
                "numero": "+55 011 91234-5678"
            }
        ],
        "endereco": {
            "logradouro": "string",
            "cidade": "string",
            "estado": "string",
            "cep": "string",
            "pais": "string"
        }
    },
    {
        "id": "9b513dd1-7e29-4ce0-9a73-5c622bc21c96",
        "nome": "Dannyel",
        "idUsuario": "d5b07480-02dc-423a-a598-4c5564e1b9b7",
        "apelido": "",
        "email": "",
        "notas": "",
    "foto": "data:image/png;base64,abcdefghijklmnopqrstuvwxyz",
        "telefones": [
            {
                "tipo": "celular",
                "numero": "+55 011 91234-5679"
            },
            {
                "tipo": "trabalho",
                "numero": "+55 011 91234-5670"
            }
        ],
        "endereco": {
            "logradouro": "string",
            "cidade": "string",
            "estado": "string",
            "cep": "string",
            "pais": "string"
        }
    }
]

const input = document.querySelector("#busca")

input.addEventListener('keydown', () => {
    // console.log(input.value);
    if(input.value.length >= 3) {
        const contatoAchado = contatos.find((contato) => contato.nome.toLocaleLowerCase().includes(input.value.toLocaleLowerCase()))
        console.log(contatoAchado);
    }
})

contatos.forEach((contato) => {
    const p = document.createElement('p')
    p.innerText = `nome: ${contato.nome}`


    p.addEventListener('click', () => {
        // window.alert(contato.id)
        fetch(`http://localhost:5000/v1/contact/${contato.id}`, dataRequest)
    })

    document.body.appendChild(p)
})

fetch("http://localhost:5000/v1/user", dataRequest)