// Константа для курса доллара к евро
const USD_TO_EUR_RATE = 0.976025; // Примерный курс, 1 доллар = 0.85 евро

// Функция для конвертации долларов в евро
function convertUsdToEur() {
    let usdAmount = document.getElementById("usdAmount").value; // Получаем значение из поля ввода
    usdAmount = parseFloat(usdAmount); // Преобразуем введенное значение в число

    if (!isNaN(usdAmount) && usdAmount >= 0) {
        let eurAmount = (usdAmount * USD_TO_EUR_RATE).toFixed(2); // Конвертируем в евро и округляем до двух знаков
        alert(usdAmount + " долларов = " + eurAmount + " евро."); // Выводим результат через alert
    } else {
        alert("Пожалуйста, введите корректное значение суммы в долларах."); // Сообщение об ошибке
    }
}

// Назначаем обработчик события на кнопку
document.getElementById("convertButton").addEventListener("click", convertUsdToEur);