// Функция для вычисления количества файлов на флешке
function calculateFilesOnFlashDrive() {
    let flashDriveSize = document.getElementById("flashDriveSize").value; // Получаем значение из поля ввода
    flashDriveSize = parseFloat(flashDriveSize); // Преобразуем введенное значение в число

    const fileSizeMB = 820; // Размер одного файла в Мб
    const flashDriveSizeMB = flashDriveSize * 1024; // Преобразуем объем флешки в Мб

    if (!isNaN(flashDriveSize) && flashDriveSize > 0) {
        let numberOfFiles = Math.floor(flashDriveSizeMB / fileSizeMB); // Вычисляем количество файлов
        alert("На флешке объемом " + flashDriveSize + " Гб поместится " + numberOfFiles + " файлов размером 820 Мб."); // Выводим результат через alert
    } else {
        alert("Пожалуйста, введите корректное значение объема флешки."); // Сообщение об ошибке
    }
}

// Назначаем обработчик события на кнопку
document.getElementById("calculateButton").addEventListener("click", calculateFilesOnFlashDrive);
