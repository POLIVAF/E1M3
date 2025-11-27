document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnPrompt");
  const msgError = document.getElementById("msgError");
  const msgExito = document.getElementById("msgExito");

  btn.addEventListener("click", function () {
    // Limpiar mensajes visuales
    msgError.textContent = "";
    msgError.style.display = "none";
    msgExito.textContent = "";
    msgExito.style.display = "none";

    // ===============================
    // REGEX
    // ===============================
    const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\[\]{};':"\\|,.<>\/?~-]).{8,20}$/;

    // ===============================
    // NOMBRE (con reintentos)
    // ===============================
    let nombre = prompt("Ingrese su nombre completo:");

    while (true) {
      if (nombre === null || nombre.trim() === "") {
        alert("❌ El nombre no puede estar vacío.");
        console.error("Error: Nombre vacío.");
        nombre = prompt("Ingrese su nombre completo:");
      } else if (!nombreRegex.test(nombre.trim())) {
        alert("❌ El nombre solo puede contener letras.");
        console.error("Error: Nombre con formato incorrecto.");
        nombre = prompt("Ingrese un nombre válido (solo letras):");
      } else {
        console.log("✔ Nombre válido:", nombre);
        break;
      }
    }

    // ===============================
    // EMAIL (con reintentos)
    // ===============================
    let email = prompt("Ingrese su correo electrónico:");

    while (true) {
      if (email === null || email.trim() === "") {
        alert("❌ El correo no puede estar vacío.");
        console.error("Error: Email vacío.");
        email = prompt("Ingrese su correo electrónico:");
      } else if (!emailRegex.test(email.trim())) {
        alert(
          "❌ Formato de correo inválido. Ejemplo correcto: usuario@gmail.com"
        );
        console.error("Error: Email con formato incorrecto.");
        email = prompt("Ingrese un email válido:");
      } else {
        console.log("✔ Email válido:", email);
        break;
      }
    }

    // ===============================
    // PASSWORD (con reintentos)
    // ===============================
    let password = prompt("Ingrese su contraseña (8–20 caracteres):");

    while (true) {
      if (password === null || password.trim() === "") {
        alert("❌ La contraseña no puede estar vacía.");
        console.error("Error: Contraseña vacía.");
        password = prompt("Ingrese su contraseña:");
      } else if (!passwordRegex.test(password)) {
        alert(
          "❌ Contraseña insegura: debe incluir MAYÚSCULA, número y símbolo."
        );
        console.error("Error: Contraseña insegura.");
        password = prompt("Ingrese una contraseña válida (8–20 caracteres):");
      } else {
        console.log("✅ Contraseña válida");
        break;
      }
    }
    // ===============================
    // SI TODO ES VÁLIDO
    // ===============================
    alert("✅ Registro exitoso. ¡Bienvenido, " + nombre + "!");
    msgExito.textContent = "✅ Registro exitoso. Bienvenido, " + nombre + "!";
    msgExito.style.display = "block";

    console.log("✅ REGISTRO EXITOSO");
    console.log("Usuario:", nombre);
    console.log("Email:", email);

    // Ocultar mensaje a los 4 segundos (4000 ms)
    setTimeout(() => {
      msgExito.style.display = "none";
    }, 4000);
  });
});
