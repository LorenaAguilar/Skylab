/* PARA O FUNCIONAMENTO DESSE CÓDIGO introducao.js DEVE-SE ADICIONAR A SEGUINTE
LINHA DE CÓDIGO NO SCRIPT DO PACKAGE.JSON:
 "dev": "babel ./const_let.js -o bundle.js"
*/

//Até este momento nós utilizamos "var" para declarar variáveis, mas existem duas
//keywords para fazer esse trabalho:

/** CONST **/
//A constante não pode ter seu valor reatribuído

/* O EXEMPLO ABAIXO NÃO FUNCIONA (PROIBIDO)
const a = 1;

a = 3;
*/

//O que podemos fazer, ao invés de reatribuir o valor é mutar a variável
//Exemplo:

const usuario = { nome: "Lorena" };

usuario.nome = "Luana";

console.log(usuario);
//Neste exemplo acima estamos trabalhando sempre com o mesmo FORMATO do vetor/variável
//Única coisa que fazemos é alterar o valor do atributo

/** LET **/
//O let é utilizado para variáveis de escopo
//Exemplo:

function teste(x) {
  let y = 2;

  if (x > 5) {
    let y = 4; //Aqui nós ainda podemos manipular a variável pois ainda está dentro do escopo principal
    console.log(x, y);
  }
}

teste(10);

//A variável de tipo let só é enxergada dentro do escopo que ela está
//Escopo = espaço entre as chaves
