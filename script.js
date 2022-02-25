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

let sumFloat = 0;
const msg = document.createElement('h1');

for(i=1; i<11; i++){
    let inputNumber = parseFloat(prompt(`inserisci numero ${i} di 10: `));

    if(isNaN(inputNumber)){
        do{
            inputNumber = parseFloat(prompt(`inserisci un numero valido ${i} di 10: `));
        } while(isNaN(inputNumber));
    }

    console.log(inputNumber);
    sumFloat += inputNumber;
}

msg.innerHTML = sumFloat;

document.body.append(msg);
