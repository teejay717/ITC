const button = document.getElementById("compute-tax-btn");


button.addEventListener("click", computeTax);

function computeTax() {
    const inputValue = document.getElementById("inputValue").value

    if (inputValue > 0) {
        document.getElementById("result").innerHTML = `Hello There`;
    }
}

