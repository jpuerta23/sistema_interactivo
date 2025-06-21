document.addEventListener('DOMContentLoaded', function () {
    const btnAcceder = document.querySelector('.btn-submit');
    const inputName = document.getElementById('name');
    const inputAge = document.getElementById('age');
    const errorName = document.getElementById('error-name');
    const errorAge = document.getElementById('error-age');
    const correct = document.getElementById('correct')

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




           // Mostrar mensaje si todo es válido
            if (isValid) {
            if (Number(ageValue) >= 18) {
                correct.textContent = `¡Bienvenido/a, ${nameValue}! Tienes ${ageValue} años, eres mayor de edad ¡Sigue Desarrollando!`;
            } else {
                correct.textContent = `Hola, ${nameValue}. Tienes ${ageValue} años, eres menor de edad ¡Sigue aprendiendo y disfrutando del código!.`;
            }
        }

        document.getElementById("name").value = "";
        document.getElementById("age").value = "";
    });
});

