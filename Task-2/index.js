const grauFahrenheit = 73;
const grauCelsius = (grauFahrenheit - 32) * 5 / 9;

const resultadoArredondado = Math.round(grauCelsius);

// Resposta do exercício
console.log(`${grauFahrenheit} graus Fahrenheit equivalem aproximadamente a ${grauCelsius} graus Celsius`);

// Resposta alternativa para o grau C° arredondado
// console.log(`${grauFahrenheit} graus Fahrenheit equivalem a ${resultadoArredondado} graus Celsius`);