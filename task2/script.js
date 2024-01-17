const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в веб-консоль');
})

const funcAlert = document.querySelector('#funcAlert');

funcAlert.addEventListener('click', () => {
    alert('Используется для вывода результата обработки или любой другой информации на экран');
})

const funcPrompt = document.querySelector('#funcPrompt');

funcPrompt.addEventListener('click', () => {
    alert('Можно использовать для ввода информации. ');
})
