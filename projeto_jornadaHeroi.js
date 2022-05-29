const prompt = require("prompt-sync")();
console.clear()


pontuacao = 0
console.log
prompt(`Você foi convocado para uma missão muito especial. Pressione [ENTER] para continuar...`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
console.clear()
prompt(`a missão é uma viagem ao passado [ENTER]`)
console.clear()
prompt(`e essa missão vai mudar o futuro da humanidade,
estamos dependendo de você [ENTER]`)
console.clear()
prompt(`você  já foi aprovado em outras etapas [ENTER]`)
console.clear()
prompt(`e por essa razão você está nessa parte final das avaliações [ENTER]`)
console.clear()
prompt(`agora para referendar a sua capacidade para essa missão,
Vai ser preciso que responda a 5 perguntas cientificas [ENTER]`)
console.clear()
prompt(`Digite apenas [s] ou [n] para responder [ENTER]`)
console.clear()
nome = prompt(`Digite o seu nome `)



console.clear()
let p1 = prompt(`VY Canis Majoris é a maior estrela conhecida até agora?(s/n) `)
console.clear()

while(p1 != "s" && p1 != "n"){
    console.log("opção invalida")
    p1 = prompt(`VY Canis Majoris é a maior estrela conhecida até agora? `)
}

if (p1 == "s") {
    pontuacao += 1
}
let p2 = prompt(`A distância em km da terra e a lua é de 384.400? `)
console.clear()
while(p1 != "s" && p1 != "n"){
    console.log("opção invalida")
    p2 = prompt(`A distância em km da terra e a lua é de 384.400? `)
}


if (p2 == "s") {
    pontuacao += 1
}
let p3 = prompt(`A viagem no tempo é possível por causa dos filmes (vingadores) e (de volta para o futuro)? `)
console.clear()
while(p1 != "s" && p1 != "n"){
    console.log("opção invalida")
    p3 = prompt(`A viagem no tempo é possível por causa dos filmes (vingadores) e (de volta para o futuro)? `)
}


if (p3 == "s") {
    pontuacao += 1
}
let p4 = prompt(`A terra tem 4,54 mil bilhões de anos? `)
console.clear()
while(p1 != "s" && p1 != "n"){
    console.log("opção invalida")
    p4 = prompt(`A terra tem 4,54 mil bilhões de anos? `)
}


if (p4 == "s") {
    pontuacao += 1
}
let p5 = prompt(`A EBLM J0555-57Ab é a menor estrela conhecida até agora? `)
console.clear()
while(p1 != "s" && p1 != "n"){
    console.log("opção invalida")
    p5 = prompt(`A EBLM J0555-57Ab é a menor estrela conhecida até agora? `)
}


if (p5 == "s") {
    pontuacao += 1
}
if (pontuacao == 5) {
    console.log(`${nome}, Você triunfou de maneira inquestionável e seus feitos serão lembrados por muitas gerações.`)
}
else if (pontuacao == 4) {
    console.log(`${nome}, Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.`)
}
else if (pontuacao == 3) {
    console.log(`${nome}, Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco`)
}
else if (pontuacao == 2) {
    console.log(`${nome}, Você falhou, mas ainda consegue fugir da situação.`)
} 
else if (pontuacao == 0) {
    console.log(`${nome}, Você falhou miseravelmente.`)
} 