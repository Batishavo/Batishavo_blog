document.getElementById("boton-copiar-1").addEventListener("click",function(){
    copiar("command-1");
});
document.getElementById("boton-copiar-2").addEventListener("click",function(){
    copiar("command-2")
});
document.getElementById("boton-copiar-3").addEventListener("click",function(){
    copiar("command-3")
});
document.getElementById("boton-copiar-4").addEventListener("click",function(){
    copiar("command-4")
});
document.getElementById("boton-copiar-5").addEventListener("click",function(){
    copiar("command-5")
});
document.getElementById("boton-copiar-7").addEventListener("click",function(){
    copiar("command-7")
});

function copiar(text){
    
    let elemento = document.getElementById(text);

    let seleccion = window.getSelection();
    let rango = document.createRange();
    
    //console.log("entra");
    rango.selectNodeContents(elemento);
    seleccion.removeAllRanges();
    seleccion.addRange(rango);

    try{
        document.execCommand("copy");
    }
    catch(error){
        console.log(error)
    }

    seleccion.removeAllRanges();
}