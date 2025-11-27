const btn = document.getElementById("btnPrompt");
const msgError = document.getElementById("mensajeError");
const msgExito = document.getElementById("mensajeExito");

btn.addEventListener("click", function () {
  // Ocultar mensajes previos
  msgError.style.display = "none";
  msgExito.style.display = "none";

  // ===============================
  // EXPRESIONES REGULARES
  // ===============================
  const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\[\]{};':"\\|,.<>\/?~-]).{8,20}$/;

  // ===============================
  // CAPTURA DE DATOS CON PROMPT()
  // ===============================

  let nombre = prompt("Ingrese su nombre completo:");
  let email = prompt("Ingrese su correo electrónico:");
  let password = prompt("Ingrese su contraseña (mínimo 8 caracteres):");

  // ===============================
  // VALIDACIONES
  // ===============================

  // Validar nombre
  if (nombre === null || nombre.trim() === "") {
    alert("❌ Error: El campo 'nombre' no puede estar vacío.");
    msgError.textContent = "❌ Debe ingresar un nombre.";
    msgError.style.display = "block";
    return;
  } else if (!nombreRegex.test(nombre.trim())) {
    alert("❌ Error: El nombre solo puede contener letras y espacios.");
    msgError.textContent = "❌ Nombre inválido (solo letras).";
    msgError.style.display = "block";
    return;
  }

  // Validar email
  if (email === null || email.trim() === "") {
    alert("❌ Error: El campo 'email' no puede estar vacío.");
    msgError.textContent = "❌ Debe ingresar un email.";
    msgError.style.display = "block";
    return;
  } else if (!emailRegex.test(email.trim())) {
    alert("❌ Error: El email no tiene un formato válido.");
    msgError.textContent = "❌ Email inválido.";
    msgError.style.display = "block";
    return;
  }

  // Validar contraseña
  if (password === null || password.trim() === "") {
    alert("❌ Error: La contraseña no puede estar vacía.");
    msgError.textContent = "❌ Debe ingresar una contraseña.";
    msgError.style.display = "block";
    return;
  } else if (!passwordRegex.test(password)) {
    alert(
      "❌ Error: La contraseña debe tener 8–20 caracteres, 1 mayúscula, 1 número y 1 símbolo."
    );
    msgError.textContent = "❌ Contraseña insegura o incompleta.";
    msgError.style.display = "block";
    return;
  }

  
  alert("✅ Registro exitoso. ¡Bienvenido, " + nombre + "!");
  msgExito.textContent = "✔ Registro exitoso. Bienvenido, " + nombre + "!";
  msgExito.style.display = "block";
  console.log("✔ Registro exitoso. Usuario:", nombre);
});
