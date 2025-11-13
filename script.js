function addTarefa() {
    // let mensagem = "Tarefa adicionada com sucesso!";

    let inputTarefa = document.getElementById('tarefa');
    let tarefa = inputTarefa.value;
    document.getElementById('msg').textContent += tarefa;

    let listaTarefas = document.getElementById('listaTarefas');
    let novaTarefa = document.createElement('li');

    novaTarefa.textContent = tarefa;

    listaTarefas.appendChild(novaTarefa);

    inputTarefa.value = "";
}