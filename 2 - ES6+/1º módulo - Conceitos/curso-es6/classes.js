/*
PARA O FUNCIONAMENTO DESSE CÓDIGO classes.js DEVE-SE ADICIONAR A SEGUINTE
LINHA DE CÓDIGO NO SCRIPT DO PACKAGE.JSON:
"dev": "babel ./classes.js -o bundle.js"

 PARA O FUNCIONAMENTO DOS EXEMPLOS 1 E 2, QUANDO TIRÁ-LOS DOS COMENTÁRIOS, DEVE-SE
 ADICIONAR NO INDEX.HTML A SEGUINTE LINHA DE CÓDIGO DENTRO DO BODY:
 <button id="novotodo">Adicionar</button>
 */

/* EXEMPLO 1 */

/*class TodoList {
  //Primeiro método que será executado sempre que instanciarmos uma nova classe
  constructor() {
    //Nesse método podemos colocar ações para serem executadas assim que a classe é chamada
    //ou inicializar objetos
    this.todos = [];
  }

  addTodo() {
    this.todos.push("Novo ToDo");
    console.log(this.todos);
  }
}

const MinhaLista = new TodoList();

document.getElementById("novotodo").onclick = function () {
  MinhaLista.addTodo();
};*/

//--------------------------------------------------------------------------------//

/* EXEMPLO 2 */

class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

//Herança
class TodoList extends List {
  constructor() {
    super(); //Chama o constructor da classe pai

    this.usuario = "Lorena";
  }

  mostraUsuario() {
    console.log(this.usuario);
  }
}

var MinhaLista = new TodoList();

document.getElementById("novotodo").onclick = function () {
  MinhaLista.add("Novo ToDo");
};

MinhaLista.mostraUsuario();
//--------------------------------------------------------------------------------//

/* EXEMPLO 1 */

/*class Matematica {
    //O método estático não enxerga o resto da classe,
    //logo, quando utilizamos ele, geralmente a classe nem tem o constructor,
    //esse método vai ser mais para receber uma informação e retornar algo
    //Seria algo como um "auxílio" ao código
    static soma(a, b) {
      return a + b;
    }
  }
  
  console.log(Matematica.soma(1, 2));*/
