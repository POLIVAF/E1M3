const form = document.getElementById('registroForm');
const nombreEl = document.getElementById('nombre');
const emailEl = document.getElementById('email');
const telefonoEl = document.getElementById('telefono');
const passwordEl = document.getElementById('password');

const errNombre = document.getElementById('errorNombre');
const errEmail = document.getElementById('errorEmail');
const errTelefono = document.getElementById('errorTelefono');
const errPassword = document.getElementById('errorPassword');

const mensajeExito = document.getElementById('mensajeExito');

form.addEventListener('submit', function(e){
  e.preventDefault(); // evita recarga
  let valido = true;

  // Reset de errores y éxito
  [errNombre, errEmail, errTelefono, errPassword].forEach(el => el.style.display = 'none');
  mensajeExito.style.display = 'none';

  // Expresiones regulares
  const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  const telefonoRegex = /^[0-9()+]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\[\]{};':"\\|,.<>\/?~-]).{8,20}$/;

  // Validaciones por campo

  // Nombre
  if(nombreEl.value.trim() === ""){
    errNombre.textContent = "❌ Debe completar el nombre";
    errNombre.style.display = 'block';
    console.error("❌ Nombre vacío");
    valido = false;
  } else if(!nombreRegex.test(nombreEl.value.trim())){
    errNombre.textContent = "❌ Solo se permiten letras";
    errNombre.style.display = 'block';
    console.error("❌ Nombre inválido");
    valido = false;
  }

  // Email
  if(emailEl.value.trim() === ""){
    errEmail.textContent = "❌ Debe completar el email";
    errEmail.style.display = 'block';
    console.error("❌ Email vacío");
    valido = false;
  } else if(!emailEl.checkValidity()){
    errEmail.textContent = "❌ Email inválido";
    errEmail.style.display = 'block';
    console.error("❌ Email inválido");
    valido = false;
  }

  // Teléfono
  if(telefonoEl.value.trim() === ""){
    errTelefono.textContent = "❌ Debe completar el teléfono";
    errTelefono.style.display = 'block';
    console.error("❌ Teléfono vacío");
    valido = false;
  } else if(!telefonoRegex.test(telefonoEl.value.trim())){
    errTelefono.textContent = "❌ Teléfono inválido";
    errTelefono.style.display = 'block';
    console.error("❌ Teléfono inválido");
    valido = false;
  }

  // Contraseña
  if(passwordEl.value.trim() === ""){
    errPassword.textContent = "❌ Debe completar la contraseña";
    errPassword.style.display = 'block';
    console.error("❌ Contraseña vacía");
    valido = false;
  } else if(!passwordRegex.test(passwordEl.value)){
    errPassword.textContent = "❌ La contraseña debe tener 8–20 caracteres, una mayúscula, un número y un carácter especial";
    errPassword.style.display = 'block';
    console.error("❌ Contraseña inválida");
    valido = false;
  }

  // Si hay errores, cortar
  if(!valido){
    console.warn("Formulario contiene errores, no se envía");
    return;
  }

  // Confirmación antes de registrar
  if(!confirm("¿Deseas registrar estos datos?")){
    console.error("❌ Registro cancelado por el usuario");
    return;
  }

  // Si todo está correcto → registro completo
  console.log("✔ Registro completo");
  mensajeExito.textContent = "✔ Registro completo";
  mensajeExito.style.display = 'block';

  form.reset();
});
