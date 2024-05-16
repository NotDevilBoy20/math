    // Calculator functionality
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.calc-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.textContent;

            if (value === 'C') {
                display.value = '';
            } else if (value === '=') {
                try {
                    display.value = eval(display.value);
                } catch (e) {
                    display.value = 'Error';
                }
            } else {
                display.value += value;
            }
        });
    });
});
