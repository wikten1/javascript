//currying: processo que transforma uma função que espera vários argumentos em uma função que espera apenas um argumento e retorna outra função curried
function somar1(a,b){
    return a + b;
}

console.log(somar1(5,4));

function somar2(a){
    return function(b){
        return a + b;
    }
}

//o primeiro parâmetro é da primeira função e o segundo da segunda função.
console.log(somar2(5)(4));

//é útil para criar funções que sejam mais dinamicas e que evita repetições complexas, como seria no caso de calcular um inposto por exemplo.
const somarMais10 = somar2(10);

console.log(somarMais10(5));
console.log(somarMais10(15));