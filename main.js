



/* Ejercicio 1:

Dado el siguiente array, muestra por consola
la suma de premios de los jugadores de uruguay. */

const players = [
    {name: 'Cristiano Ronaldo', country: 'Portugal', goldenBall: 5 , goldenBoot: 6},
    {name: 'Lionel Messi', country: 'Argentina', goldenBall: 7, goldenBoot: 4},
    {name: 'Luis Suárez', country: 'Uruguay', goldenBall : 0, goldenBoot: 2},
    {name: 'Diego Forlan', country: 'Uruguay', goldenBall :0 , goldenBoot: 2},
    {name: 'Thierry Henry', country: 'Francia', goldenBall : 0, goldenBoot: 2},
]



//Solución:

let uruguayPlayers = players.filter(element => element.country === 'Uruguay');

let rewardsUruguayPlayers = uruguayPlayers.map(element => element.goldenBall + element.goldenBoot);

let totalRewardsUruguayPlayers = rewardsUruguayPlayers.reduce(((acc, element)=> acc + element),0);

console.log(totalRewardsUruguayPlayers);




//Reducida:

let totalRewardsUruguayPlayersReduction = players
 .filter( element => element.country === 'Uruguay')
 .map( element => element.goldenBall + element.goldenBoot)
 .reduce( ((acc,element) => acc + element),0);

console.log(totalRewardsUruguayPlayersReduction);







//Ejercicio 2: 
    
//Dado el siguiente array:


const forbesList = [
    {name: 'Elon Musk', amount: 219, age: 50, country:'EEUU', company:'Tesla', industry: 'Automotive'},
    {name: 'Jeff Bezos', amount: 171, age: 58, country:'EEUU', company:'Amazon', industry: 'Technology'},
    {name: 'Bernard Arnault', amount: 158, age: 73, country:'France', company:'LVMH', industry: 'Fashion'},
    {name: 'Bill Gates', amount: 129, age: 66, country:'EEUU', company:'Microsoft', industry: 'Technology'},
    {name: 'Warren Buffet', amount: 118, age: 91, country:'EEUU', company:'Berkshire', industry: 'Finance'},
    {name: 'Larry Page', amount: 111, age: 49, country:'EEUU', company:'Google', industry: 'Technology'},
    {name: 'Sergey Brin', amount: 171, age: 58, country:'EEUU', company:'Google', industry: 'Technology'},
    {name: 'Larry Ellison', amount: 106, age: 77, country:'EEUU', company:'Software', industry: 'Technology'},
    {name: 'Steve Ballmer', amount: 91, age: 66, country:'EEUU', company:'Microsoft', industry: 'Technology'},
    {name: 'Mukesh Ambani', amount: 90, age: 64, country:'India', company:'Diversified', industry: 'Finance'},
];


//1) Muestra por consola el listado de nombres de los millonarios.

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


