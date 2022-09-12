const inputText = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const copiar = document.querySelector(".copiar");
const texto1 = document.querySelector(".texto-1");
const texto2 = document.querySelector(".texto-2");

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            
        }
    }

    return stringEncriptada;
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);            
        }
    }

    return stringDesencriptada;
}

function btnEncriptar(){
    if(inputText.value == ""){
        alert("No hay un mensaje para encriptar")
    }else{
        const textoEncriptado = encriptar(inputText.value);
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none";
        mensaje.style.height = "80%";
        texto1.style.display = "none";
        texto2.style.display = "none";
        copiar.style.display = "block";
        inputText.value = "";
    }
    
}

function btnDesencriptar(){
    if(inputText.value == ""){
        alert("No hay un mensaje para desencriptar")
    }else{
        const textoDesencriptado = desencriptar(inputText.value);
        mensaje.value = textoDesencriptado;
        mensaje.style.backgroundImage = "none";
        mensaje.style.heigh = "80%";
        texto1.style.display = "none";
        texto2.style.display = "none";
        copiar.style.display = "block";
        inputText.value = "";
    }
    
}

function btnCopiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Texto copiado");
}