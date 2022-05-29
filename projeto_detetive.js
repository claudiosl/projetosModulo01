
const prompt = require("prompt-sync")();
console.clear()

prompt(`aconteceu um crime dentro de um avião
 uma pessoa foi morta. Precione [ENTER] para continuar`);
console.clear();
prompt(`De acordo com o laudo da pericia, 
a vitima foi morta por envenenmento [ENTER]`);
console.clear();
prompt(`Para resolver esse caso foi chamada a Renomada detetive Jane Marple [ENTER]`);
console.clear();
prompt(`Usando uma metodologia infalivel, a detetive consegue dizer quem é foi o assassino(a) [ENTER]`);
console.clear();
prompt(`Responda as perguntas da detetive com [s] ou [n]`);
console.clear();
let nome = prompt(`Qual o seu nome? `);
console.clear();
let p1 = prompt ("Você conhecia a vítima?  ");
console.clear();
let p2 =  prompt ("Você conhecia os hábitos da vítima? " );
console.clear();
let p3 = prompt ("Você conhece a família da vítima? " );
console.clear();
let p4 = prompt ("Você já trabalhou na empresa da vítima? ");
console.clear();
let p5 = prompt ("Você gosta de chá?" );
console.clear();
let sim = 0;

if (p1 == "s"|| p1 == "S"){sim += 1};

if (p2 == "s" || p2 == "S" ){sim += 1};

if (p3 == "s" || p3 == "S" ){sim += 1};

if (p4 == "s" || p4 == "S" ){sim += 1};

if (p5 == "s" || p5 == "S" ){sim += 1};

if (sim >= 4) {
    console.log(`${nome}, você é culpado`);
  } else if (sim == 3) {
    console.log(`${nome}, você é suspeito!`);
  } else {
    console.log(`${nome}, Você é inocente`);
  }

