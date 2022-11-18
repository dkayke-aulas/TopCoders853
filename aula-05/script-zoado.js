const inputTarefa = document.getElementById('input-tarefa')
const containerTarefa = document.getElementById('container-tarefas')

let contadorInsercao = 0
let contadorRemocao = 0


function adicionarTarefa(event) {
    // console.log(event.type);
    // console.log(event.key);
    // console.log(event.code);

    if(event.key !== 'Enter') return;
    contadorInsercao++
    const tarefa = inputTarefa.value.trim()

    const paragrafo = document.createElement('p')
    paragrafo.innerText = tarefa
    paragrafo.setAttribute('data-indice-tarefa', contadorInsercao)
    containerTarefa.appendChild(paragrafo)

}

inputTarefa.addEventListener('keypress', adicionarTarefa)

