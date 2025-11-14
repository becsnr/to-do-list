let tarefasGrupo = []

function addTarefa() {

    // pega o valor do input
    const inputTarefa = document.getElementById('tarefa');
    let tarefa = inputTarefa.value.trim(); // trim() tira tds os espaços em branco

    const msg = document.getElementById('msg');

    if (tarefa == "") { 
        let mensagemErro = "Por favor, digite uma tarefa!";
        msg.textContent = mensagemErro;
        msg.style.color = '#A34743';
    } else {
        let mensagemSucesso = "Tarefa adicionada com sucesso!";
        msg.textContent = mensagemSucesso;
        msg.style.color = '#28A745';

        tarefasGrupo.push(tarefa);
        renderizarTarefas();
    }

    // limpa o campo do input
    inputTarefa.value = "";
}

function renderizarTarefas() { // Renderizar significa mostrar algo na tela.
    const listaTarefas = document.getElementById('listaTarefas');

    listaTarefas.innerHTML = ""; // limpa a lista antes de renderizar
    
    for (let i = 0; i < tarefasGrupo.length; i++) {
        let novaTarefa = document.createElement('li');
        novaTarefa.textContent = tarefasGrupo[i];
        listaTarefas.appendChild(novaTarefa);
    }
}