// Найти все кнопки
let keypadButtons = document.querySelectorAll('.key');
const monitor = document.querySelector('.display');
const clearButton = document.querySelector('.clear');


for (let keypadButton of keypadButtons) {
    keypadButton.onclick = function () {
        monitor.append(keypadButton.textContent);
    };
}

clearButton.onclick = function () {
    monitor.textContent = '';
};





