var rodada = 1

while (rodada <=3){     
var jogador = prompt (`Bem vindo a rodada ${rodada++} Escolha seu piso (1,2,3)`)
var piso = Math.floor(Math.random()*3)+1;
if (Number(jogador) === piso){
     alert ("Você caiu ")
} else {
     alert (`Você não caiu o piso quebrado era o ${piso}`)
}
rodada=1000

if (rodada === 4){
     alert ("Você venceu")
}
}

   