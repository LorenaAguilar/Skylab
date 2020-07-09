/*
Promises => Linhas de código (funções) que não vão influenciar no nosso código javaScript
Elas servem para "controlar" o código assíncrono, ou seja, caso existam códigos
depois do código assíncrono que precisam da resposta dele para funcionar, a promise
faz com que esse resultado seja retornado antes que o código continue sendo executado. 
Ela também auxilia quando a requisição da erro, pois, nesse caso ela não permite que o 
código continue sendo executado
As promises são muito úteis pois não vamos precisar nos preocupar se um código que precisa 
do resultado da requisição assíncrona vai continuar executando e dar erro caso ela ainda
não tenha retornado seu resultado
*/

//PS: A Promise é uma class
//PS: O resolve e o reject também são funções
//Resolve: Função que utilizaremos na Promise quando o resultado que a gente obtiver for de sucesso
//Reject: Função que utilizaremos quando o resultado que a gente obtiver não for de sucesso
var minhaPromise = function () {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users/lorenaAguilar");
    xhr.send(null);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        //Para checar se a Promise teve sucesso, precisamos ver se o código de status foi igual a 200 (sucesso)
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          //caso o resultado seja diferente de 200 (não houve sucesso)
          reject("Erro na requisicao!");
        }
      }
    };
  });
};

//Chamando a Promise
minhaPromise()
  //.then é executado quando chamarmos o resolve dentro da Promise
  .then(function (response) {
    //Caso tenhamos um código que precisa da resposta da requisição, o melhor lugar para ele ficar é aqui
    console.log(response);
  })
  //.catch é chamado pelo reject dentro da Promise
  .catch(function (error) {
    console.warn(error);
  });
