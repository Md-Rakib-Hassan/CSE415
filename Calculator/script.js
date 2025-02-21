let currentInput = '';

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = currentInput;
}

function addNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

function addOperator(operator) {
    currentInput += ` ${operator} `;
    document.getElementById('display').value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput.replace(/x/g, '*')).toString();
        document.getElementById('display').value = currentInput;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
