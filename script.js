let textArea = document.querySelector(".textArea");
let mensagem = document.querySelector(".mensagem");

const btnCopiar = document.querySelector(".btnCopiar");

btnCopiar.onclick = copiarTexto;

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnCriptografar() {
  let textoCriptografado = criptografar(textArea.value);
  mensagem.value = textoCriptografado;
  textArea.value = "";
}

function criptografar(stringDescriptografada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDescriptografada = stringDescriptografada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDescriptografada.includes(matrizCodigo[i][0])) {
      stringDescriptografada = stringDescriptografada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringDescriptografada;
}

function btnDescriptografar() {
  let textoDescriptografado = descriptografar(textArea.value);
  mensagem.value = textoDescriptografado;
  textArea.value = "";
}

function descriptografar(stringDescriptografada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDescriptografada = stringDescriptografada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDescriptografada.includes(matrizCodigo[i][1])) {
      stringDescriptografada = stringDescriptografada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDescriptografada;
}

function copiarTexto() {
  const campoMensagem = document.getElementById("campoMensagem");
  campoMensagem.select();
  campoMensagem.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(campoMensagem.value);

  campoMensagem.value = "";
  textArea.focus();
}


// function escondeImagem() {
//   document.getElementById("escondeGarota").style.display = "none";
// }
