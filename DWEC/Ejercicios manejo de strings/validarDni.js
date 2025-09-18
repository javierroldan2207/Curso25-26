function validarDNI(dni) {
  const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  dni = dni.toUpperCase().trim();
  const numero = parseInt(dni.substring(0, 8), 10);
  const letra = dni.length === 9 ? dni.charAt(8) : null;
  if (numero < 0 || numero > 99999999) {
    return false;
  }
  const letraCorrecta = letras[numero % 23];
  if (letra) {
    return letra === letraCorrecta;
  } else {
    return true; 
  }
}
console.log(validarDNI("12345678Z")); 
console.log(validarDNI("12345678A")); 
console.log(validarDNI("12345678"));  
console.log(validarDNI("87654321X"));
