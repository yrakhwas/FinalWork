// Отримання посилань на елементи DOM
const form = document.querySelector(".row.g-3");
const table = document.getElementById("carTable");
const modal = document.getElementById("myModal");
const closeModalBtn = document.getElementById("closeModal");
const editForm = document.getElementById("editForm");
const savedCars = JSON.parse(localStorage.getItem("cars")) || [];
const colorOptions = ["Червоний", "Синій", "Зелений", "Жовтий"];


// Отримуємо посилання на елемент <select> за його ідентифікатором
//const selectElement = document.getElementsById("colourSelect");

// Додавання опцій в <select> на основі масиву
// colorOptions.forEach(function (color) {
//   const optionElement = document.createElement("option");
//   optionElement.text = color;
//   selectElement.appendChild(optionElement);
// });


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

    // Додавання кнопок для редагування та видалення
    const editButton = createEditButton(index);
    const deleteButton = createDeleteButton(index);
    cell9.appendChild(deleteButton);
    cell10.appendChild(editButton);
  });
}

// Функція для створення кнопки редагування
function createEditButton(rowIndex) {
  const editButton = document.createElement("button");
  editButton.innerText = "Редагувати";
  editButton.addEventListener("click", function () {
    openModal(rowIndex);
  });
  return editButton;
}

// Функція для створення кнопки видалення
function createDeleteButton(rowIndex) {
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Видалити";
  deleteButton.addEventListener("click", function () {
    deleteCar(rowIndex);
  });
  return deleteButton;
}

// Функція для редагування автомобіля
function editCar(rowIndex) {
  const carToEdit = savedCars[rowIndex];
  // Заповніть форму редагування з даними автомобіля
  fillEditForm(carToEdit);
}

// Функція для видалення автомобіля
function deleteCar(rowIndex) {
  savedCars.splice(rowIndex, 1);
  // Оновіть збережені дані в localStorage
  localStorage.setItem("cars", JSON.stringify(savedCars));
  // Оновіть таблицю для відображення оновлених даних
  updateTable();
}

function openModal()
{
  modal.style.display = "block";
}

function closeModal()
{
  modal.style.display = "none";
}
// Викликати функцію для відображення збережених даних
updateTable();

// Реагування на подію подачі форми
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Отримайте значення полів форми
  const brand = document.getElementById("inputBrand").value;
  const model = document.getElementById("inputModel").value;
  const colour = document.getElementById("inputColour").value;
  const carSalon = document.getElementById("inputCarSalon").value;
  const year = document.getElementById("inputYear").value;
  const volume = document.getElementById("inputVolume").value;
  const transmition = document.getElementById("inputTransmition").value;

  // Створення об'єкта нового автомобіля
  const newCar = {
    brand: brand,
    model: model,
    colour: colour,
    carSalon: carSalon,
    year: year,
    volume: volume,
    transmition: transmition,
  };
  
closeModalBtn.addEventListener("click", function()
{
  closeModal();
})
  // Додавання нового автомобіля до масиву збережених автомобілів
  savedCars.push(newCar);

  // Збереження оновленого масиву в localStorage
  localStorage.setItem("cars", JSON.stringify(savedCars));

  // Оновлення таблиці для відображення нового автомобіля
  updateTable();

  // Очистка полів форми
  form.reset();
});
