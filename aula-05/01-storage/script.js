const inputTarefa = document.getElementById('input-tarefa')
const containerTarefa = document.getElementById('container-tarefas')
const buttonAdicionarLista = document.getElementById('btn-adicionar-tarefa')
const buttonLimparLista = document.getElementById('btn-limpar-lista')
const contador = document.getElementById('contador')

let contadorInsercao = 0
let contadorRemocao = 0
const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

window.onload = () => {
    tarefas.forEach((tarefa, indice) => {
        adicionarTarefa(tarefa, indice)
    })
}

function atualizarContador() {
    const totalTarefas = contadorInsercao - contadorRemocao

    if(totalTarefas > 1) {
        contador.innerText = `${totalTarefas} tarefas inseridas`
    }
    else if(totalTarefas === 1) {
        contador.innerText = `${totalTarefas} tarefa inserida`
    }
    else {
        contador.innerText = `nenhuma tarefa inserida`
    }
}

function removerTodasTarefas() {
    containerTarefa.innerHTML = null
    contadorInsercao = 0
    contadorRemocao = 0
    atualizarContador()
}

function removerTarefaIndividual(event) {
    const indice = event.target.getAttribute('data-indice-tarefa')
    const tarefa = document.querySelector(`[data-indice-tarefa='${indice}']`)
    tarefa.remove()
    contadorRemocao++
    console.log(contadorInsercao, contadorRemocao);
    atualizarContador()
}

function concluirTarefa(event) {
    event.target.parentNode.style.background = '#ccc'
}

function salvarTarefa(tarefa) {
    tarefas.push(tarefa)
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}

function adicionarTarefa(tarefa, indice) {
    inputTarefa.value = ''
    inputTarefa.focus()
    
    const span = document.createElement('span')
    span.innerText = tarefa
    span.setAttribute('data-indice-tarefa', indice ?? tarefas.length)
    
    const input = document.createElement('input')
    input.setAttribute('type', 'checkbox')
    span.appendChild(input)

    input.addEventListener('click', concluirTarefa)
    span.addEventListener('click', removerTarefaIndividual)
    span.addEventListener('click', removerTarefaIndividual)
    
    containerTarefa.appendChild(span)
    contadorInsercao++
    atualizarContador()
}

function adicionarTarefaEvento(event) {
    const tarefa = inputTarefa.value.trim()
    const ehKeypress = event.type === 'keypress'
    const ehEnter = event.key === 'Enter'
    
    if(!tarefa || (ehKeypress && !ehEnter)) return;
    
    adicionarTarefa(tarefa)
    salvarTarefa(tarefa)
}

inputTarefa.addEventListener('keypress', adicionarTarefaEvento)
buttonAdicionarLista.addEventListener('click', adicionarTarefaEvento)
buttonLimparLista.addEventListener('click', removerTodasTarefas)

