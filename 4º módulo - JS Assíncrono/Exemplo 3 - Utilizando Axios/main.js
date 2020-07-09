/*
Para utilizar a biblioteca Axios precisamos primeiro importá-la no index.html
Importante ressaltar que temos que importá-la antes de importar o main.js, pois, dessa forma
quando formos utilizar o main.js a biblioteca já estará importada
*/

axios
  .get("https://api.github.com/users/lorenaAguilar")
  .then(function (response) {
    console.log(response);
    /*
    Outros exemplos do que podemos usar: 
    console.log(response.data.avatar_url);
    console.log(response.data.html_url);
    console.log(response.data.type);
    */
  })
  .catch(function (error) {
    console.warn("Erro na requisicao! \n" + error);
  });

/*
  O Axios é como um encapsulamento do XMLHttpRequest.
  Com o Axios não precisamos converter do formato JSON, pois, o Axios já identifica e faz essa conversão
  de forma automática
*/
