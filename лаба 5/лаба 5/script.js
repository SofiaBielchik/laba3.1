function performOperations() {
    // Отримання значень з полів введення
    var arrayAInput = document.getElementById("arrayA").value;
    var arrayBInput = document.getElementById("arrayB").value;

  
    var arrayA = parseArray(arrayAInput);
    var arrayB = parseArray(arrayBInput);

    
    var arrayC = calculateArrayC(arrayA, arrayB);

    
    displayArrays("beforeSorting", "Вихідні масиви до сортування:", arrayA, arrayB, arrayC);

    
    swapMaxAndFirst(arrayC);

    
    bubbleSort(arrayC);

    
    displaySortedArray("afterSorting", "Відсортований масив C:", arrayC);
}

function displaySortedArray(elementId, heading, arrayC) {
    // Виведення відсортованого масиву С у HTML-елемент
    var outputElement = document.getElementById(elementId);

    var outputHTML = "<p>" + heading + "</p>";
    outputHTML += "<p>Масив C: " + arrayC.join(', ') + "</p>";

    outputElement.innerHTML = outputHTML;
}
function parseArray(input) {
    // Парсинг рядку в масив чисел
    return input.split(',').map(Number);
}

function calculateArrayC(arrayA, arrayB) {
    // Обчислення масиву C
    var arrayC = [];

    for (var i = 0; i < Math.min(arrayA.length, arrayB.length); i++) {
        if (arrayA[i] !== arrayB[i]) {
            arrayC.push(1 / (arrayA[i] - arrayB[i]));
        } else {
            arrayC.push(1);
        }
    }

    return arrayC;
}

function swapMaxAndFirst(array) {
    // Знаходження індексу максимального елемента
    var maxIndex = array.indexOf(Math.max(...array));

    // Поміняти максимальний елемент і перший
    var temp = array[maxIndex];
    array[maxIndex] = array[0];
    array[0] = temp;
}

function bubbleSort(array) {
    // Сортування методом бульбашки
    var n = array.length;

    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Обмін елементів, якщо вони в неправильному порядку
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

function displayArrays(elementId, heading, arrayA, arrayB, arrayC) {
    // Виведення масивів у HTML-елемент
    var outputElement = document.getElementById(elementId);

    var outputHTML = "<p>" + heading + "</p>";
    outputHTML += "<p>Масив A: " + arrayA.join(', ') + "</p>";
    outputHTML += "<p>Масив B: " + arrayB.join(', ') + "</p>";
    outputHTML += "<p>Масив C: " + arrayC.join(', ') + "</p>";

    outputElement.innerHTML = outputHTML;
}

