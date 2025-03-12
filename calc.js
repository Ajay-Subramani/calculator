let currentInput = '';
        let firstValue = null;
        let operation = null;

        function clearDisplay() {
            currentInput = '';
            firstValue = null;
            operation = null;
            document.querySelector('input[name="display"]').value = '';
        }

        function deleteLast() {
            currentInput = currentInput.slice(0, -1);
            updateDisplay();
        }

        function appendValue(value) {
            currentInput += value;
            updateDisplay();
        }

        function setOperation(op) {
            if (currentInput !== '') {
                firstValue = currentInput;
                operation = op;
                currentInput = '';
                updateDisplay();
            }
        }

        function updateDisplay() {
            let displayValue = firstValue ? firstValue + ' ' + (operation ? operation + ' ' : '') : '';
            displayValue += currentInput;
            document.querySelector('input[name="display"]').value = displayValue;
        }

        function calculate() {
            if (firstValue !== null && operation && currentInput !== '') {
                let result;
     if (operation === '%') {
                    result = (parseFloat(firstValue) * parseFloat(currentInput)) / 100;
                } else {
                    result = eval(`${firstValue}${operation}${currentInput}`);
                }
                document.querySelector('input[name="display"]').value = result;
                currentInput = '';
                firstValue = null;
                operation = null;
            }
        }