const montante = 90000;
const capital = 60000;
const numeroDeMeses = 24;

const i = (montante / capital) ** (1 / numeroDeMeses) - 1; // 0.017037896605586855

console.log(`O seu financiamento de ${60000} reais teve uma taxa de juros de ${i * 100}%, pois após ${24} meses você teve que pagar ${90000} reais.`);