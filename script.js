/*
Snack 1.1
L'utente inserisce due numeri in successione, con due prompt.
il software stampa il maggiore.
 */

// const num1 = parseInt(prompt('numero 1:'));
// const num2 = parseInt(prompt('numero 2:'));

// if (num1 > num2){
//    alert(num1);
// } else if (num1 < num2) {
//    alert(num2);
// }
// else{
//     alert('sono uguali');
// }




/*
    Snack 1.2
*/

// const word1 = prompt('parola 1:');
// const word2 = prompt('parola 2:');

// const result = document.createElement('h1');

// word1.length < word2.length || word1.length == word2.length ? first() : last();


// function first(){
//     if(word1.length == word2.length){
//         result.innerHTML = `erano uguali: ${word1} ${word2}`;
//     }else{
//         result.innerHTML = `${word1} ${word2}`;
//     }
//     document.body.append(result);
// }

// function last(){
//     result.innerHTML = `${word2} ${word1}`;
//     document.body.append(result);
// }






/*
    Snack 1.3
*/

// let sumFloat = 0;
// const msg = document.createElement('h1');

// for(i=1; i<11; i++){
//     let inputNumber = parseFloat(prompt(`inserisci numero ${i} di 10: `));

//     if(isNaN(inputNumber)){
//         do{
//             inputNumber = parseFloat(prompt(`inserisci un numero valido ${i} di 10: `));
//         } while(isNaN(inputNumber));
//     }

//     console.log(inputNumber);
//     sumFloat += inputNumber;
// }

// msg.innerHTML = sumFloat;

// document.body.append(msg);


/*
    Snack 1.4
*/

// const msg = document.createElement('h1');

// const partecipants = ['Luca Andaloro', 'Gianmarco Gianmarchi', 'Francesco Franceschi', 'Valentina Valente', 'Giorgio Giorgi', 'Maria Mari'];
// let invited = false;

// const person = prompt('Come ti chiami?');

// for (let i = 0; i < partecipants.length; i++){
//     if (person.toLowerCase().trim() == partecipants[i].toLowerCase().trim()){
//         invited = true;
//     }
// }

// invited ? success() : goAway();


// function success(){
//     msg.innerHTML = 'Entri pure';

//     document.body.append(msg);
// }

// function goAway(){
//     msg.innerHTML = 'VIA DA QUI!';

//     document.body.append(msg);
// }




/*
    Snack 1.5
*/

// const msg = document.createElement('h1');
// const oddNumbers = [];


// for(i = 1; i < 7; i++){
//     let inputNumber = parseFloat(prompt(`inserisci numero ${i} di 6: `));

//     if(isNaN(inputNumber)){
//         do{
//             inputNumber = parseFloat(prompt(`inserisci un numero valido ${i} di 6: `));
//         } while(isNaN(inputNumber));
//     }

//     if(inputNumber % 2){
//         oddNumbers.push(inputNumber);
//     }
// }

// for(let i = 0; i < oddNumbers.length; i++){
//     msg.innerHTML += `${oddNumbers[i]} `;
// }

// document.body.append(msg);


/*
    Snack 1.6
*/

const msg = document.createElement('h1');
let sum = 0;

let inputNumber = prompt(`inserisci numero di 4 cifre: `);

while(isNaN(parseInt(inputNumber)) || [...inputNumber].length !=4 || parseInt(inputNumber) < 1000){      //controllo che la conversione in number vada a buon fine, che il numero abbia 4 cifre e che sia almeno 1000(numero di 4 cifre più piccolo) per evitare errori
    inputNumber = prompt(`inserisci un numero valido: `);
}
       
let scorporate = [...inputNumber];

for (let i = 0; i < scorporate.length; i++){
    sum += parseInt(scorporate[i]);
}

msg.innerHTML = sum;
document.body.append(msg);

