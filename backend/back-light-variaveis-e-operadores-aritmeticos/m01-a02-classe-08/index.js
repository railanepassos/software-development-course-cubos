let percentualDesconto, valorTenis = 129.99, valorCarteira = 129.99;

percentualDesconto = 100 - ((valorCarteira * 100) / valorTenis);
console.log(`O percentual para o cupom de descoto será de ${percentualDesconto.toFixed(1)}%`)