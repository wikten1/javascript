const futuro = Date.now() + 1000;
let quntidade = 0;

while(Date.now() < futuro) {
    quntidade++
}

console.log('Qtde' + quntidade);