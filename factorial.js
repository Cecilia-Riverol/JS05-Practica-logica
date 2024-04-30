/*Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion. */

//Solicitar numero
var x = prompt("Escribe un número, por favor");

//Revisar si el factor es un


// recursive function
function factorial(num) {

    // base case
    // recurse only if num is greater than 0
    if (num >= 1) {
        return num * factorial(num - 1);
    }
    else {
        //alert("No tiene factorial");
        return 1;
    }
}

//let x = 3;

// store result of factorial() in variable
let y = factorial(x);
console.log(`El factorial de ${x} es ${y}`);
alert(`El factorial de ${x} es ${y}`);