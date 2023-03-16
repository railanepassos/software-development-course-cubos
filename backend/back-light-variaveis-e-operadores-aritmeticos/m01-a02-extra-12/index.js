let quantidadeInfectada, populacaoInicial = 1000, margemInfeccao = 4, tempoDecorrido = 100;

quantidadeInfectada = (margemInfeccao * populacaoInicial) * tempoDecorrido;

console.log(`Após ${tempoDecorrido} ${tempoDecorrido === 1 ? "dia" : "dias"} teremos ${quantidadeInfectada} pessoas infectadas pelo virus.`);