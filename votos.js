const prompt = require("prompt-sync")()
const anoNascimento = +prompt("Informe o ano do seu nascimento: ")
const anoAtual = new Date().getFullYear()
const idade = anoAtual - anoNascimento
console.log(`Você tem ${idade} anos`)
if (idade < 16){
    console.log(`com ${idade} anos o voto é NEGADO`)
}
else if (idade => 18 && idade <= 70){
    console.log(`com ${idade} anos o voto é OBRIGATÓRIO`)
}
else{
    console.log(`com ${idade} anos o voto é OPCIONAL`)
}


