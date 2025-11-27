document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnPrompt");
  const msgError = document.getElementById("msgError");
  const msgExito = document.getElementById("msgExito");

  btn.addEventListener("click", function () {
    msgError.textContent = "";
    msgError.style.display = "none";
    msgExito.textContent = "";
    msgExito.style.display = "none";

    const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\[\]{};':"\\|,.<>\/?~-]).{8,20}$/;

    // =========================================================
    // VALIDAR NOMBRE
    // =========================================================
    let nombre = prompt("Ingrese su nombre completo:");
    while (true) {
      if (!nombre || nombre.trim() === "") {
        console.error("❌ Error: Nombre vacío.");
        alert("❌ El nombre no puede estar vacío.");
        nombre = prompt("Ingrese su nombre completo:");
      } 
      else if (!nombreRegex.test(nombre.trim())) {
        console.error("❌ Error: Nombre con formato incorrecto.");
        alert("❌ El nombre solo puede contener letras.");
        nombre = prompt("Ingrese un nombre válido:");
      } 
      else {
        console.log("✔ Nombre válido:", nombre);
        break;
      }
    }

    // =========================================================
    // VALIDAR EMAIL
    // =========================================================
    let email = prompt("Ingrese su correo electrónico:");
    while (true) {
      if (!email || email.trim() === "") {
        console.error("❌ Error: Email vacío.");
        alert("❌ El correo no puede estar vacío.");
        email = prompt("Ingrese su correo electrónico:");
      } 
      else if (!emailRegex.test(email.trim())) {
        console.error("❌ Error: Email con formato incorrecto.");
        alert("❌ Formato de correo inválido ejemplo: elber@gmail.com");
        email = prompt("Ingrese un email válido:");
      } 
      else {
        console.log("✔ Email válido:", email);
        break;
      }
    }

    // =========================================================
    // VALIDAR PASSWORD
    // =========================================================
    let password = prompt("Ingrese su contraseña:");
    while (true) {
      if (!password || password.trim() === "") {
        console.error("❌ Error: Contraseña vacía.");
        alert("❌ La contraseña no puede estar vacía.");
        password = prompt("Ingrese su contraseña:");
      } 
      else if (!passwordRegex.test(password)) {
        console.error("❌ Error: Contraseña insegura.");
        alert("❌ Contraseña insegura. Debe incluir:\n- 1 mayúscula\n- 1 número\n- 1 símbolo\n- Entre 8 y 20 caracteres");
        password = prompt("Ingrese una contraseña válida:");
      } 
      else {
        console.log("✔ Contraseña válida:", password);
        break;
      }
    }

    // =========================================================
    // MENSAje FINAL
    // =========================================================
    alert("✅ Registro exitoso. ¡Bienvenido, " + nombre + "!");

    msgExito.textContent = "✔ Registro exitoso. Bienvenido, " + nombre + "!";
    msgExito.style.display = "block";

    setTimeout(() => {
      msgExito.style.display = "none";
    }, 4000);

    // =========================================================
    // MOSTRAR DATOS FINALES EN CONSOLA
    // =========================================================
    console.log("====== REGISTRO COMPLETO ======");
    console.log("Nombre:", nombre);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("================================");
  });
});
