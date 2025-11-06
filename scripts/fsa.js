const button = document.getElementById("calculate-btn");

button.addEventListener("click", calculateFSA);

function calculateFSA() {

    const input = document.getElementById("inputValue").value;

    if (!input) {
        alert("Invalid Input, Try Again!")
    } else {

    let inputValue = parseInt(input);
    let fact = 1;
    let sum = 0;
    let sumAverage = 0;
    let average = 0;
    let originalValue = inputValue;

    while (inputValue > 0) {
        fact *= 1 * inputValue;
        inputValue--;
    }

    inputValue = originalValue; // Reset for summation calculation

    do {
        sum += inputValue;
        inputValue--;
    } while (inputValue > 0);

    inputValue = originalValue;

    for (i = 0; i < originalValue; i++) {
        sumAverage += inputValue;
        inputValue--;
        average = sumAverage / originalValue;
    }

    document.querySelector(".factorial-result").innerHTML = `${fact}`;
    document.querySelector(".summation-result").innerHTML = `${sum}`;
    document.querySelector(".average-result").innerHTML = `${average}`;
}   
}