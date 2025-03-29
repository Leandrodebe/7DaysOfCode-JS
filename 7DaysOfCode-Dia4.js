const numeroSecreto = 7;
alert('Bem-vindo ao jogo do número secreto!!!');
let regras = prompt('Você quer saber as regras ou já sabe jogar? Digite 1 para sim e 2 para não');

if (regras == 1){

    alert('Você pode chutar qualquer número entra 1 e 10;');
    alert('Você terá apenas 3 chances para acertar o número');
    alert('Boa sorte, e divirta-se')

}

alert('Vamo para o jogo');

let chute = parseInt(prompt('Chute um número de 1 a 10'));
let qtdChutes = 0;

while (qtdChutes == 3) {

    if (qtdChutes == 3) {
        alert(`Infelizmente você perdeu, o número secreto era ${numeroSecreto}!`);
        qtdChutes ++;
    } else {
        qtdChutes ++;
        alert('Você errou, tente novamente');
        chute = parseInt(prompt('Chute um número de 1 a 10'));
        
    }

}
