'use-strict'

let outText = '';
let syntaxEncrypt = [
    {
        key: 'e',
        code: 'enter'
    },
    {
        key: 'i',
        code: 'imes'
    },
    {
        key: 'a',
        code: 'ai'
    },
    {
        key: 'o',
        code: 'ober'
    },
    {
        key: 'u',
        code: 'ufat'
    }
]


function EncryptText(){
    let recivedText = document.getElementById("TextEncrypt").value;
    if(recivedText=== "" || recivedText === undefined){
        recivedText = "No se ingreso el texto.";
    } else {
        recivedText = ProcessText("encrypt",recivedText);
    }
    console.log(recivedText);
}

function DecryptText(){
    let recivedText = document.getElementById("TextEncrypt").value;
    if(recivedText=== "" || recivedText === undefined){
        recivedText = "No se ingreso el texto.";
    } else {
        recivedText = ProcessText("decrypt",recivedText);
    }
    document.getElementById("OutProcess").innerHTML = recivedText;
}

function ProcessText(type, text){
    const recivedType = new String(type).toLowerCase();
    let varText = String(text);
    if(recivedType === "encrypt"){
        syntaxEncrypt.forEach((processCodes) => {
            if(varText.includes(processCodes.key)){
                varText = varText.replace(new RegExp(processCodes.key, "gi"), processCodes.code);
            }
        })   
    } else if(recivedType === "decrypt"){
        syntaxEncrypt.forEach((processCodes) => {
            if(varText.includes(processCodes.code)){
                varText = varText.replace(new RegExp(processCodes.code, "gi"), processCodes.key);
            }
        })   
    } else {
        varText = "Problema en los servicios al procesar."
    }
    return varText;
}