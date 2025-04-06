
//perguntar idade
var idade = prompt  ("Qual a sua idade?")
if (idade >= 18){
  alert("Você  pode jogar")
} else {
  alert ("Você não pode Jogar")
}

var jogo = prompt ("Pedra Papel ou Tesoura?")
if (jogo == "Pedra"){
  alert ("Você escolheu a Pedra")
}else if (jogo == "Papel"){
  alert ("Você escolheru o Papel")

} else if (jogo == "Tesoura"){
  alert ("Você escolheu a Tesoura")
}else {
  alert ("Escolha entre Pedra Papel ou Tesoura")
 
}


//Resposta aleatoria
var computador = Math.floor(Math.random()*3)+1;
 if (computador === 1){
  computador = "Pedra"
 }else if (computador === 2){
  computador = "Papel"
}else if (computador === 3){
  computador = "Tesoura"
} 

//Batalha

//empate
if (computador === jogo) {
  alert("Empate!");

//Pedra
} else if (computador === "Pedra" && jogo === "Tesoura") {
  alert(`Você perdeu! O computador escolheu ${computador} e você ${jogo}`);
} else if (computador === "Pedra" && jogo === "Papel") {
  alert(`Você ganhou! O computador escolheu ${computador} e você ${jogo}`);

 //Papel 
} else if (computador === "Papel" && jogo === "Pedra") {
  alert(`Você perdeu! O computador escolheu ${computador} e você ${jogo}`);
} else if (computador === "Papel" && jogo === "Tesoura") {
  alert(`Você ganhou! O computador escolheu ${computador} e você ${jogo}`);

//Tesoura
} else if (computador === "Tesoura" && jogo === "Pedra") {
  alert(`Você ganhou! O computador escolheu ${computador} e você ${jogo}`);
} else if (computador === "Tesoura" && jogo === "Papel") {
  alert(`Você perdeu! O computador escolheu ${computador} e você ${jogo}`);
}
