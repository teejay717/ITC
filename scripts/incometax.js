const button = document.getElementById("compute-tax-btn");
const input = document.getElementById("inputValue");


button.addEventListener("click", () => {
    document.getElementById("result").innerHTML = `Income Tax: <b>0</b>`;
    input.value = '';
});
input.addEventListener("input", computeTax);

function computeTax() {
    const inputValue = document.getElementById("inputValue").value
    const num = parseFloat(inputValue);
    let result;

    if (inputValue <= 0 || !inputValue) {
        document.getElementById("result").innerHTML = `<b>Invalid Input!</b> Please Try Again`;
    } 
    else if (inputValue > 0 && inputValue < 250000) {
        document.getElementById("result").innerHTML = `Income Tax: <b>0</b>`;
    }
    else if (inputValue >= 250000 && inputValue < 400000) {
        result = ((num - 250000) * .2).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        document.getElementById("result").innerHTML = `Income Tax: <b>${result}</b>`;
    }
    else if (inputValue >= 400000 && inputValue < 800000) {
        result = (((num - 400000) * .25) + 30000).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        document.getElementById("result").innerHTML = `Income Tax: <b>${result}</b>`;
    }
    else if (inputValue >= 800000 && inputValue < 2000000) {
        result = (((num - 800000) * .3) + 130000).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        document.getElementById("result").innerHTML = `Income Tax: <b>${result}</b>`;
    }
    else if (inputValue >= 2000000 && inputValue < 8000000) {
        result = (((num - 2000000) * .32) + 490000).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        document.getElementById("result").innerHTML = `Income Tax: <b>${result}</b>`;
    }
    else if (inputValue >= 8000000) {
        result = (((num - 8000000) * .35) + 2410000).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        document.getElementById("result").innerHTML = `Income Tax: <b>${result}</b>`;
    }
}

