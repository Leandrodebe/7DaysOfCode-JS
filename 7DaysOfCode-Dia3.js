let FrontOrBack = prompt('Você prefere seguir a área de Front-End ou Back-End');

while (FrontOrBack != 'front' && FrontOrBack != 'back' && FrontOrBack != 'Front' && FrontOrBack != 'Back') {

    alert('ERRO! Tente responderc "Front" ou "Back"');
    FrontOrBack = prompt('Você prefere seguir a área de Front-End ou Back-End');

}

if ( FrontOrBack == 'front' || FrontOrBack == 'Front') {

    let perguntaFront = prompt('Você deseja trabalhar com React ou Vue?');

    while (perguntaFront != 'React' && perguntaFront != 'react' && perguntaFront != 'Vue' && perguntaFront != 'vue') {

        alert('ERRO! Tente responder com "React" ou "Vue"');
        perguntaFront = prompt('Você deseja trabalhar com React ou Vue?');

    }

    if(perguntaFront == 'React' || perguntaFront == 'react'){

        let perguntaEF = prompt(`Você deseja se especializar em ${perguntafront}, ou seguir para fullstack?`);
        while (perguntaEF != 'Especializar' && perguntaEF != 'especializar' && perguntaEF != 'Fullstack' && perguntaEF != 'fullstack'){

            alert('ERRO! Tente responder com "especializar" ou "fullstack"');
            perguntaEF = prompt(`Você deseja se especializar em ${perguntafront}, ou seguir para fullstack?`);
        }

    } else {

        let perguntaEF = prompt(`Você deseja se especializar em ${perguntafront}, ou seguir para fullstack?`);
        while (perguntaEF != 'Especializar' && perguntaEF != 'especializar' && perguntaEF != 'Fullstack' && perguntaEF != 'fullstack'){

            alert('ERRO! Tente responder com "especializar" ou "fullstack"');
            perguntaEF = prompt(`Você deseja se especializar em ${perguntafront}, ou seguir para fullstack?`);
        }

    }

} else { 

    let perguntaBack = prompt('Você deseja trabalhar com C# ou Java?');

        while (perguntaBack != 'C#' && perguntaBack != 'c#' && perguntaBack != 'Java' && perguntaBack != 'java'){

            alert('ERRO! Tente responder com "Java" ou "C#"');
            perguntaBack = prompt('Você deseja trabalhar com C# ou Java?');

        }

    if(perguntaBack == 'C#' || perguntaBack == 'c#'){
        let perguntaEF = prompt(`Você deseja se especializar em ${perguntaBack}, ou seguir para fullstack?`); 
        while (perguntaEF != 'Especializar' && perguntaEF != 'especializar' && perguntaEF != 'Fullstack' && perguntaEF != 'fullstack' ) {
            
            alert('ERRO! tente "especializar" ou "fullstack"');
            perguntaEF = prompt(`Você deseja se especializar em ${perguntaBack}, ou seguir para fullstack?`);

        }
    }else {

        let perguntaEF = prompt(`Você deseja se especializar em ${perguntaBack}, ou seguir para fullstack?`); 
        while (perguntaEF != 'Especializar' && perguntaEF != 'especializar' && perguntaEF != 'Fullstack' && perguntaEF != 'fullstack' ) {
            
            alert('ERRO! tente "especializar" ou "fullstack"');
            perguntaEF = prompt(`Você deseja se especializar em ${perguntaBack}, ou seguir para fullstack?`);
            
    }
    }
}

let linguagens =[];

function perguntaFinal (){

    let pergunta = prompt('Você gostaria de aprender mais alguma linguagem? Se sim, digite o nome da linguagem. Se não, digite não');

    if (pergunta == 'não'){

        //Preguiça de colocar informação de linguagem por linguagem

    } else {

        linguagens.push(pergunta);
        pergunta = prompt('Você gostaria de aprender mais alguma linguagem? Se sim, digite o nome da linguagem. Se não, digite não');

    }
    
}