document.addEventListener('DOMContentLoaded', function () {
    const btnAcceder = document.querySelector('.btn-submit');
    const inputName = document.getElementById('name');
    const inputAge = document.getElementById('age');
    const errorName = document.getElementById('error-name');
    const errorAge = document.getElementById('error-age');

    btnAcceder.addEventListener('click', function () {
        const nameValue = inputName.value.trim();
        const ageValue = inputAge.value.trim();
        let isValid = true;

        // Limpiar mensajes anteriores
        errorName.textContent = "";
        errorAge.textContent = "";

        // Validación del nombre
        if (nameValue === "") {
            errorName.textContent = "Por favor, ingresa tu nombre.";
            isValid = false;
        } else if (!isNaN(nameValue)) {
            errorName.textContent = "El nombre no puede ser solo números.";
            isValid = false;
        }

        // Validación de la edad
        if (ageValue === "") {
            errorAge.textContent = "Por favor, ingresa tu edad.";
            isValid = false;
        } else if (isNaN(Number(ageValue)) || Number(ageValue) <= 0) {
            errorAge.textContent = "La edad debe ser un número válido y positivo.";
            isValid = false;
        }

        // Si todo está bien
        if (isValid) {
            document.getElementById('Login-btn').textContent =  `¡Bienvenido/a, ${nameValue}! Edad: ${ageValue} años. `;
        }
    });
});