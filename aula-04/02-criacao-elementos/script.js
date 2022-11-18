// RECUPERANDO DIV COM ID ROOT
const root = document.getElementById('root')

// 
const h1 = document.createElement('h1')
const texto = document.createTextNode('Aprendendo JS')
h1.setAttribute('id', 'titulo')
h1.appendChild(texto)

const button = document.createElement('button')
button.setAttribute('id', 'btn')
button.innerText = "Butão"

let i = 1
button.addEventListener('click', () => {
    const paragrafo = document.createElement('p')
    paragrafo.innerText = 'Novo parágrafo ' + i++
    button.after(paragrafo)
})


root.appendChild(h1)
root.appendChild(button)
console.log(texto);


