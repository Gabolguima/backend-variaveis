//S: soma dos ângulos internos do polígono
//n: número de lados do polígon
//a: o valor de cada ângulo em graus

const numeroDeLados = 6;
const somaDosAngulos = 180 * (numeroDeLados - 2);

console.log(`A soma dos ângulos internos é de ${somaDosAngulos}.`);

const anguloEmGraus = somaDosAngulos / numeroDeLados;

console.log(`Caso sejam iguais, cada ângulo equivale a ${anguloEmGraus}.`);
