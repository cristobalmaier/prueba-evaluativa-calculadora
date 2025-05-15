
let result = document.getElementById('result'); // el id del input donde se muestra el resultado

// Función principal que se ejecuta cuando se presiona un botón
function calculate(value) {

    // Si el botón presionado es "C" (clear), se limpia el contenido del input
    if (value === 'clear') {
        result.value = ''; // se borra el contenido actual del input

    // Si el botón presionado es "=" (calculate), se evalúa la expresión matemática ingresada
    } else if (value === 'calculate') {
        try {
            result.value = eval(result.value); // evalúa la expresión escrita en el input
        } catch (error) {
            result.value = 'Error'; // si hay error en la evaluación muestra "Error"
        }

    // Si se presiona el botón "%", se divide la expresión actual por 100
    } else if (value === '%') {
        try {
            result.value = eval(result.value + "/100"); // divide el valor por 100 para calcular el porcentaje
        } catch (error) {
            result.value = 'Error'; // muestra "Error" si ocurre algún problema
        }

    // Si se presiona "√" , se calcula la raíz cuadrada del valor actual
    } else if (value === 'Math.sqrt') {
        try {
            result.value = Math.sqrt(eval(result.value)); // evalúa el valor actual y le aplica raíz cuadrada
        } catch (error) {
            result.value = 'Error'; // muestra "Error" si hay error de sintaxis o valor inválido
        }

    // Si se presiona "x²", se eleva al cuadrado el número actual
    } else if (value === '**2') {
        try {
            result.value = eval(result.value + "**2"); // eleva al cuadrado el valor actual
        } catch (error) {
            result.value = 'Error'; // muestra "Error" si la expresión no es válida
        }

    // Si se presiona "sin", se calcula el seno del número actual (en radianes)
    } else if (value === 'Math.sin') {
        try {
            result.value = Math.sin(eval(result.value)); // aplica Math.sin() al resultado evaluado
        } catch (error) {
            result.value = 'Error'; // si hay error, muestra "Error"
        }

    // Si se presiona "cos", se calcula el coseno del número actual (en radianes)
    } else if (value === 'Math.cos') {
        try {
            result.value = Math.cos(eval(result.value)); // aplica Math.cos() al resultado evaluado
        } catch (error) {
            result.value = 'Error'; // si hay error, muestra "Error"
        }

    // Si se presiona "tan", se calcula la tangente del número actual 
    } else if (value === 'Math.tan') {
        try {
            result.value = Math.tan(eval(result.value)); // aplica Math.tan() al resultado evaluado
        } catch (error) {
            result.value = 'Error'; // si hay error, muestra "Error"
        }

    // Si se presiona "ln", se calcula el logaritmo natural (base e)
    } else if (value === 'ln') {
        try {
            result.value = Math.log(eval(result.value)); // aplica Math.log() al resultado evaluado
        } catch (error) {
            result.value = 'Error'; // si hay error, muestra "Error"
        }

    // Si no se presionó ninguna de las funciones especiales, se agrega el valor al final del input
    } else {
        result.value += value; // concatena el valor (número u operador) al contenido actual del input
    }
}
