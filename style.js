const textArea = document.querySelector(".text-area");
const mensajeencriptado = document.querySelector(".mensaje-encriptado");
const mensaje = document.querySelector(".mensaje");
const sinmensaje = document.querySelector(".sin-mensaje");

function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
}

function encriptar(stringEncriptada) {
  ocultarAdelante();
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }

  return stringEncriptada;
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(textArea.value);
  mensaje.value = textoDesencriptado;
  textArea.value = "";
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }

  return stringDesencriptada;
}

function ocultarAdelante() {
  sinmensaje.classList.add("ocultar");
  mensajeencriptado.classList.remove("ocultar");
}

function copiar() {
    const contenido = mensaje.value;
    navigator.clipboard
      .writeText(contenido)
      .then(() => {
        alert("Texto copiado al portapapeles: " + contenido);
        mensaje.value = "";
        })
      .catch((error) => {
        alert.error("Error al copiar el texto: " + error);
      });
  }