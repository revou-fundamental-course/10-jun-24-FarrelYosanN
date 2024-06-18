document.addEventListener('DOMContentLoaded', function() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const calculationOutput = document.getElementById('calculation');
    const convertButton = document.getElementById('convert');
    const resetButton = document.getElementById('reset');
    const reverseButton = document.getElementById('reverse');

    convertButton.addEventListener('click', () => {
        const celsius = parseFloat(celsiusInput.value);

        if (isNaN(celsius)) {
            alert('Please enter a valid temperature.');
            return;
        }

        const fahrenheit = (celsius * 9/5) + 32;
        fahrenheitInput.value = fahrenheit.toFixed(2);
        calculationOutput.value = `${celsius}°C * (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
    });

    resetButton.addEventListener('click', () => {
        celsiusInput.value = '';
        fahrenheitInput.value = '';
        calculationOutput.value = '';
    });

    reverseButton.addEventListener('click', () => {
        const fahrenheit = parseFloat(fahrenheitInput.value);

        if (isNaN(fahrenheit)) {
            alert('Please enter a valid temperature.');
            return;
        }

        const celsius = (fahrenheit - 32) * 5/9;
        celsiusInput.value = celsius.toFixed(2);
        calculationOutput.value = `${fahrenheit}°F - 32 * (5/9) = ${celsius.toFixed(2)}°C`;
    });
});
