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

// const msg = document.createElement('h1');
// let sum = 0;
// let counter = 0;

// let inputNumber = prompt(`inserisci un numero di 4 cifre (verranno contate solo le prime 4 cifre inserite, verrà ignorato qualsiasi carattere che non sia un numero)`);

// numbersSum();


// while (counter < 4){
//     inputNumber = prompt(`Devono esserci almeno 4 cifre`);

//     counter = 0;
//     sum = 0;

//     numbersSum();
// }

// msg.innerHTML = sum;
// document.body.append(msg);


// function numbersSum(){
//     for (i = 0; i < inputNumber.length && counter < 4; i++){
//         let parsedIndex = parseInt(inputNumber[i]);
//         if (!isNaN(parsedIndex)){
//             counter ++;
//             sum += parsedIndex;
//         } 
//     }
// }


/*
    Snack 1.9
*/

// let sum=0;

// for( let i = 1; i<11; i++){
//     sum+=i;
// }

// let i = 1;

// while (i<11){
//     sum+=i;
//     i++;
// }

// const min = parseInt(prompt('dimmi da quale numero partire:'));
// const max = parseInt(prompt('dimmi fin dove arrivare: '));

// for(let i = min; i<=max; i++){
//     sum +=i;
// }

// let goOn = true;
// sum = 0;
// counter = 0;

// while (goOn){
//     let number = prompt('dammi un numero: ');

//     if (number.trim().toLowerCase() == 'stop'){
//         goOn = false;
//     }
//     else{
//         sum+= parseInt(number);
//         counter++;
//     }
// }

// console.log('somma: ', sum, ' media: ', sum / counter);

/*
    Snack 2.1
*/

// let sum = 0;

// for(let i = 0; i < 5; i++){
//     let number = parseFloat(prompt(`inserisci numero ${i + 1} di 5: `));

//     while(isNaN(number)){
//         number = parseFloat(prompt(`inserisci un numero valido (${i + 1} di 5): `));
//     }
//     sum += number;
// }

// console.log(`la somma dei numeri inseriti è ${sum}`)


// WHILE

// let sum = 0;
// let counter = 0;

// while (counter < 5){
//     let number = parseFloat(prompt(`inserisci numero ${counter + 1} di 5: `));

//     while(isNaN(number)){
//         number = parseFloat(prompt(`inserisci un numero valido (${counter + 1} di 5): `));
//     }

//     sum += number;
//     counter++;
// }
        
// console.log(`la somma dei numeri inseriti è ${sum}`)


/*
    Snack 2.2
*/

let number = parseFloat(prompt('inserisci un numero: '));

while (isNaN(number)){
    number = parseFloat(prompt('inserisci un numero valido: '));
}

!(number % 2) ? console.log(number) : console.log(number + 1);
