const prompt = require("prompt-sync")()
const numAleatorio = Math.floor(Math.random() * 11)

console.log("O computador quer saber se você adivinha o numero que ele está pensando, dica o numero é do 0 a 10")
const resposta = +prompt(`Digite o seu palpite: `)
if (numAleatorio == resposta){ console.log( `Você acertou miseraves`)}
else{
    console.log(`passou bem longe`)
}