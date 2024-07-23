// script.js

// Función para validar correo electrónico
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Función para validar contraseña
function isValidPassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    return passwordRegex.test(password);
}


// Función para mostrar una alerta
function showAlert(containerId, message, type) {
    const alertContainer = document.getElementById(containerId);

    // Crear el elemento de alerta
    const alertElement = document.createElement('div');
    alertElement.className = `alert alert-${type}`;
    alertElement.innerHTML = message;
    
    // Añadir la alerta al contenedor
    alertContainer.appendChild(alertElement);
    
    // Mostrar la alerta
    alertElement.style.display = 'block';
    
    // Ocultar la alerta después de 5 segundos
    setTimeout(() => {
        alertElement.style.display = 'none';
        alertContainer.removeChild(alertElement);
    }, 5000);
}


// Validar formulario de registro
document.getElementById('signup-submit').addEventListener('click', () => {
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;

    let errorMessage = '';
    let errorType = 'danger';

    if (!name) {
        errorMessage += 'El nombre es requerido.<br>';
    }
    if (!email || !isValidEmail(email)) {
        errorMessage += 'Correo electrónico inválido.<br>';
    }
    if (!password || !isValidPassword(password)) {
        errorMessage += 'La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula y un símbolo.<br>';
    }

    if (errorMessage) {
        showAlert('alerts-container', errorMessage, errorType);
    } else {
        // Enrique si gustas aquí puedes agregar lógica para enviar el formulario
        showAlert('alerts-container', 'Registro exitoso', 'success');
    }
});

// Validar formulario de inicio de sesión
document.getElementById('signin-submit').addEventListener('click', () => {
    const email = document.getElementById('signin-email').value.trim();
    const password = document.getElementById('signin-password').value;

    let errorMessage = '';
    let errorType = 'danger';

    if (!email || !isValidEmail(email)) {
        errorMessage += 'Correo electrónico inválido.<br>';
    }
    if (!password) {
        errorMessage += 'La contraseña es requerida.<br>';
    }

    if (errorMessage) {
        showAlert('alerts-container', errorMessage, errorType);
    } else {
        // Enrique si gustas aquí puedes agregar lógica para enviar el formulario
        showAlert('alerts-container', 'Inicio de sesión exitoso', 'success');
    }
});

// Funcionalidad para cambiar entre formularios
const $btnSignIn = document.querySelector('.sign-in-btn'),
    $btnSignUp = document.querySelector('.sign-up-btn'),
    $signUp = document.querySelector('.sign-up'),
    $signIn = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active');
    }
});
