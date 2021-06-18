// Snack 3
// Abbiamo sempre un array di squadre, con:
// nome
// punti fatti
// falli subiti
// Stampare in html (in forma tabellare!!! :allegria::allegria:) i dati relativi alle
// squadre evidenziando in giallo la riga corrispondente alla squadra con più falli subiti.


const outputTable = document.getElementById('table');
let result = '';
let maxFalli = 0;
let teamMaxFalli;
const footballTeams = [
    {
        nome: 'Juve',
        punti: 10,
        falli: 20
    },
    {
        nome: 'Inter',
        punti: 15,
        falli: 25
    },
    {
        nome: 'Milan',
        punti: 10,
        falli: 15
    }
];

//cercare chi ha più falli
for ( let x = 0; x < footballTeams.length; x++){
    const {falli} = footballTeams[x];
    if (falli > maxFalli) {
        maxFalli = falli;
        teamMaxFalli = footballTeams[x]
    }

}

//stampare nell'html
for (let x = 0; x < footballTeams.length; x++) {

    const { nome, punti, falli } = footballTeams[x]
    result += 
        `<ul class="single-team">
        <li>${nome}</li>
        <li>${punti}</li>
        <li>${falli}</li>
        </ul>`;
};

outputTable.innerHTML += result;

// evidenziare chi ha più falli
for ( let x = 0; x < footballTeams.length; x++) {
    if (footballTeams[x] === teamMaxFalli) {
        document.getElementsByClassName('single-team')[x].style.backgroundColor = 'yellow';
    }
}
