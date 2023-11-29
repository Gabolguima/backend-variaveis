const capital = 1000;
const taxaDeJurosFixa = 12.5 / 100;
const tempo = 5;

const montante = capital * (1 + taxaDeJurosFixa) ** tempo;

console.log(montante);

