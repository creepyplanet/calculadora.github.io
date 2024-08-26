let displayValue = '';

function appendNumber(num) {
    if (displayValue.length < 50) { // Límite de 10 dígitos
        displayValue += num;
        updateDisplay();
    }
}

function appendOperator(operator) {
    if (displayValue.length < 50 && displayValue !== '' && !isNaN(displayValue[displayValue.length - 1])) {
        displayValue += operator;
        updateDisplay();
    }
}

function appendSymbol(symbol) {
    if (displayValue.length < 50 && displayValue !== '' && !isNaN(displayValue[displayValue.length - 1])) {
        displayValue += symbol;
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(displayValue);
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}
