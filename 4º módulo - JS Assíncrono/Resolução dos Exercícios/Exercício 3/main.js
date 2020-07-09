var inputElement = document.querySelector("#app input");
var listElement = document.querySelector("#app ul");
var labelElement = document.querySelector("#texto");

function receberNomeUsuario() {
  var nomeUsuario = inputElement.value;
  var url = " https://api.github.com/users/" + nomeUsuario + "/repos";

  labelElement.innerHTML = "";
  if (nomeUsuario != "") {
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

function realizandoRequisicao(url) {
  renderLoading();
  axios
    .get(url)
    .then(function (response) {
      listandoDados(response.data);
    })
    .catch(function (error) {
      renderError();
    });
}

//Função que vai renderizar "carregando" na tela
function renderLoading(loading) {
  listElement.innerHTML = "";

  var textElement = document.createTextNode("Carregando...");
  var loadingElement = document.createElement("li");

  loadingElement.appendChild(textElement);
  listElement.appendChild(loadingElement);
}

//Função que vai renderizar o erro na tela
function renderError(loading) {
  listElement.innerHTML = "";

  var textElement = document.createTextNode("Erro: Usuário inexistente!");
  var errorElement = document.createElement("li");

  errorElement.style.color = "#F00";

  errorElement.appendChild(textElement);
  listElement.appendChild(errorElement);
}
