
//perguntar idade
var idade = prompt  ("Qual a sua idade?")
if (idade >= 18){
  alert("Você  pode entrar")
} else {
  alert ("Pode não entrar")
}

var jogo = prompt ("Pedra Papel ou Tesoura?").toLowerCase()
//converte a resposta para minusculo
if (jogo == "Pedra"){
  alert ("Você escolheu a Pedra")
}else if (jogo == "Papel"){
  alert ("Você escolheru o Papel")

} else if (jogo == "Tesoura"){
  alert ("Você escolher a Tesoura")
}else {
  alert ("Escolha entre Pedra Pepel ou Tesoura")

}
var computador = Math.floor(Math.random()*3)+1;
 if (computador == 1){
  computador = "Pedra"
 }else if (computador == 2){
  computador = "Papel"
}else if (computador == 3){
  computador = "Tesoura"
} 


