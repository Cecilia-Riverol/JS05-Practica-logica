/*Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters. */

//Remove punctuation
var sentence1 = prompt("Ingresa el palindromo");

function removePunctuation(text) {
    //Elimina los signos de puntuación, "\s+" nos permite quitar los espacios.
    var punctuation = /[\;:.><"-=,?¿¡!\s+]/g; 
    //Vamos a reemplazar los espacios por comillas en blanco, vamos a poner todo en minúsculas, y lo metemos en una nueva variable.
    var newText = text.replace(punctuation, "").toLowerCase(); 
    return newText;

  }
var result = removePunctuation(sentence1); //Que aplique en nuestro prompt.
console.log(result);


//Función para revisar el palindromo
function isPalindrome(result) {
    let rev = result.split("").reverse().join("");
 
    if (rev == result) {
        alert("Sí es palindromo");
        return true;
    } else
    alert("Nope, no es palindromo");
    return false;
}
console.log(isPalindrome(result));
