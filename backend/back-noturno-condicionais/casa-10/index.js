//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;
let valorASerPago = valorDoProduto / 100

switch (tipoDePagamento) {
  case "credito":
    valorASerPago = valorASerPago - ((valorASerPago / 100) * 5)
    console.log(`Valor a ser pago: R$ ${valorASerPago.toFixed(2)}`)
    break;

  case "cheque":
    valorASerPago = valorASerPago - ((valorASerPago / 100) * 3)
    console.log(`Valor a ser pago: R$ ${valorASerPago.toFixed(2)}`)
    break;

  case "dinheiro":
    valorASerPago = valorASerPago - ((valorASerPago / 100) * 10)
    console.log(`Valor a ser pago: R$ ${valorASerPago.toFixed(2)}`)
    break;

  case "debito":
    valorASerPago = valorASerPago - ((valorASerPago / 100) * 10)
    console.log(`Valor a ser pago: R$ ${valorASerPago.toFixed(2)}`)
    break;

  default:
    break;
}