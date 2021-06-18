// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal. 
// Risolvetelo prima in versione ES5, poi commentate la versione in ES5 e fatelo in ES6

// var biciList = [
//     {
//         nome: 'bici1',
//         peso: 20
//     },
//     {
//         nome: 'bici2',
//         peso: 15
//     },
//     {
//         nome: 'bici3',
//         peso: 22
//     },
//     {
//         nome: 'bici4',
//         peso: 12
//     }
// ];


// var thisBici;
// var pesoThisBici = 1000;


// for ( var x = 0; x < biciList.length; x++) {
//     if (biciList[x].peso < pesoThisBici) {
//         thisBici = biciList[x];
//         pesoThisBici = biciList[x].peso
//     }

// }

// console.log(thisBici)

const biciList = [
    {
        nome: 'bici1',
        peso: 20
    },
    {
        nome: 'bici2',
        peso: 15
    },
    {
        nome: 'bici3',
        peso: 22
    },
    {
        nome: 'bici4',
        peso: 12
    }
];

let thisBici;
let pesoThisBici;

for ( let x = 0; x < biciList.length; x++) {

    const {peso} = biciList[x];
    if (typeof pesoThisBici === 'undefined' || peso < pesoThisBici) {
        thisBici = biciList[x];
        pesoThisBici = peso
    }

}

console.log(pesoThisBici);

const {nome, peso} = thisBici;

const outputHtml = document.getElementById("result");


outputHtml.innerHTML = 
`La bici più leggera è la ${nome}, con soli ${peso} kg di peso.`;