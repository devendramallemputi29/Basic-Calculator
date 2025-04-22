// Add the pressed button's value to the calculator display
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

// Calculate and display the result of the expression
function calculateResult() {
    try {
               let result = eval(document.getElementById("display").value);


        if (!isFinite(result)) throw new Error("Invalid calculation");

        // If all good, show the result
        document.getElementById("display").value = result;
    } catch (error) {
        // If there's any issue (like 1/0 or bad input), show alert and clear display
        alert("Error: Invalid Calculation");
        clearDisplay();
    }
}
