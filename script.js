// Variable global para almacenar el texto original
let textoOriginal = '';

function encriptar() {
    // Obtener el texto del input
    textoOriginal = document.getElementById("inputText").value;
    
    // Encriptar el texto
    let encriptado = encriptarPalabra(textoOriginal);
    
    // Mostrar el texto encriptado en el textarea
    document.getElementById("resultadoEncriptado").value = encriptado;
}

function desencriptar() {
    // Obtener el texto encriptado del input
    let textoEncriptado = document.getElementById("inputDesencriptar").value;
    
    // Desencriptar el texto usando el texto original
    let desencriptado = desencriptarPalabra(textoEncriptado);
    
    
    document.getElementById("resultadoDesencriptado").value = desencriptado;
}

function encriptarPalabra(palabra) {
    
    let caracteres = palabra.split('');

    // Mezclar los caracteres
    for (let i = caracteres.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [caracteres[i], caracteres[j]] = [caracteres[j], caracteres[i]];
    }

    // Crear una cadena más larga y confusa
    let palabraEncriptada = caracteres.join('') + generarRuido(palabra.length);

    return palabraEncriptada;
}

function generarRuido(longitudOriginal) {
    const caracteres = 'abcdefghijklmnopqrstuvwxyz';
    let ruido = '';
    for (let i = 0; i < longitudOriginal * 2; i++) { 
        ruido += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return ruido;
}

function desencriptarPalabra(palabraEncriptada) {
   

    return textoOriginal;
}
