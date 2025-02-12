function esPalindromo(texto) {
    // Eliminar espacios y caracteres especiales, y convertir a minúsculas
    let textoLimpio = texto.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    // Comparar el texto limpio con su versión invertida
    let textoInvertido = textoLimpio.split('').reverse().join('');
    
    return textoLimpio === textoInvertido;
}

function verificarPalindromo() {
    let entrada = document.getElementById("entrada").value;
    let resultado = esPalindromo(entrada) ? "Es un palíndromo" : "No es un palíndromo";
    document.getElementById("resultado").innerText = resultado;
}