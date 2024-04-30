/* User profile
Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.*/


// Necesito variables para recibir la información.
let userName = prompt("Ingresa tu nombre", "Ejemplo: Ián López"); 
let userAge = Number(prompt("¿Cuántos años tienes? Por favor escríbelo en número", "Ejemplo: 25"));
let userMovies = prompt("Ingresa el título de tus películas favoritas, séparalas con una coma");
//Variable para deividr el input en un array
const arrMovies = userMovies.split(',');

//Imprimo resultados de las primeras 3 variables.
console.log(userName);

if (Number.isNaN(userAge)) {
    console.log("Tu edad es incorrecta");
 } else{
    console.log(userAge);
 }


console.log(userMovies);

// Función para escoger al azar una película andon movie.
function randomMovie(arr) {
    console.log(` "${arrMovies[(Math.floor(Math.random() * arrMovies.length))]} " también es una de mis películas favoritas.`);
}
randomMovie();
