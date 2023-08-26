function executar(fn, n1, n2) {
  if(typeof fn === "function"){
     console.log(fn(n1, n2));
}
}

function somar(n1, n2) {
  return n1 + n2;
}

function subtrair(n1, n2) {
  return n1 - n2;
}

function multiplicar(n1, n2) {
  return n1 * n2;
}

function bomDia() {
  return "Bom dia!"
}

executar(somar, 90, 50)
executar(subtrair, 90, 50)
executar(multiplicar, 900, 500)
executar(bomDia)

