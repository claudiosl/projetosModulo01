const prompt = require("prompt-sync")();


do{
     comprimento = +prompt("Digite o comprimento do terreno: ");
    if (isNaN(comprimento)){
        console.log(`valor indevido \n`);
    };
}
while (isNaN(comprimento))
do{
     largura = +prompt("Digite a largura do terreno: ");
    if(isNaN(largura)){
        console.log(`valor indevido \n`)
    }
}
while (isNaN(largura));
console.log(`O terreno mede ${comprimento * largura}m²`);