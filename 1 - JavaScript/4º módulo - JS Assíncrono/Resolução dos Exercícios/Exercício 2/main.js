var inputElement = document.querySelector("#app input");
var listElement = document.querySelector("#app ul");
var labelElement = document.querySelector("#texto");
//Descobrimos hoje que colocar as coisas fora de função no javaScript não da nada certo

//função para receber o nome do usuário do input
function receberNomeUsuario() {
  var nomeUsuario = inputElement.value;
  var url = " https://api.github.com/users/" + nomeUsuario + "/repos";

  labelElement.innerHTML = "";
  if (nomeUsuario != "") {
    //Chama a função que realiza a requisição
    realizandoRequisicao(url);
  } else {
    alert("Nome de usuário vazio!");
  }

  var textoLabel = document.createTextNode(
    "Repositórios da conta de " + nomeUsuario + ": "
  );
  labelElement.appendChild(textoLabel);
  inputElement.value = "";
}

//função responsável por listar os dados dos repositórios em tela (lista)
function listandoDados(responseData) {
  listElement.innerHTML = "";

  for (dado in responseData) {
    console.log(responseData[dado].name);
    var dadoElement = document.createElement("li");
    var dadoText = document.createTextNode(responseData[dado].name);

    dadoElement.appendChild(dadoText);
    listElement.appendChild(dadoElement);
  }
}

//função que utiliza Axios para realizar uma requisição
function realizandoRequisicao(url) {
  axios
    .get(url)
    .then(function (response) {
      //console.log(response.data[0].name);
      listandoDados(response.data);
    })
    .catch(function (error) {
      console.warn("Erro na requisição! " + error);
    });
}
