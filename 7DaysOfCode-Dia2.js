let nome = prompt('Qual seu nome?');
let idade = prompt('Quantos anos você tem');
let linguagem = prompt('Qual linguagem de programação você está estudando?');
let tempoDeEstudos = prompt('A quanto tempo você estuda essa linguagem? (digite o tempo em meses)');

if (tempoDeEstudos > 12){
    alert('Você já tem experiência, que tal aprender um framework?');
} else if (tempoDeEstudos > 6){
    alert('Você já tem uma boa base, bora avançar!');
}else {
    alert('Você está só começando, continue firme!');
}

if (idade )
alert(` Que legal ${nome}, você já é um programador ${linguagem} com apenas ${idade}!
 Continue nesse caminho!`);

let gostar = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);

while (gostar != 1 && gostar != 2 ) {


    gostar = prompt('Resposta inserida incoerente! Tente digitar 1 para SIM ou 2 para NÃO.');
    
}

perguntar(gostar);

function perguntar(num) {
    if (num == 1) {
        alert('Muito bom! Continue estudando e você terá muito sucesso.');
    } else if (num == 2){
        alert('Ahh que pena... Já tentou aprender outras linguagens?');  
    } 
}