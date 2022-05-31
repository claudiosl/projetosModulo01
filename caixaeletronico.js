const prompt = require("prompt-sync")()
console.log("Digite o valor entre R$ 1,00 e R$ 600,00")
console.log()
let saque = +prompt("Escolha o valor do saque: ")
console.log()
let notas = [100, 50, 10, 5, 1]
let quantidade = []
console.log(`Para o valor de R$${saque},00 são necessários:`)
console.log()
for (let i = 0; i < notas.length; i++) {
    quantidade[i] = Math.floor(saque / notas[i])
    saque = saque - quantidade[i] * notas[i]
    if(quantidade[i] != 0)
    { console.log(`${quantidade[i]} notas de ${notas[i]}`)}
}
console.log()