// Validar nombre (solo texto, sin caracteres especiales ni números)
const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

// Validar edad (solo números)
const regexEdad = /^[0-9]+$/;

// Validar email
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validar contraseña (debe tener al menos 8 caracteres, una letra minúscula, una letra mayúscula, un número y un carácter especial)
const regexContrasena = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

// Validar teléfono (formato típico de números de teléfono)
const regexTelefono = /^\d{10}$/;

// Validar código postal (formato típico de códigos postales)
const regexCodigoPostal = /^\d{5}$/;

// Validar URL (formato típico de URLs)
const regexURL = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

// Validar tarjeta de crédito (formato típico de números de tarjeta de crédito)
const regexTarjetaCredito = /^\d{16}$/;

// Validar fecha (formato típico de fechas)
const regexFecha = /^\d{4}-\d{2}-\d{2}$/;

// Puedes usar estas expresiones regulares en tus funciones de validación de formularios
