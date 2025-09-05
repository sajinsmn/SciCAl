// script.js
const display = document.getElementById('display');

// Appends the clicked button's value to the display
function appendToDisplay(value) {
    display.value += value;
}

// Clears the display
function clearDisplay() {
    display.value = '';
}

// Deletes the last character from the display
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Evaluates the expression in the display
function calculateResult() {
    try {
        // Use eval() to calculate the result. 
        // It's simple but be cautious in real-world applications.
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        // If there's an error in the expression, show "Error"
        display.value = 'Error';
    }
}
