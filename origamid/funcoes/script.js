function verificaTrue (val){
  return !!dado;
}

verificaTrue(80);

function perimetro(lado) {
  periQuad = lado*4;
  return periQuad;
}

var x = perimetro(2);
console.log(x);

function nomeCompleto(nome, sobrenome){
  return `${nome} ${sobrenome}`;
}

var y = nomeCompleto("Wikten", "Alves de Medeiros")
console.log(y);

function verificaPar(num){
  if((num%2)==0){
    console.log("É par!");
  }else{
    console.log("Não é par!");
  }
}

verificaPar(6);

function verificaTipo(dado){
  console.log(typeof dado);
}

verificaTipo("oi");

addEventListener('scroll', function(){
  console.log("Wikten Alves de Medeiros");
})


var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

precisoVisitar(20);