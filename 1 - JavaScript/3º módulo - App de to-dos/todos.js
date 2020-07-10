/*Para começar a criar a aplicação, precisamos pensar em quais elementos vamos ter que 
referenciar aqui no script para poder manipulá-los
No caso do nosso app, nós vamos precisar do botão, para saber quando a pessoa ordenar 
que um item seja adicionado a to-do list, nós também precisaremos do input, para saber o que a pessoa
deseja adicionar na to-do list e precisaremos da lista para que o novo to-do seja adicionado. 
*/

//Referenciando a lista:
var listElement = document.querySelector("#app ul"); //está buscando a ul dentro da div de id = app

//Referenciando o input:
var inputElement = document.querySelector("#app input");

//Referenciando o botão:
var buttonElement = document.querySelector("#app button");

//Forma de armazenar a lista de to-dos aqui dentro do javaScript:
//var todos = ["Fazer café", "Estudar javaScript", "Terminar atividades"];

//Ao iniciar o programa, vamos buscar a lista salva na storage e transformar ela
//de volta de JSON para um array
var todos = JSON.parse(localStorage.getItem("list_todos")) || [];

/*Se a nossa lista fosse mais complexa, poderíamos fazer um array de objetos: 
 var todos = [
     { text = "Fazer café ", propriedade = 1},
     {text = "Estudar javaScript", propriedade = 2}
] */

//Renderizando os itens da lista em tela:
//PS: é melhor criar em uma função pois quando for renderizar novamente (ao adicionar ou excluir um item)
//basta chamar a função novamente

function renderTodos() {
  //Removendo todo o conteúdo da lista antes de renderizar uma nova lista:
  //Isso vai evitar que a mesma lista seja repetida várias vezes na tela
  listElement.innerHTML = "";

  //Percorrendo o array
  //Desse jeito, o for vai percorrer todo o array e retornar cada item dentro de "todo"
  for (todo of todos) {
    var todoElement = document.createElement("li");
    var todoText = document.createTextNode(todo);

    //criando o link de excluir
    var linkElement = document.createElement("a");
    //No a é obrigatório colocar o href
    linkElement.setAttribute("href", "#");
    var linkText = document.createTextNode("Excluir");

    //Procura a posição do "todo" dentro do array "todos"
    var pos = todos.indexOf(todo);

    linkElement.setAttribute("onclick", "deleteTodo(" + pos + ")");

    //inserindo o texto no link
    linkElement.appendChild(linkText);

    //Inserindo o texto dentro do item da lista
    todoElement.appendChild(todoText);
    //Além de adicionar o texto no todoElement vamos adicionar também o excluir
    todoElement.appendChild(linkElement);
    //Inserindo o item da lista dentro da lista
    listElement.appendChild(todoElement);
  }
}

renderTodos();

//Função para adicionar o to-do do input na lista de to-dos
function addTodo() {
  //Recuperar valor do input
  var todoText = inputElement.value;

  //Adicionar valor do input ao final do nosso array
  todos.push(todoText);

  //Apagar valor atual do input
  inputElement.value = "";

  //Renderizando a lista de to-dos novamente
  renderTodos();
  saveToStorage();
}

buttonElement.onclick = addTodo;

//função que vai remover o to-do da lista e para isso recebe a posição do array em que ele está
function deleteTodo(pos) {
  //O splice remove uma quantidade de itens de um array baseado na posição que a gente passa
  todos.splice(pos, 1); //A partir da posição recebida, remova o próximo item
  //Renderizar a lista sem o elemento removido
  renderTodos();
  saveToStorage();
}

//Função que vai salvar a lista **localmente** para que mesmo quando atualizarmos a
// página ou sairmos do site, ele continue lá
function saveToStorage() {
  //Vai pegar nossa lista de to-dos e salvar no storage
  //localStorage => variável global para acessar o storage
  localStorage.setItem("list_todos", JSON.stringify(todos));

  //Como o storage não consegue guardar um vetor, nós temos que convertê-lo para algum tipo
  //que o storage suporte guardar, no nosso caso, vamos convertê-lo para json
}
