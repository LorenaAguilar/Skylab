/*AJAX => Requisição assíncrona que realizamos em algum backend
Para evitar de ficar atualizando a página sempre que precisarmos de uma informação nova,
conseguimos utilizar o AJAX para fazer requisições sem precisar recarregar a página. */

//Para começar uma requisição AJAX, definimos uma variável com uma classe do javascript "XMLHttpRequest()"
//que é o que nos dará acesso a funcionalidade do AJAX

var xhr = new XMLHttpRequest();

//Como exemplo, estaremos consumindo a api da página de usuários do github
//O primeiro parâmetro a ser passado é o método (nesse caso como queremos buscar, será GET)
//O segundo método é a url que eu quero buscar os dados
xhr.open("GET", "https://api.github.com/users/lorenaAguilar");

//Aqui deveriam ser enviados parâmetros a requisição, mas por enquanto não enviaremos
xhr.send(null);

//A requisição não ocorre no mesmo fluxo do nosso script porque ela é assíncrona,
//logo, precisamos de uma forma de fazer com que só depois que a requisição ocorra
//nosso script continue executando o restante do código, faremos isso da seguinte forma:
xhr.onreadystatechange = function () {
  //4 => variável que significa que a resposta voltou da requisição
  if (xhr.readyState === 4) {
    //PS: Precisamos converter de JSON pois a resposta da requisição vem nesse formato
    console.log(JSON.parse(xhr.responseText));
  }
};

//O AJAX é uma das principais formas de consumir informações do servidor por meio do JavaScript
