// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà:
// nome,
// punti fatti,
// falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
// Svilupparlo in ES6.


const footballTeams = [
    {
        nome: 'Juve',
        punti_subiti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Inter',
        punti_subiti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Milan',
        punti_subiti: 0,
        falli_subiti: 0
    }
];

const randomNum = (min,max)=> 
Math.floor(Math.random() *(max - min + 1) + min);


for ( let x = 0; x < footballTeams.length; x++) {
    footballTeams[x].punti_subiti = randomNum (1,20);
    footballTeams[x].falli_subiti = randomNum (1,50);
};


const newFootballTeams = [];

for (let x=0; x < footballTeams.length; x++) {
    const {nome, falli_subiti} = footballTeams[x];
    newFootballTeams.push({nome, falli_subiti});

    for ( let k in newFootballTeams[x]) {
        console.log(k,newFootballTeams[x][k])
    }
}