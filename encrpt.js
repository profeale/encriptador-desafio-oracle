function encriptar() {
    // Obtener el texto del textarea
    let textoOriginal = document.getElementById("texto").value.toLowerCase();

    // Aplicar la encriptación
    let textoEncriptado = encriptarTexto(textoOriginal);

    // Mostrar el resultado en la sección de resultados
    mostrarResultado(textoEncriptado);
}

function desencriptar() {
    // Obtener el texto del textarea
    let textoEncriptado = document.getElementById("texto").value.toLowerCase();

    // Aplicar la desencriptación
    let textoOriginal = desencriptarTexto(textoEncriptado);

    // Mostrar el resultado en la sección de resultados
    mostrarResultado(textoOriginal);
}

function encriptarTexto(texto) {
    // Lógica de encriptación según las reglas proporcionadas
    let encriptacion = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    let textoEncriptado = texto.split('').map(char => encriptacion[char] || char).join('');

    return textoEncriptado;
}

function desencriptarTexto(textoEncriptado) {
    // Lógica de desencriptación según las reglas proporcionadas
    let desencriptacion = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    let textoOriginal = textoEncriptado.split(/(enter|imes|ai|ober|ufat)/).map(part => desencriptacion[part] || part).join('');

    return textoOriginal;
}

function mostrarResultado(resultado) {
    // Mostrar el resultado en la sección de resultados
    document.getElementById("resultado").innerText = resultado;
}

function copiarResultado() {
    // Seleccionar el texto en la sección de resultados
    let resultado = document.getElementById("resultado");
    let range = document.createRange();
    range.selectNode(resultado);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    // Copiar el texto al portapapeles
    document.execCommand("copy");

    // Limpiar la selección
    window.getSelection().removeAllRanges();
}
