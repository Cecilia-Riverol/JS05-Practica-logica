/*Highest number
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.*/

//Recibir todos los inputs y ponerlos en un array.
var numbers = prompt("Escribe 10 números y sepáralos con una coma");
const numArray = numbers.split(',');


//Ordenar con arraySort y regresar el string ordenado.
numArray.sort(function(a, b) {
    return a - b;
  });
 
//Regresar el mâs alto de los números
const last = numArray[numArray.length - 1];
console.log(numArray);
console.log(last);

//Regresar el valor más alto con leyenda
alert(` "${last} " es el número más alto de tu array.`);


