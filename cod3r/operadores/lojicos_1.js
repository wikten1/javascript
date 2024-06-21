let temDinheiro = true;
let estaEnsolarado = true;
let carroEstaNaGaragem = true;

let resultadoE = "Vai pro shopping? ";
resultadoE += temDinheiro && estaEnsolarado;
console.log(resultadoE);

let ResultadoOU = "#2 - Vai pro shopping? ";
ResultadoOU += estaEnsolarado || carroEstaNaGaragem
console.log(ResultadoOU)

console.log(true !== true);
console.log(true !== false);
console.log(false !== true);
console.log(false !== false);

console.log('Não verdadeiro ' + !true);
console.log('Não falso ' + !false);