opcao = prompt('Selecione a questão:\n\t1\n\t2\n\t3\n\t4\n\t5\n\t6\n\t7\n\t8\n\t9\n\t10')

    switch (opcao) {
        case '1':
            document.write(`1. Faça um programa que sorteia um número de 0 a 9999 e mostre na tela cada um dos dígitos separadamente. <br>Exemplo: unidade: 4 dezena: 3 centena: 8 milhar`)

            sorteio = Math.random() * 10000
            unidade = sorteio % 10;
            dezena = Math.floor((sorteio / 10) % 10);
            centena = Math.floor((sorteio / 100) % 10);
            milhar = Math.floor(sorteio / 1000);

            document.write(`<p>O número sorteado foi: ${sorteio.toFixed(0)}</p>`)

            document.write(`Unidade: ${unidade.toFixed(0)}| Dezena: ${dezena.toFixed(0)}| Centena: ${centena.toFixed(0)}| Milhar: ${milhar.toFixed(0)}`)

      
            break

        case '2':
            document.write(`<p>2. Escreva um programa que faça o computador "pensar" em um número inteiro entre 0 e 5 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deverá escrever na tela se o usuário venceu ou perdeu.</p>`)

            escolha = parseInt(Math.random() * 6)
            aposta = parseInt(prompt(`De 0 a 5, que número o computador escolheu?`))
            document.write(`O computador escolheu ${escolha}`)
            document.write(`<br>Você escolheu ${aposta}`)

            if (escolha == aposta) {
                alert(`PARABÉNS! Você acertou o número escolhido pelo computador!`)
            } else {
                alert(`Que pena. Você errou. :( `)
            }
            break

        case '3':
            document.write(`<p>3. Escreva um programa que leia a velocidade de um carro. Se ele ultrapassar 80Km/h, mostre uma mensagem dizendo que foi multado.<br>A multa vai custar R$7,00 por cada KM acima do limite.</p>`)

            velMax = 80
            multa = 7

            vel = +(prompt(`Qual a velocidade do carro?`))
            if (vel > 80) {
                multa = multa * (vel - velMax)
                alert(`Acima do limite de velocidadae!`)
                document.write(`Você ultrapassou ${vel - velMax}km do limite de velocidade (80km/h).<br> O valor da multa é R$${multa.toFixed(2)}.`)
            } else {
                document.write(`Dentro do limite de velocidade.`)
            }

            break

        case '4':

            document.write(`<p>4. Desenvolva um programa que pergunte a distância de uma viagem em Km. Calcule o preço da passagem, cobrando R$0,50 por KM para viagens de até 200Km e R$0,45 para viagens mais longas.</p>`)

            distancia = +(prompt(`Qual a distancia da viagem em Km?`))
            passagem = 0

            if (distancia <= 200) {
                passagem = distancia * 0.5
                document.write(`A distancia da sua viagem é de ${distancia}Km.<br> O valor final da sua viagem é de R$${passagem.toFixed(2)}.`)
            } else {
                passagem = distancia * 0.45
                document.write(`A distancia da sua viagem é de ${distancia}Km.<br> O valor final da sua viagem é de R$${passagem.toFixed(2)}.`)
            }
            break

        case '5':
            document.write(`<p>5. Faça um programa que leia um ano qualquer e mostre se ele é Bissexto.</p>`)

            ano = parseInt(prompt(`Digite o ano:`))
            if (ano % 4 == 0) {
                document.write(`O ano ${ano} é bissexto.`)
            } else {
                document.write(`O ano ${ano} não é bissexto.`)
            }
            break

        case '6':
            document.write(`<p>6. Faça um programa que leia 3 números e mostre qual é o maior e qual é o menor.</p>`)
            n1 = +(prompt(`Digite o primeiro número:`))
            n2 = +(prompt(`Digite o segundo número:`))
            n3 = +(prompt(`Digite o terceiro número:`))

            document.write(`Os numeros digitados foram ${n1}, ${n2} e ${n3}.<br>`)
            document.write(`<br>O maior valor  é ${Math.max(n1, n2, n3)} e o menor valor é ${Math.min(n1, n2, n3)}.`)
            break

        case '7':
            document.write(`<p>7. Escreva um programa que pergunte o salário de um funcionário e calcule o valor do seu aumento. Para salários superiores a R$1.250,00, calcule um aumento de 10%. Para os inferiores ou iguais, o número é de 15%.</p>`)

            salario = +(prompt(`Digite o valor do funcionário: `))
            if (salario <= 1250) {
                document.write(`O salário do funcionário é R$${salario}.<br>`)
                salario = salario * 1.15
                document.write(`Com o aumento de 15%, passa a ser R$${salario.toFixed(2)}.`)
            } else {
                document.write(`O salário do funcionário é R$${salario}.<br>`)
                salario = salario * 1.10
                document.write(`Com o aumento de 10%, passa a ser R$${salario.toFixed(2)}.`)
            }
            break

        case '8':
            document.write(`<p>8. Faça um script que peça dois inteiros e armazene-os em duas variáveis. Em seguida, troque o valor das variáveis, invertendo e exibindo o antes e o depois em uma janela de alert.</p>`)

            int1 = parseInt(prompt(`Digite um numero inteiro:`))
            int2 = parseInt(prompt(`Digite outro numero inteiro:`))
            alert(`Os valores digitados foram ${int1} e ${int2}.`)
            troca = int1
            int1 = int2
            int2 = troca
            alert(`A inversão dos valores é ${int1} e ${int2}.`)
            break

        case '9':
            document.write(`<p>9. Faça um script que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.</p>`)

            turno = prompt(`Em qual turno você estuda? M - Matutino, V - Vespertino ou N - Noturno`)
            if ((turno == 'M') || (turno == 'm')) {
                document.write(`Bom dia!`)
            } else if ((turno == 'V') || (turno == 'v')) {
                document.write(`Boa tarde!`)
            } else if ((turno == 'N') || (turno == 'n')) {
                document.write(`Boa noite!`)
            } else {
                alert(`Valor inválido!`)
            }
            break

        case '10':
            document.write(`<p>10. Faça um script que peça os 3 lados de um triângulo. O script deverá informar se os valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.</p>`)

            lado1 = +(prompt(`Digite o primeiro lado:`))
            lado2 = +(prompt(`Digite o segundo lado:`))
            lado3 = +(prompt(`Digite o terceiro lado:`))

            if ((lado1 == lado2) && (lado1 == lado3) && (lado2 == lado3)) {
                document.write(`Os valores informados (${lado1}, ${lado2} e ${lado3}) são iguais. Logo, este é um triangulo equilatero`)
            } else if ((lado1 == lado2) || (lado1 == lado3) || (lado2 == lado3)) {
                document.write(`Os valores informados (${lado1}, ${lado2} e ${lado3}) apenas 2 lados são iguais. Logo, este é um triangulo isóceles`)

            } else {
                document.write(`Os valores informados (${lado1}, ${lado2} e ${lado3}) são diferentes. Logo, este é um triangulo escaleno`)
            }
            break

      default:
        document.write(`Opção inválida.`)

    }
