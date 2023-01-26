/* 
1. Understand the problem
        Er moet backendcode geschreven worden voor het spel.


2. plan
    a. user interface?
            Komt later.

    b. input?
            De input moet van de user komen. dit kan in het in het
            begin met een alert maar hier moet later een mooie UI voor
            komen. 

    c. desired output?
            de backend code voor het spel. de user heeft 3 keuzes 
            rock, paper en scissors. deze keuze moet vergeleken worden
            met de keuze van de pc. zo wordt er bepaald wie deze ronde
            heeft gewonnen. er komen 3 rondes? best of 3?

    d. necessary steps to get output?
            1. mannier voor user om input te geven.
            2. mannier voor pc om optie te kiezen. 
            3. mannier om de opties te vergelijken en winnen voor ronde kiezen
            4. mannier om user te laten zien wie de ronde gewonnen heeft
            5. mannier om rondes bij te houden. en de winnaar uit 3 te kiezen
            6. mannier om winnaar te laten zien. 
            7. mannier om spel opnieuw te spelen.
3. psudocode


button voor het starten van een game
bericht ronde 1
get user imput en sla op in variable
*functie voor het keuze pc, sla op in variable
functie voor het vergelijken van keuze user en keuze pc
bepaal winnaar
winnaar krijg punt bij score 
er wordt punt opgeteld bij aantal rondes. 
bepaal wie meeste punten en sla op in variable
if (meeste punten < 5) {nieuwe ronden}
esle bericht winnaar, en geef optie voor nieuw spel. 

*/

//get user input 

function playRound(playerSelection, computerSelection) {
        let result;
        if (playerSelection === 'rock' && computerSelection === 'rock') {
             resul   'Its a tie! You both picked rock, seems like you\'re both rock-solid.'}
        if else (playerSelection === 'rock' && computerSelection === 'paper'):
                        return 'You lose! A rock ain\'t always a hard place, sometimes paper can cover it!';
        if else (playerSelection === 'rock' && computerSelection === 'scissors'):
                        return 'You win! Rock and roll baby!';
        if else (playerSelection === 'paper' && computerSelection === 'rock'):
                return 'You win! Looks like the computer just got schooled, paper always wins.';
        if else (playerSelection === 'paper' && computerSelection === 'paper'):
                        return 'It\'s a tie! You both picked paper, but let\'s be real, paper is the best choice anyway.';
        if else (playerSelection === 'paper' && computerSelection === 'scissors'):
                        return 'You lose! Looks like paper just met its mortal enemy, scissors always wins!';
        if else (playerSelection === 'scissors' && computerSelection === 'rock'):
                        return 'You lose! But I bet the rock band next door is loving this!';
        if else (playerSelection === 'scissors' && computerSelection === 'paper'):
                        return 'You win! Looks like the computer got cut down to size!';
        else    (playerSelection === 'scissors' && computerSelection === 'scissors'):
                        return 'It\'s a tie! You both picked scissorts, seems like you both have a sharp mind and cutting edge strategy!';
        default:
                        return 'Invalid selection';
}

function playRound(playerSelection, computerSelection) {
        if (playerSelection === 'rock' && computerSelection === 'rock')
         statement1
        else if (playerSelection === 'rock' && computerSelection === 'paper')
        statement2
        else if (playerSelection === 'rock' && computerSelection === 'scissors')
         statement3
        else if (playerSelection === 'paper' && computerSelection === 'rock')
         statement2
        else if (playerSelection === 'paper' && computerSelection === 'paper')
        statement2
        else if (playerSelection === 'paper' && computerSelection === 'scissors')
        statement2
        else if (playerSelection === 'scissors' && computerSelection === 'rock')
        statement2
        else if (playerSelection === 'scissors' && computerSelection === 'paper')
        statement2
        else
         statementN
}



//functie voor het maken van de computer's keuze
let randomChoice = Math.floor((Math.random() * 3));

function getComputerChoice() {
        if (randomChoice === 0) {
                return 'rock';
        } 
        else if(randomChoice === 1) {
                return 'paper';
        }
        else {
                return 'scissors';
        }
}


let playerSelection = 'rock';
playerSelection = playerSelection.toLocaleLowerCase();
let computerSelection = getComputerChoice(randomChoice);