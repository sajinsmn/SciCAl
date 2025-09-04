let display = document.getElementById("display");

// Insert characters into display
function insert(value) {
  display.value += value;
}

// Clear display
function clearDisplay() {
  display.value = "";
}

// Backspace
function backspace() {
  display.value = display.value.slice(0, -1);
}

// Evaluate expression safely
function calculate() {
  try {
    let expression = display.value;

    // Replace division and multiplication symbols
    expression = expression.replace(/÷/g, "/").replace(/×/g, "*");

    let result = eval(expression);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}
