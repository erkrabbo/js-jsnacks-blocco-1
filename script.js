const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn10 = document.getElementById("btn10");
const btn11 = document.getElementById("btn11");
const btn12 = document.getElementById("btn12");
const btn13 = document.getElementById("btn13");


btn1.addEventListener('click', snack1_1);
btn2.addEventListener('click', snack1_2);
btn3.addEventListener('click', snack1_3);
btn4.addEventListener('click', snack1_4);
btn5.addEventListener('click', snack1_5);
btn6.addEventListener('click', snack1_6);
btn7.addEventListener('click', snack1_9Static);
btn8.addEventListener('click', snack1_9Range);
btn9.addEventListener('click', snack1_9Input);
btn10.addEventListener('click', snack2_1For);
btn11.addEventListener('click', snack2_1While);
btn12.addEventListener('click', snack2_2);
btn13.addEventListener('click', snack2_3);


const result = document.createElement('h1');
document.body.prepend(result);




/*
Snack 1.1
L'utente inserisce due numeri in successione, con due prompt.
il software stampa il maggiore.
 */
function snack1_1(){
    const num1 = parseInt(prompt('numero 1:'));
    const num2 = parseInt(prompt('numero 2:'));

    if (num1 > num2){
    alert(num1);
    } else if (num1 < num2) {
    alert(num2);
    }
    else{
        alert('sono uguali');
    }
}


/*
    Snack 1.2
*/

function snack1_2(){
    const word1 = prompt('parola 1:');
    const word2 = prompt('parola 2:');

    word1.length < word2.length || word1.length == word2.length ? first() : last();


    function first(){
        if(word1.length == word2.length){
            result.innerHTML = `erano uguali: ${word1} ${word2}`;
        }else{
            result.innerHTML = `${word1} ${word2}`;
        }
        
    }

    function last(){
        result.innerHTML = `${word2} ${word1}`;
        
    }
}

/*
    Snack 1.3
*/

function snack1_3(){
    let sumFloat = 0;

    for(i=1; i<11; i++){
        let inputNumber = parseFloat(prompt(`inserisci numero ${i} di 10: `));

        if(isNaN(inputNumber)){
            do{
                inputNumber = parseFloat(prompt(`inserisci un numero valido ${i} di 10: `));
            } while(isNaN(inputNumber));
        }
        sumFloat += inputNumber;
    }

    result.innerHTML = sumFloat;

    
}

/*
    Snack 1.4
*/

function snack1_4(){
    const partecipants = ['Luca Andaloro', 'Gianmarco Gianmarchi', 'Francesco Franceschi', 'Valentina Valente', 'Giorgio Giorgi', 'Maria Mari'];
    let invited = false;

    const person = prompt('Come ti chiami?');

    for (let i = 0; i < partecipants.length; i++){
        if (person.toLowerCase().trim() == partecipants[i].toLowerCase().trim()){
            invited = true;
        }
    }

    invited ? success() : goAway();


    function success(){
        result.innerHTML = 'Entri pure';

        
    }

    function goAway(){
        result.innerHTML = 'VIA DA QUI!';

        
    }
}

/*
    Snack 1.5
*/
function snack1_5(){
    const oddNumbers = [];
    
    
    for(i = 1; i < 7; i++){
        let inputNumber = parseFloat(prompt(`inserisci numero ${i} di 6: `));
    
        if(isNaN(inputNumber)){
            do{
                inputNumber = parseFloat(prompt(`inserisci un numero valido ${i} di 6: `));
            } while(isNaN(inputNumber));
        }
    
        if(inputNumber % 2){
            oddNumbers.push(inputNumber);
        }
    }
    
    for(let i = 0; i < oddNumbers.length; i++){
        result.innerHTML += `${oddNumbers[i]} `;
    }
    
    
}

/*
    Snack 1.6
*/

function snack1_6(){
    let sum = 0;
    let counter = 0;
    
    let inputNumber = prompt(`inserisci un numero di 4 cifre (verranno contate solo le prime 4 cifre inserite, verrà ignorato qualsiasi carattere che non sia un numero)`);
    
    numbersSum();
    
    
    while (counter < 4){
        inputNumber = prompt(`Devono esserci almeno 4 cifre`);
    
        counter = 0;
        sum = 0;
    
        numbersSum();
    }
    
    result.innerHTML = sum;
    
    
    
    function numbersSum(){
        for (i = 0; i < inputNumber.length && counter < 4; i++){
            let parsedIndex = parseInt(inputNumber[i]);
            if (!isNaN(parsedIndex)){
                counter ++;
                sum += parsedIndex;
            } 
        }
    }
}

/*
    Snack 1.9
*/

function snack1_9Static(){
    let sum=0;
    
    for( let i = 1; i<11; i++){
        sum+=i;
    }
    
    // let i = 1;
    
    // while (i<11){
    //     sum+=i;
    //     i++;
    // }

    result.innerHTML = `somma: ${sum} media: ${sum / 10}`;
    
}

function snack1_9Range(){
    const min = parseInt(prompt('dimmi da quale numero partire:'));
    const max = parseInt(prompt('dimmi fin dove arrivare: '));

    let sum = 0;
    let counter = 0;
    
    for(let i = min; i<=max; i++){
        sum +=i;
        counter++;
    }

    result.innerHTML = `somma: ${sum} media: ${sum / counter}`;
    
}

function snack1_9Input(){
    let goOn = true;
    sum = 0;
    counter = 0;
    
    while (goOn){
        let number = prompt('dammi un numero: ');
    
        if (number.trim().toLowerCase() == 'stop'){
            goOn = false;
        }
        else{
            sum+= parseInt(number);
            counter++;
        }
    }
    
    result.innerHTML = `somma: ${sum} media: ${sum / counter}`;
    
    console.log('somma: ', sum, ' media: ', sum / counter);
}

/*
    Snack 2.1
*/

function snack2_1For(){
    let sum = 0;
    
    for(let i = 0; i < 5; i++){
        let number = parseFloat(prompt(`inserisci numero ${i + 1} di 5: `));
    
        while(isNaN(number)){
            number = parseFloat(prompt(`inserisci un numero valido (${i + 1} di 5): `));
        }
        sum += number;
    }
    
    result.innerHTML = `la somma dei numeri inseriti è ${sum}`;
    
    console.log(`la somma dei numeri inseriti è ${sum}`)
}

// WHILE
function snack2_1While(){
    let sum = 0;
    let counter = 0;
    
    while (counter < 5){
        let number = parseFloat(prompt(`inserisci numero ${counter + 1} di 5: `));
    
        while(isNaN(number)){
            number = parseFloat(prompt(`inserisci un numero valido (${counter + 1} di 5): `));
        }
    
        sum += number;
        counter++;
    }
            
    result.innerHTML = `la somma dei numeri inseriti è ${sum}`;

    console.log(`la somma dei numeri inseriti è ${sum}`)
}

/*
    Snack 2.2
*/

function snack2_2(){
    let number = parseFloat(prompt('inserisci un numero: '));
    
    while (isNaN(number)){
        number = parseFloat(prompt('inserisci un numero valido: '));
    }
    
    !(number % 2) ? result.innerHTML = number : result.innerHTML = number + 1;
}

/*
    Snack 2.3
*/

function snack2_3(){
    const names = ['Luca', 'Giorgio', 'Claudio', 'Fabrizio', 'Anna', 'Adele', 'Valentina'];
    const surnames = ['Andaloro', 'Crepaldi', 'Tammaro', 'Terreno', 'Baisi']
    
    const fakeList = []
    
    let nameIndex = 0;
    let surnameIndex = 0;
    let fakePerson = `${names[nameIndex]} ${surnames[surnameIndex]}`
    
    
    for (let i = 0; i < 3; i++){
        do{
            nameIndex = Math.floor(Math.random() * (names.length));
            surnameIndex = Math.floor(Math.random() * (surnames.length));
    
            fakePerson = `${names[nameIndex]} ${surnames[surnameIndex]}`
        } while(fakeList.includes(fakePerson))
    
        fakeList.push(fakePerson);
    }
    
    result.innerHTML = `${[...fakeList]}`;
}
