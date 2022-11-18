const form = document.querySelector('form[name="login"]')

function submeterModeloUm() {
    const fd = new FormData(form)
    // const entries = fd.entries()
    // console.log(entries);
    fd.append('fruta', 'caju')
    for ([chave, valor] of fd) {
        console.log(chave, valor);
    }
}

function submeterModeloDois() {
    const formDataEntries = new FormData(form).entries()
    const array = Array.from(formDataEntries)
    const searchParams = new URLSearchParams(array).toString()
    console.log(searchParams);
}

function submeterModeloTres() {
    const formDataEntries = new FormData(form).entries()

    const matriz = Array.from(formDataEntries) // [ [chave, valor], [chave, valor], ...]


    function callback ([chave, valor], indice, array) {
        return { [chave]: valor }
    }
    
    // o mesmo que a função acima
    // function callback (item, indice, array) {
    //     return { [item[0]]: item[1] }
    // }

    const arrayObject = matriz.map(callback) // [ {chave: valor}, ...]

    // const objectForm = Object.assign(destruturacao[0], destruturacao[1])

    
    const objectForm = Object.assign(...arrayObject)
    
    // igual o código acima
    // let obj;
    // arrayObject.forEach((item) => {
    //     obj =  Object.assign(obj, item)
    // })

    console.log(objectForm);
}


























form.addEventListener('submit', ($event) => {
    $event.preventDefault()
    const forms = document.forms
    const usuario = forms.login.usuario
    const senha = forms.login.senha

    console.log(usuario.value);
    console.log(senha.value);
})
