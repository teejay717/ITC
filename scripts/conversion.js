
const button = document.getElementById("convert-btn");


button.addEventListener("click", computeConversion);
button.addEventListener("click", computeConversion);
function computeConversion() {
    const inputValue = document.getElementById("inputValue").value;
    const conversionType = document.getElementById("conversion-types").value;   
    let result;

    if (!inputValue) {
        document.getElementById("result").innerHTML = "Invalid Input! Please enter a valid value."
    } else {
        switch (conversionType) {
        case "ctof":
            result = ((inputValue * 1.8) + 32).toFixed(2);
            document.getElementById("result").innerHTML = `${inputValue} Celsius = ${result} Fahrenheit`;
            break;
        case "ftoc":
            result = ((inputValue - 32) / 1.8).toFixed(2);
            document.getElementById("result").innerHTML = `${inputValue} Fahreinheit = ${result} Celsius`;
            break;
        case "mtoft":
            result = ((inputValue * 3.28084).toFixed(2));
            document.getElementById("result").innerHTML = `${inputValue} Meters = ${result} Feet`;
            break;
        case "fttom":
            result = ((inputValue * 0.3048).toFixed(2));
            document.getElementById("result").innerHTML = `${inputValue} Feet = ${result} Meters`;
            break;
        default:
            document.getElementById("resultInput").value = "Invalid conversion type.";
    } 
    }
    
    document.getElementById("inputValue").value = '';
    
}