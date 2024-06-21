let t1 = true;
let t2 = true;

let comprarTV50 = t1 && t2;//AND
console.log('Vamos comprar a TV de 50"? ', comprarTV50); 

let comprarTV25 = t1 !== t2;//XOR 
console.log('Vamos comprar a TV de 32"? ', comprarTV25); 

let tomarSorvete = t1 ||t2;//OR
console.log('Vamos comprar sorvete? ', tomarSorvete); 

let FicarEmCasa = !tomarSorvete;//NOT
console.log('Vamos ficar em casa? ', FicarEmCasa);