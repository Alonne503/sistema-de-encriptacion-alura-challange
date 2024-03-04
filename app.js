const text = document.querySelector("#msg-cifrar");
const textOut = document.querySelector("#msg-out");



const  cifrado = [
   ["e", "enter"],
   ["i", "imes"],
   ["a", "ai"],
   ["o", "ober"],
   ["u", "ufat"],
]



function btnCifrar(){
    const texto = encriptar(text.value);
    textOut.value = texto;
}

function encriptar(palabraEncriptada){
    if(!/^[a-z\s]+$/i.test(palabraEncriptada)){
        alert("porfavor no uses caracteres especiales ni letras mayusculas");
        return "";
    }else{
            for(let i = 0; i < cifrado.length; i++){
                if(palabraEncriptada.includes(cifrado[i][0])){
                    palabraEncriptada = palabraEncriptada.replaceAll(
                        cifrado[i][0],
                        cifrado[i][1]
                    )
                }
            }
        }
        return palabraEncriptada;
    }


    

console.log(cifrado.length);

function btnDescifrar(){
    const texto = desencriptar(text.value);
    textOut.value = texto;
}

function desencriptar(palabraDesencriptada){
    for(let i = 0; i < cifrado.length; i++){
        if(palabraDesencriptada.includes(cifrado[i][1])){
            palabraDesencriptada = palabraDesencriptada.replaceAll(
                cifrado[i][1],
                cifrado[i][0]
            )
        }
    }
    return palabraDesencriptada;
}
//const textencriptar = document.querySelector('#msg-cifrar').value;;
//const textSalida = textencriptar.replace(/e/, "enter").replace(/i/, "imes").replace(/a/, "ai").replace(/o/, "ober").replace(/u/, "ufat");
//let desencriptar;
//let buttonEncriptar;
//let buttonDesencriptar;

/*
let caracteres;



function encriptar(){
    let text = document.querySelector('#msg-cifrar').value;
    let textOut = text.replace(/e/, "enter").replace(/i/, "imes").replace(/a/, "ai").replace(/o/, "ober").replace(/u/, "ufat");
    //let textencriptar = textSalida;
    document.querySelector('#msg-out').value = textOut;
    document.querySelector('#msg-cifrar').value;
}

this.encriptar();

function buttonEncriptar(){
    buttonEncriptar = document.querySelector('#btn-cifrar');
    buttonEncriptar.onclick = encriptar;
    this.encriptar();
}

this.buttonEncriptar();

function desencriptar(){
    let text = document.querySelector('#msg-cifrar').value;
    let textOut = text.replace(/enter/, "e").replace(/imes/, "i").replace(/ai/, "a").replace(/ober/, "o").replace(/ufat/, "u");
    document.querySelector('#msg-out').value = textOut;
    document.querySelector('#msg-cifrar').value;
}

this.desencriptar();

function bottonDesencriptar(){
    bottonDesencriptar = document.querySelector('#btn-descifrar');
    bottonDesencriptar.onclick = desencriptar;
    this.desencriptar();
}

this.bottonDesencriptar();
*/

