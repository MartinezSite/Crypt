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
        ProcessText("encrypt",recivedText);
    }
}

function DecryptText(){
    let recivedText = document.getElementById("TextEncrypt").value;
    if(recivedText=== "" || recivedText === undefined){
        recivedText = "No se ingreso el texto.";
    } else {
        ProcessText("decrypt",recivedText);
    }
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
    document.getElementById("OutProcess").innerHTML = varText;
}

function CopyOut(){
    document.getElementById("TextEncrypt").value = "";
    var text = document.getElementById("OutProcess").innerHTML;
    console.log(text);
    navigator.clipboard.writeText(text)
    .then(() => {
        console.log('Text copied to clipboard');
    })
    .catch(err => {
        console.error('Error in copying text: ', err);
    });
}