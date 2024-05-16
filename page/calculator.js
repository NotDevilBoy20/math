const display = document.getElementById('display');
const buttons = document.querySelectorAll('.calc-button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = this.textContent;

        if (value === 'C') {
            display.value = '';
        } else if (value === '=') {
            try {
                let result = eval(display.value);
                if (isNaN(result)) {
                    display.value = 'NaN';
                } else if (result === Infinity || result === -Infinity) {
                    display.value = 'Infinity';
                } else if (result > 999999999) {
                    display.value = 'NaN';
                } else {
                    display.value = result;
                }
            } catch (e) {
                display.value = 'Error';
            }
        } else {
            if (display.value.length < 9) {
                display.value += value;
            }
        }
    });
});
