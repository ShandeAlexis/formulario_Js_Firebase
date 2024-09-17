document.getElementById('formulario').addEventListener('submit', (event) => {
  event.preventDefault();

  let entradaNombre = document.getElementById('name');
  let errorNombre = document.getElementById('nameError');
  if (entradaNombre.value.trim() === '') {
    errorNombre.textContent = 'Por favor , introduce tu nombre';
    errorNombre.classList.add('error-message');
  } else {
    errorNombre.textContent = '';
    errorNombre.classList.remove('error-message');
  }

  let emailEntrada = document.getElementById('email');
  let emailError = document.getElementById('emailError');
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Patrón de validación básico

  if (!emailPattern.test(emailEntrada.value)) {
    emailError.textContent = 'Por favor , introduce un email valido';
    emailError.classList.add('error-message');
  } else {
    emailError.textContent = '';
    emailError.classList.remove('error-message');
  }

  let contraseñaEntrada = document.getElementById('password');
  let contraseñaError = document.getElementById('passwordError');
  let contraseñaPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/

  if (!contraseñaPattern.test(contraseñaEntrada.value)) {
    contraseñaError.textContent = 'Por favor , introduce mas de 8 caracteres, numeros , mayuscula y minuscula y caracteres especiales.';
    contraseñaError.classList.add('error-message');
  } else {
    contraseñaError.textContent = '';
    contraseñaError.classList.remove('error-message');
  }

  if (
    !errorNombre.textContent &&
    !emailError.textContent &&
    !contraseñaError.textContent
  ) {
    alert('El formulario se envio correctamente!');
    document.getElementById('formulario').reset();
  }
});
