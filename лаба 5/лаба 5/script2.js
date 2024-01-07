var isBold = false;
var isUnderline = false;
var isItalic = false;
var isUppercase = false;
var textColor = "black";

function updateFormattedText() {
    var inputText = document.getElementById("inputText");
    var formattedText = document.getElementById("formattedText");

    var formattedHtml = "";

    if (isBold) {
        formattedHtml += '<b>';
    }

    if (isItalic) {
        formattedHtml += '<i>';
    }

    if (isUnderline) {
        formattedHtml += '<u>';
    }

    formattedHtml += '<span style="color: ' + textColor + ';">';

    if (isUppercase) {
        formattedHtml += inputText.value.toUpperCase();
    } else {
        formattedHtml += inputText.value;
    }

    formattedHtml += '</span>';

    if (isUnderline) {
        formattedHtml += '</u>';
    }

    if (isItalic) {
        formattedHtml += '</i>';
    }

    if (isBold) {
        formattedHtml += '</b>';
    }

    formattedText.innerHTML = formattedHtml;
}

function toggleBold() {
    isBold = !isBold;
    updateFormattedText();
}

function toggleUnderline() {
    isUnderline = !isUnderline;
    updateFormattedText();
}

function toggleItalic() {
    isItalic = !isItalic;
    updateFormattedText();
}

function toggleUppercase() {
    isUppercase = !isUppercase;
    updateFormattedText();
}

function changeColor() {
    var color = prompt("Введіть колір (наприклад, red):");
    if (color) {
        textColor = color;
        updateFormattedText();
    }
}

