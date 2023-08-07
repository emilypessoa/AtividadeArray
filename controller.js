
// FUNÇÃO PARA ARMAZENAR NOMES EM ARRAY

var dadosLista = [];
function salvarTarefa(){
    let nomeTarefa=document.getElementById("nomeTarefa").value;
    if(nomeTarefa){
        dadosLista.push(nomeTarefa);
        criarLista();
        document.getElementById('nomeTarefa').value = '';
    }
}

// FUNÇÃO PARA CRIAR LISTA DE USUÁRIO

function criarLista(){
let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Tarefa</th><th>Ações</th></tr>";
for(let i = 0;i <= (dadosLista.length - 1);i++){
    tabela += "<tr><td>" + dadosLista[i] + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button class='btn btn-danger'  onclick='finalizar(this.parentNode.parentNode.rowIndex)'>Finalizar</button></td></tr>";
    document.getElementById('tabela').innerHTML = tabela;
    }
}

// FUNÇÃO PARA EDITAR NOME

function editar(i){
    document.getElementById('nomeTarefa').value = dadosLista [(i - 1)];
    dadosLista.splice(dadosLista[(i-1)], 1);
}

// FUNÇÃO PARA EXCLUIR NOME
function finalizar(i){
    dadosLista.splice((i - 1), 1);
    document.getElementById('tabela').deleteRow(i)
}