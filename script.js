document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');

    function clearDisplay() {
        display.value = '';
    }

    function clearEntry() {
        display.value = '';
    }

    function backspace() {
        display.value = display.value.slice(0, -1);
    }

    function appendToDisplay(value) {
        display.value += value;
    }

    function calculateResult() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    }

    document.querySelectorAll('.grid button').forEach((button) => {
        button.addEventListener('click', () => {
            const value = button.textContent;
            if (value === '=') {
                calculateResult();
            } else if (value === 'CE') {
                clearEntry();
            } else if (value === '←') {
                backspace();
            } else {
                appendToDisplay(value);
            }
        });
    });

    // Event listener for the "Enter" key
    document.addEventListener('keydown', function (event) {
        const key = event.key;
        const validKeys = /[0-9%\/*\-+=]|Backspace|Delete|Enter/;
        if (key.match(validKeys)) {
            if (key === 'Enter') {
                calculateResult();
            } else if (key === 'Backspace') {
                backspace();
            } else if (key === 'Delete') {
                clearDisplay();
            } else {
                appendToDisplay(key);
            }
        }
    });
});
