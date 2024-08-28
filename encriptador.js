


function funcion_encriptar(){
    let texto_ingresado = document.getElementById("texto_usuario").value;
    let texto_ya_cifrafo = texto_ingresado
                            .replace (/e/gi,"enter")
                            .replace (/i/gi,"imes")
                            .replace (/a/gi, "ai")
                            .replace (/o/gi,"ober")
                            .replace (/u/gi,"ufat");

    if (document.getElementById("texto_usuario").value.length !=0){
        document.getElementById("texto_usuario").value="";
        document.getElementById("mensaje_segundo_panel").value = texto_ya_cifrafo;
        document.getElementById("mensaje_encriptacion0").textContent="TEXTO ENCRIPTADO CON EXITO ";
        document.getElementById("mensaje_titulo_panel").textContent="";
        document.getElementById("mensaje_parrafo_panel").textContent= "";
        document.getElementById("primera_imagen").src = "./img/kurumi-felicidades.gif";
        document.getElementById("copiar").removeAttribute("disabled");

    }else{
        document.getElementById("primera_imagen").src ="./img/anime_buscando.gif";
        document.getElementById("mensaje_segundo_panel").value="";
        mensaje_titulo_panel.textContent = "Ningun mensaje fue encontrado";
        mensaje_parrafo_panel.textContent = "Ingrese el texto que desee encriptar";
         alert("debes ingresar algun texto");
    }
}

function funcion_desencriptar(){
    let texto_ingresado = document.getElementById("texto_usuario").value;
    let texto_ya_cifrafo = texto_ingresado
                            .replace (/enter/gi,"e")
                            .replace (/imes/gi,"i")
                            .replace (/ai/gi, "a")
                            .replace (/ober/gi,"o")
                            .replace (/ufat/gi,"u");
     if (document.getElementById("texto_usuario").value.length !=0){
        document.getElementById("mensaje_segundo_panel").value = texto_ya_cifrafo;
        document.getElementById("texto_usuario").value="";
        document.getElementById("mensaje_encriptacion0").textContent="TEXTO DESENCRIPTADO CON EXITO ";
         document.getElementById("mensaje_titulo_panel").textContent="";
        document.getElementById("mensaje_parrafo_panel").textContent="";
        document.getElementById("primera_imagen").src = "./img/desencriptando.gif";
      
      }else{
        document.getElementById("primera_imagen").src ="./img/anime_buscando.gif";
        document.getElementById("mensaje_segundo_panel").value="";
        mensaje_titulo_panel.textContent = "Ningun mensaje fue encontrado";
        mensaje_parrafo_panel.textContent = "Ingrese el texto que desee encriptar";
         alert("debes ingresar algun texto");


      }


}

function copiar(){
    let copiar_texto = navigator.clipboard.writeText (mensaje_segundo_panel.value);
    alert ("TEXTO COPIADO CON EXITO");
    return copiar_texto; 
}

function reiniciar(){
    document.getElementById("texto_usuario").value="";
    document.getElementById("mensaje_segundo_panel").value="";
    document.getElementById("primera_imagen").src ="./img/anime_buscando.gif";
        mensaje_titulo_panel.textContent = "Ningun mensaje fue encontrado";
        mensaje_parrafo_panel.textContent = "Ingrese el texto que desee encriptar";
        document.getElementById("mensaje_encriptacion0").textContent="";
   
}

