

let operandA = 0;
let operandB = 0;
let operator = '';
let resultado;



let elementScreen = document.getElementsByClassName("calculator__result")[0];

let elementOperand = document.getElementsByClassName('button--operand');
let elementOperator = document.getElementsByClassName('button--operator');

let elementClear = document.getElementsByClassName('button--clear')[0];
let elementEqual = document.getElementsByClassName('button--equal')[0];




let showInResultado = (x)=> {
    elementScreen.textContent += x;
};

let clearScreen = ()=>{
    elementScreen.textContent = '';
};

let reset = ()=>{
    elementScreen.textContent = '';
    operandA = 0;
    operandB = 0;
    operator = '';

};

let operate = (x)=>{
    operandA = elementScreen.textContent;
    operator = x;
    showInResultado(x);   
};

console.log(operandA);
console.log(operandB);
console.log(operator);

let equal = ()=>{
    operandB = elementScreen.textContent[2];
    resolve();
};

let resolve = ()=>{
    let resp = 0;
    switch (operator) {
        case "+":
            resp = parseInt(operandA) + parseInt(operandA)
            break;

        case "-":
            resp = parseInt(operandA) - parseInt(operandA)
            break;

        case "*":
            resp = parseInt(operandA) * parseInt(operandA)
            break;

        case "/":
            resp = parseInt(operandA) / parseInt(operandA)
            break;



//Reducida:

let totalRewardsUruguayPlayersReduction = players
 .filter( element => element.country === 'Uruguay')
 .map( element => element.goldenBall + element.goldenBoot)
 .reduce( ((acc,element) => acc + element),0);

console.log(totalRewardsUruguayPlayersReduction);







//Ejercicio 2:     }

    
    elementScreen.textContent = resp;
};



for(let i = 0; i<elementOperand.length;i++){
    elementOperand[i].addEventListener('click',function() {showInResultado(elementOperand[i].value)});
}



let forbesListName = forbesList.map(element => element.name);

console.log(forbesListName);






//2) Muestra por consola (true/false) si está Amancio en la lista.

let amancioExist = forbesListName.includes('Amancio');

console.log(amancioExist);






/*3) Muestra por consola un listado con el resultado de dividir su patrimonio.
entre los años que tienen.*/

let patrimonioEntreAños = forbesList.map(element=> element.amount / element.age);

console.log(patrimonioEntreAños);






//4) Muestra por consola la media de edad de los 10 billonarios de la lista forbes.

let totalAgeListForbes = forbesList.reduce((acc, element)=> acc + element.age,0);

let mediaAgeForbesList = totalAgeListForbes/forbesList.length;

console.log(mediaAgeForbesList);






/*5) Muestra por consola la suma de dinero de los millonarios de EEUU que están
relacionados con technología.*/

let eeuuTecnologyForbesList = forbesList.filter(element => element.country === 'EEUU' &&  element.industry === 'Technology');

let amountTotalEeuuForbesList = eeuuTecnologyForbesList.reduce(((acc, element)=> acc + element.amount),0);

console.log(amountTotalEeuuForbesList);



//Reducida:

let amountTotalEeuuTecnologyForbesListReduce = forbesList
 .filter(element => element.country === 'EEUU' &&  element.industry === 'Technology')
 .reduce(((acc, element)=> acc + element.amount),0);

console.log(amountTotalEeuuTecnologyForbesListReduce);






//6) Muestra por consola el millonario más joven que no sea de EEUU.

let noEeuuForbesList = forbesList.filter(element=> element.country !== 'EEUU');

let youngestNoEeuuForbesList = noEeuuForbesList.reduce(((youngest, element)=> {
    return (youngest.age === undefined || youngest.age >= element.age) ? element: youngest;
}),{});

console.log(youngestNoEeuuForbesList);



//Reducida:

let youngestNoEeuuForbesListReduce = forbesList
 .filter(element=> element.country !== 'EEUU')
 .reduce(((youngest, element)=> {
    return (youngest.age === undefined || youngest.age >= element.age) ? element: youngest;
}),{});

console.log(youngestNoEeuuForbesListReduce);






//7) Muestra por consola el millonario más mayor del top 5 de millonarios de EEUU.

let eeuuForbesList = forbesList.filter(element=> element.country === 'EEUU');

let orderByAmountEeuuForbesList = eeuuForbesList.sort((a, b) => b.amount - a.amount);

let top5EeuuRicher = orderByAmountEeuuForbesList.slice(0,5);

let oldestTop5EeuuRicher = top5EeuuRicher.reduce(((oldest, element)=>{
    return (oldest.age === undefined || oldest.age <= element.age) ? element: oldest;
}),{});

console.log(oldestTop5EeuuRicher);


//Reducida:

let orderByAmountEeuuForbesListReduce = forbesList
.filter(element=> element.country === 'EEUU')
.sort((a, b) => b.amount - a.amount);

let oldestTop5EeuuRicherReduce = orderByAmountEeuuForbesListReduce
.slice(0,5)
.reduce(((oldest, element)=>{
    return (oldest.age === undefined || oldest.age <= element.age) ? element: oldest;
}),{});

console.log(oldestTop5EeuuRicherReduce);






/*8) Muestra por consola la media de edad y media de dinero de los millonarios de
Google y Microsoft juntos.*/

let googleMicrosoftForbesList = forbesList.filter(element=> element.company === 'Microsoft'|| element.company === 'Google');

let totalAgeGoogleMicrosoftForbesList = googleMicrosoftForbesList.reduce(((acc,element)=> acc + element.age ),0);
let totalAmountGoogleMicrosoftForbesList = googleMicrosoftForbesList.reduce(((acc,element)=> acc + element.amount ),0);

let mediaAgeGoogleMicrosoftForbesList = totalAgeGoogleMicrosoftForbesList/ googleMicrosoftForbesList.length;
let mediaAmountGoogleMicrosoftForbesList = totalAmountGoogleMicrosoftForbesList/ googleMicrosoftForbesList.length;

console.log(mediaAgeGoogleMicrosoftForbesList + ' es la media de edad', mediaAmountGoogleMicrosoftForbesList +' es la media de riqueza');

for(let i = 0; i<elementOperator.length;i++){
    elementOperator[i].addEventListener('click',function() {operate(elementOperator[i].value)});
}

elementClear.addEventListener('click', clearScreen);

elementEqual.addEventListener('click',function() {equal()})};