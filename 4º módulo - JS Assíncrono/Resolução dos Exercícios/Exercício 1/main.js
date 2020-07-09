function checaIdade(idade) {
  // Retornar uma promise
  return new Promise(function (resolve, reject) {
    //O resolve e reject precisam estar em uma function
    setTimeout(function () {
      idade >= 18 ? resolve() : reject();
    }, 2000);
  });
}

checaIdade(20)
  .then(function () {
    console.log("Maior que 18");
  })
  .catch(function () {
    console.log("Menor que 18");
  });
