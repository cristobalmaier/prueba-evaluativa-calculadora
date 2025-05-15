let result = document.getElementById('result');

function calculate(value) {
    if (value === 'clear') {
        result.value = '';
    } else if (value === 'calculate') {
        try {
            result.value = eval(result.value);
        } catch (error) {
            result.value = 'Error';
        }
    } else if (value === '%') {
        try {
            result.value = eval(result.value + "/100");
        } catch (error) {
            result.value = 'Error';
        }
    } else if (value === 'Math.sqrt') {
        try {
            result.value = Math.sqrt(eval(result.value));
        } catch (error) {
            result.value = 'Error';
        }
    } else if (value === '**2') {
        try {
            result.value = eval(result.value + "**2");
        } catch (error) {
            result.value = 'Error';
        }
    } else if (value === 'Math.sin') {
        try {
            result.value = Math.sin(eval(result.value));
        } catch (error) {
            result.value = 'Error';
        }
    } else if (value === 'Math.cos') {
        try {
            result.value = Math.cos(eval(result.value));
        } catch (error) {
            result.value = 'Error';
        }
    } else if (value === 'Math.tan') {
        try {
            result.value = Math.tan(eval(result.value));
        } catch (error) {
            result.value = 'Error';
        }
    } else if (value === 'ln') {
        try {
            result.value = Math.log(eval(result.value)); // logaritmo natural
        } catch (error) {
            result.value = 'Error';
        }
    } else {
        result.value += value;
    }
}
