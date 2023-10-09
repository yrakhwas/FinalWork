const savedCars = JSON.parse(localStorage.getItem("cars")) || [];

function createEditButton(rowIndex) {
    const editButton = document.createElement("button");
    editButton.innerText = "Редагувати";
    editButton.addEventListener("click", function () {
        // Викликати функцію для редагування даних та передати індекс рядка
        editCar(rowIndex);
    });
    return editButton;
}

function createDeleteButton(rowIndex) {
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Видалити";
    deleteButton.addEventListener("click", function () {
        // Викликати функцію для видалення даних
        deleteCar(rowIndex); 
        
    });
    return deleteButton;
}
function deleteCar(rowIndex) {
    savedCars.splice(rowIndex, 1);

    // Оновити збережені дані в localStorage
    localStorage.setItem("cars", JSON.stringify(savedCars));

    // Оновити таблицю для відображення оновлених даних
    updateTable();
};

function editCar(savedCars, rowIndex)
{
    const carToEdit = savedCars[rowIndex];
    fillEditForm(carToEdit);
}
function fillEditForm(car) {
    // Отримайте поля форми для редагування
    const brandInput = document.getElementById("inputBrand");
    const modelInput = document.getElementById("inputModel");
    const colourInput = document.getElementById("inputColour");
    const carSalonInput = document.getElementById("inputCarSalon");
    const yearInput = document.getElementById("inputYear");
    const volumeInput = document.getElementById("inputVolume");
    const transmitionInput = document.getElementById("inputTransmition");

    // Заповніть поля форми значеннями з автомобіля
    brandInput.value = car.brand;
    modelInput.value = car.model;
    colourInput.value = car.colour;
    carSalonInput.value = car.carSalon;
    yearInput.value = car.year;
    volumeInput.value = car.volume;
    transmitionInput.value = car.transmition;
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".row.g-3");
    const table = document.getElementById("carTable");
    const rowIndex = table.rows.length;
    //const savedCars = JSON.parse(localStorage.getItem("cars")) || [];
  
    // Функція для оновлення таблиці на основі збережених даних
    function updateTable() {
      table.innerHTML = "";
  
      savedCars.forEach(function (car, index) {
        const newRow = table.insertRow(index);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
        const cell6 = newRow.insertCell(5);
        const cell7 = newRow.insertCell(6);
        const cell8 = newRow.insertCell(7);
        const cell9 = newRow.insertCell(8);
        const cell10 = newRow.insertCell(9);
  
        cell1.innerHTML = index + 1; // Номер рядка
        cell2.innerHTML = car.brand;
        cell3.innerHTML = car.model;
        cell4.innerHTML = car.colour;
        cell5.innerHTML = car.carSalon;
        cell6.innerHTML = car.year;
        cell7.innerHTML = car.volume;
        cell8.innerHTML = car.transmition;
        cell9.appendChild(createDeleteButton(index));
        cell10.appendChild(createEditButton(index));

      });
    }
  
    // Викликати функцію для відображення збережених даних
    updateTable();
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const brand = document.getElementById("inputBrand").value;
      const model = document.getElementById("inputModel").value;
      const colour = document.getElementById("inputColour").value;
      const carSalon = document.getElementById("inputCarSalon").value;
      const year = document.getElementById("inputYear").value;
      const volume = document.getElementById("inputVolume").value;
      const transmition = document.getElementById("inputTransmition").value;
  
      // Створити об'єкт для нової машини
      const newCar = {
        brand: brand,
        model: model,
        colour: colour,
        carSalon: carSalon,
        year: year,
        volume: volume,
        transmition: transmition
      };
  
      // Додати нову машину до масиву збережених машин
      savedCars.push(newCar);
  
      // Зберегти оновлений масив у localStorage
      localStorage.setItem("cars", JSON.stringify(savedCars));
  
      // Оновити таблицю для відображення нової машини
      updateTable();
  
      // Очистити поля форми
      form.reset();
    });
  }); 