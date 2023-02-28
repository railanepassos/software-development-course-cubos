let montante, capital = 1000, taxaFixaJuros = 0.125, periodo = 5;

montante = capital * Math.pow((1 + taxaFixaJuros), periodo)

console.log(`O montante recebido será de R$ ${montante.toFixed(2)}`)