/**Realiza los siguientes ejercicios en JS y entrega por medio de un link tu repositorio que contiene los ejercicios resueltos.

User profile
Write a program that prompts a user for their data: username, age, and a list of their favorite movies. 
Store the information and then showcase it in the console. 
Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'. */

    let usuario = {};
    let peliculas = [];

 function addData(nombre,edad,...films){ //...spread es para añadir más de un elemento/string/number en una misma variable
    usuario = {
        nombre,
        edad,
    };
    peliculas=films;
 }

 function pelicula_aleatoria(){
    if(peliculas.length < 1)
    return "No ingresaste ninguna pelicula";
    return peliculas[Math.floor(Math.random()*peliculas.length)]; 
 };

 function mostrar(){  
    return console.log(` ${usuario.nombre} has been added to the party and " ${pelicula_aleatoria()}" is one of my favorite films `);
 }


 /** EJERCICIO 2     Highest number
Write a program that asks for 10 numbers. 
Using logical operators and any other javascript functions/structures 
you've seen before, determine and output the highest of those numbers.*/


function numMayor(...numeros){
   let numero_mayor=0;
   for(let numero of numeros){//for in es para recorrer objetos
      if(numero>numero_mayor){
         numero_mayor=numero;
      }
   }
   return numero_mayor;
}

/**
 * Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

Result example: "Time for bed after 10 seconds".
 */

function cronometroAlarma(segundos){
   setTimeout(console.log,segundos*1_000,`Han pasado: ${segundos} segundos, ya vete a dormir`)
}
//Se usa console.log como variable para hacer un callback de SetTimeOut
//Los argumentos del callback son los spread del SetTimeOut

/**
 * Palindrome
Write a program that prompts for a word or sentence 
(it can be capitalized, have spaces and punctuation). 
Figure out if the sentence/word is a palindrome or not.
 Ignoring punctuation, spaces and capitalized letters.
 */

 function isPalindrome(text) {
   const arr_text = text.toLowerCase().split('').filter(l => l != ' ' && l !=".");
   let arr_text_reverse = [...arr_text];
   arr_text_reverse.reverse();
   for (let i = 0; i < arr_text.length; i++) {
     if (arr_text[i] != arr_text_reverse[i]){
       return false;
     }
   }
   return true;
 }

 /**
  * Factorial
Write a program that prompts for an intenger number n. 
Where  1 <= n. Solve this using recursion.
  */

function factR(num){
   if(num==0){
      return 1;
   }
   return num*factR(num-1) //
}


/**
 * Flat array
Write a program that takes the following nested matrix and flattens it (makes it a 1D array).
 Use any type of algorithm you want like callbacks, recursion, etc...
 */

 function aplanar(...arr) {
   let aplanado = [];
   const flat = (array) => { //Se usa const para evitar que sea modificada por el sistema
     for (let el of array){// for of es para recorrer todos los arreglos
       if (Array.isArray(el)) 
         flat(el);
       else aplanado.push(el);
     }
   }
   flat(arr);
   return aplanado;
 }