// ===============================
// CAPTURA DE DATOS CON PROMPT()
// ===============================

let nombre = prompt("Ingrese su nombre completo:");
let email = prompt("Ingrese su correo electrónico:");
let password = prompt("Ingrese su contraseña (mínimo 8 caracteres):");


// ===============================
// VALIDACIONES
// ===============================

if (nombre === null || nombre.trim() === "") {
    alert("❌ Error: El campo 'nombre' no puede estar vacío.");
    console.error("❌ Nombre vacío");
}

else if (email === null || email.trim() === "") {
    alert("❌ Error: El campo 'email' no puede estar vacío.");
    console.error("❌ Email vacío");
}

else if (password === null || password.trim() === "") {
    alert("❌ Error: El campo 'contraseña' no puede estar vacío.");
    console.error("❌ Contraseña vacía");
}

else if (password.length < 8) {
    alert("❌ Error: La contraseña debe tener al menos 8 caracteres.");
    console.error("❌ Contraseña demasiado corta (menos de 8 caracteres)");
}

else {
    // SI TODO ES VÁLIDO
    alert("✅ Registro exitoso. ¡Bienvenido, " + nombre + "!");
    console.log("✔ Registro exitoso. Usuario: " + nombre);
}
