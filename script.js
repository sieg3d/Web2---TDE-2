/*document.write(`1. Faça um programa que sorteia um número de 0 a 9999 e mostre na tela cada um dos dígitos separadamente. <br>Exemplo: unidade: 4 dezena: 3 centena: 8 milhar`)

sorteio=Math.random()*10000
unidade = sorteio % 10;
dezena = Math.floor((sorteio / 10) % 10);
centena = Math.floor((sorteio / 100) % 10);
milhar = Math.floor(sorteio / 1000);

document.write(`<p>O número sorteado foi: ${sorteio.toFixed(0)}</p>`)

document.write(`Unidade: ${unidade.toFixed(0)}| Dezena: ${dezena.toFixed(0)}| Centena: ${centena.toFixed(0)}| Milhar: ${milhar.toFixed(0)}`)


document.write(`<p>2. Escreva um programa que faça o computador "pensar" em um número inteiro entre 0 e 5 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deverá escrever na tela se o usuário venceu ou perdeu.</p>`)

escolha = parseInt(Math.random()*6)
aposta = parseInt(prompt(`De 0 a 5, que número o computador escolheu?`))
document.write(`O computador escolheu ${escolha}`)
document.write(`<br>Você escolheu ${aposta}`)

if(escolha==aposta){
  alert(`PARABÉNS! Você acertou o número escolhido pelo computador!`)
}else{
  alert(`Que pena. Você errou. :( `)
}


document.write(`<p>3. Escreva um programa que leia a velocidade de um carro. Se ele ultrapassar 80Km/h, mostre uma mensagem dizendo que foi multado.<br>A multa vai custar R$7,00 por cada KM acima do limite.</p>`)

velMax = 80
multa = 7

vel = +(prompt(`Qual a velocidade do carro?`))
if(vel>80){
  multa= multa*(vel-velMax)
  alert(`Acima do limite de velocidadae!`)
  document.write(`Você ultrapassou ${vel-velMax}km do limite de velocidade (80km/h).<br> O valor da multa é R$${multa.toFixed(2)}.`)
}else{
  document.write(`Dentro do limite de velocidade.`)
}

*/
