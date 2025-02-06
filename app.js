let amigos = []; //declarando o array para os nomes dos amigos

function adicionarAmigo () {

    let inputAmigo = document.getElementById("amigo"); // selecionando o campo de entrada
    let nome = inputAmigo.value.trim(); // capturando o nome e removendo possíveis espaços extras
    if (nome === "")  { //verificando se o campo está vazio
        alert("Por favor, insira um nome."); //exibindo mensagem de erro caso o campo esteja vazio
        return; //saindo da função para não adicionar um valor vazio ao array
    }
    amigos.push(nome); // adicionando o nome ao array de amigos
    inputAmigo.value = ""; //limpando o campo de entrada
    console.log(amigos);
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos"); // selecionando a lista do .html
    lista.innerHTML = ""; // limpando a lista

    for (let i = 0; i < amigos.length; i++) { //percorrendo o array, iniciando no indice 0, continuando até o ultimo elemento e incrementando a cada repetição
        let item = document.createElement("li"); //criando um novo item de lista
        item.textContent = amigos[i]; //tornando o nome visível ao definir o mesmo como conteúdo do <li>
        lista.appendChild(item); ////adicionando o "li" dentro da lista
    }
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado"); //selecionando o elemento html onde o resultado será mostrado
    if (amigos.length === 0) { //verificando se o array de amigos está vazio
        resultado.innerHTML = "Adicione ao menos um nome antes de sortear!"; //exibindo mensagem
        return; //saindo da função     
    }

    let indiceSorteio = Math.floor(Math.random() * amigos.length); //gerando um número, multiplicando pelo array para ajustar ao tamanho do mesmo e arredondando pra baixo para garantir um indice válido
    let amigoSorteado = amigos[indiceSorteio]; //obtendo o nome do indice sorteado
    resultado.innerHTML = `${amigoSorteado}`; //mostrando o nome da pessoa sorteada
}
