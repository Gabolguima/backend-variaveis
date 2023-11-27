const altura = 1.86;
const peso = 85;

// Método 1
// const imc = Math.floor(peso / (altura * altura)); 

// Método 2
// const imc = peso / altura ** 2;

// Método 3
const imc = peso / Math.pow(altura, 2);

console.log(`Seu IMC é ${imc}`);