// Найти все кнопки
let keypadButtons = document.querySelectorAll('.key');
const monitor = document.querySelector('.display');
const clearButton = document.querySelector('.clear');

// при клике на клавишу
// введённое значение сохраняется в текстовом содержимом на экране
// в самом конце текста
for (let keypadButton of keypadButtons) {
    keypadButton.onclick = function () {
        monitor.append(keypadButton.textContent);
    };
}

clearButton.onclick = function () {
    monitor.textContent = '';
};





