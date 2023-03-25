// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

let inputBtn = document.getElementById("input-btn");
let textInput = document.getElementById("text-input");
let paragraphMeter = document.getElementById("paragraph-meter");
let paragraphLiters = document.getElementById("paragraph-liters");
let paragraphKg = document.getElementById("paragraph-kilogram");


inputBtn.addEventListener("click", function() {
    meter();
    liters();
    kilogram();
})


function meter() {
    paragraphMeter.textContent = textInput.value + " meters = " + textInput.value * 3.281 + " feet | " + textInput.value + " feet = " + textInput.value / 3.281 + " meters";
}

function liters() {
    paragraphLiters.textContent = textInput.value + " liters = " + textInput.value * 0.264 + " gallons | " + textInput.value + " gallons = " + textInput.value / 0.264 + " liters";
}

function kilogram() {
    paragraphKg.textContent = textInput.value + " kilos = " + textInput.value * 2.204 + " pounds | " + textInput.value + " pounds = " + textInput.value / 2.204 + " kilos";
}






