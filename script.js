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


document.write(`<p>4. Desenvolva um programa que pergunte a distância de uma viagem em Km. Calcule o preço da passagem, cobrando R$0,50 por KM para viagens de até 200Km e R$0,45 para viagens mais longas.</p>`)

distancia = +(prompt(`Qual a distancia da viagem em Km?`))
passagem = 0

if(distancia<=200){
  passagem = distancia*0.5
  document.write(`A distancia da sua viagem é de ${distancia}Km.<br> O valor final da sua viagem é de R$${passagem.toFixed(2)}.`)
}else{
  passagem = distancia*0.45
  document.write(`A distancia da sua viagem é de ${distancia}Km.<br> O valor final da sua viagem é de R$${passagem.toFixed(2)}.`)
}


document.write(`<p>5. Faça um programa que leia um ano qualquer e mostre se ele é Bissexto.</p>`)

ano = parseInt(prompt(`Digite o ano:`))
if(ano%4==0){
  document.write(`O ano ${ano} é bissexto.`)
}else{
  document.write(`O ano ${ano} não é bissexto.`)
}



document.write(`<p>6. Faça um programa que leia 3 números e mostre qual é o maior e qual é o menor.</p>`)
n1 = +(prompt(`Digite o primeiro número:`))
n2 = +(prompt(`Digite o segundo número:`))
n3 = +(prompt(`Digite o terceiro número:`))

document.write(`Os numeros digitados foram ${n1}, ${n2} e ${n3}.<br>`)
document.write(`<br>O maior valor  é ${Math.max(n1, n2, n3)} e o menor valor é ${Math.min(n1, n2, n3)}.`)

*/