// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
dadosPessoais = {
  nome: "Wikten",
  sobrenome: "Alves de Medeiros",
  idade: 25,
}

// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function () {
  console.log(`${this.nome} ${this.sobrenome}`);
}
// Modifique o valor da propriedade preco para 3000
objeto.preco = 3000;



// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
cachorro = {
  raça: "labrador",
  cor: "preto",
  idade: 10,
  latir: function (pessoa) {
    if(pessoa === 'homen') {
     return 'Latir';
    } else {
      return 'Nada';
    }
  }
}
