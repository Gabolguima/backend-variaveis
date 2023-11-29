// Po = a população incial de pessoas infectadas
// x = quantidade de pessoas para as quais um paciente infectado pode transmitir
// t = tempo percorrido

const pessoas = 1000;
const quantidadeTransmissao = 4;
const tempo = 100;

const pessoasInfectadas = pessoas * quantidadeTransmissao ** (tempo / 7);

console.log(pessoasInfectadas);