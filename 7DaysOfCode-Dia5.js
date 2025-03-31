alert('welcome to your supermarket list');

let fruitsList = [];
let cleaningProducts = [];
let dairyProducts = [];
let sweetsList = [];
let proteinsList = [];
let beveragesList = [];
let basicsFoods = [];

let firstQuestion = prompt('Do you want to add something to the supermarket list? Answer with yes or no')

while(true){
    if ( firstQuestion == 'no') {
        alert('Thanks for acess the supermarket list');
        completeList();
        break;
    } else {
        let food = prompt('Which item do you want to add to your list?')
        let typeList = prompt('Which category does this item fit best? Categories: fruits or vegetables, cleaning products, dairy products, sweets, proteins, beverages, and basic foods.')
        addList(typeList, food);
    }
    firstQuestion = prompt('Do you want to add something to the supermarket list? Answer with yes or no');
}

function addList(type, item) {

    if (type == 'fruits' || type == 'vegetables' || type == 'fruits or vegetables') {
        fruitsList.push(item);
    } else if(type == 'cleaning products' || type =='cleaning') {
        cleaningProducts.push(item)
    } else if(type == 'dairy products' ) {
        dairyProducts.push(item);
    } else if(type == 'sweets') {
        sweetsList.push(item);
    } else if(type == 'proteins') {
        proteinsList.push(item);
    } else if(type == 'beverages') {
        beveragesList.push(item);
    } else{
        basicsFoods.push(item);
    }
}



function completeList (){
    let lists =[fruitsList, cleaningProducts, dairyProducts, sweetsList, beveragesList, basicsFoods];
    let marketList = 'Your supermarket list:'
    for (let j = 0; j < lists.length; j++){
        for(let i = 0; i < lists[j].length; i++){
            if( lists[j].length > 0){
                marketList += ' ' + lists[j][i] +'\n';
            }
        }

    }
    alert(marketList);
}


