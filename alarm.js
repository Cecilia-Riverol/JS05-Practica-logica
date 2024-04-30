/*Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

Result example: "Time for bed after 10 seconds".*/

//Recbir el tiempo

function receiveTime() {
const time = document.getElementById("secondCountdown").value;
    function Waking(){
            window.alert(`Ya pasaron ${time} segundos, es momento de continuar`);
        }
        setTimeout(Waking,(time*1000));
}

