var selectedVolume = document.getElementById("InputVolume");

var volumeOptions = [
    "0.9", "1.0", "1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8", "1.9",
    "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.7", "3.0"
  ];

  for (var i = 0; i < volumeOptions.length; i++) {
    var option = document.createElement("option");
    option.text = volumeOptions[i];
    selectElement.add(option);
  }


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".row.g-3");
    const table = document.getElementById("carTable");
    const rowIndex = table.rows.length;

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Заборона стандартної події відправки форми

        // Отримайте значення з полів форми
        const brand = document.getElementById("inputBrand").value;
        const model = document.getElementById("inputModel").value;
        const colour = document.getElementById("inputColour").value;
        const carSalon = document.getElementById("inputCarSalon").value;
        const year = document.getElementById("inputYear").value;
        const volume = document.getElementById("inputVolume").value;
        const transmition = document.getElementById("inputTransmition").value;

        // Створіть новий рядок для таблиці
        const newRow = table.insertRow(rowIndex);

        // Створіть нові комірки для рядка
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
        const cell6 = newRow.insertCell(5);
        const cell7 = newRow.insertCell(6);
        const cell8 = newRow.insertCell(7);

        // Додайте дані з форми до комірок
        cell1.innerHTML = rowIndex; // Номер рядка
        cell2.innerHTML = brand;
        cell3.innerHTML = model;
        cell4.innerHTML = colour;
        cell5.innerHTML = carSalon;
        cell6.innerHTML = year;
        cell7.innerHTML = volume;
        cell8.innerHTML = transmition;

        // Очистіть поля форми
        form.reset();
    });
});

