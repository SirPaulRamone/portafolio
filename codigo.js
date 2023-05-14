var botonEncriptar = document.querySelector(".boton-encriptar");
var botonDesencriptar = document.querySelector(".boton-desencriptar");
var imgMunieco = document.querySelector(".imagen-munieco");
var textotMunieco = document.querySelector(".texto-munieco");
var textoDesencriptado = document.querySelector(".texto-desencriptado");

function recuperarTexto() {
    var textoEntrada = document.querySelector(".texto-entrada");
    return textoEntrada.value;
}

function ocultarMunieco() {
    var textoEntrada = document.querySelector(".texto-entrada").value;
    if (textoEntrada!=""){
        imgMunieco.classList.add("ocultar");
        textotMunieco.classList.add("ocultar")
    } else {
        alert("Ingrese un texto en minuscula y sin caracteres especiales");
    }
}

function encriptarTexto(mensaje) {
    var textoEncriptado = "";
        
    for(var i = 0; i < mensaje.length; i++){
        if (mensaje[i] == "a"){
            textoEncriptado = textoEncriptado + "ai";
        }
        else if (mensaje[i] == "e"){
            textoEncriptado = textoEncriptado + "enter";
        }
        else if (mensaje[i] == "i"){
            textoEncriptado = textoEncriptado + "imes";
        }
        else if (mensaje[i] == "o"){
            textoEncriptado = textoEncriptado + "ober";
        }
        else if (mensaje[i] == "u"){
            textoEncriptado = textoEncriptado + "ufat";
        }
        else {
            textoEncriptado = textoEncriptado + mensaje[i];
        }
    }
    return textoEncriptado.toLocaleLowerCase();
}

function encriptar() {
    ocultarMunieco();
    textoDesencriptado.textContent = encriptarTexto(recuperarTexto());
    var borrarEntrada = document.querySelector(".texto-entrada");
    borrarEntrada.value = "";
}

//**********************************************************************//

function desencriptarTexto(mensaje) {
    var textoDesencriptado = "";
        
    for(var i = 0; i < mensaje.length; i++){
        if (mensaje[i] == "a"){
            textoDesencriptado = textoDesencriptado + "a";
            i += 1;
        }
        else if (mensaje[i] == "e"){
            textoDesencriptado = textoDesencriptado + "e";
            i += 4;
        }
        else if (mensaje[i] == "i"){
            textoDesencriptado = textoDesencriptado + "i";
            i += 3;
        }
        else if (mensaje[i] == "o"){
            textoDesencriptado = textoDesencriptado + "o";
            i += 3;
        }
        else if (mensaje[i] == "u"){
            textoDesencriptado = textoDesencriptado + "u";
            i += 3;
        }
        else {
            textoDesencriptado = textoDesencriptado + mensaje[i];
        }
    }
    return textoDesencriptado;
}

function desencriptar() {
    ocultarMunieco();
    textoDesencriptado.textContent = desencriptarTexto(recuperarTexto());
    var borrarEntrada = document.querySelector(".texto-entrada");
    borrarEntrada.value = "";
}

//*************************************************************************************/

//Copiar con addEventListener

const botoncopiar = document.querySelector(".boton-copiar");
      botoncopiar,addEventListener("click", copiar = () => {
      var contenido = document.querySelector(".texto-desencriptado").textContent;
      navigator.clipboard.writeText(contenido);    
      })


botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;