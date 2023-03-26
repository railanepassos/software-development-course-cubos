const jogada1 = "pedra"
const jogada2 = "tesoura"

//seu código aqui

if (jogada1 == "pedra" && jogada2 == "papel" || jogada1 == "papel" && jogada2 == "tesoura" || jogada1 == "tesoura" && jogada2 == "pedra") {
  console.log(jogada2)

}
if (jogada2 == "pedra" && jogada1 == "papel" || jogada2 == "papel" && jogada1 == "tesoura" || jogada2 == "tesoura" && jogada1 == "pedra") {
  console.log(jogada1)

}
if (jogada1 == jogada2) {
  console.log("empate")

}