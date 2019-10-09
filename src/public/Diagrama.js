//Para generar una Galeria de los Diagramas 
//declaracion de varaible de movimiento 
var num=1;

//Ver siguiente imagen
function adelante() {
    num++;
    if(num>3)
        num=1;
    var foto=document.getElementById("img/foto");
    foto.src="foto"+num+".jpg";
}

//ver imagen anterior    
function atras() {
    num--;
    if(num<1)
        num=3;
    var foto=document.getElementById("img/foto");
    foto.src="foto"+num+".jpg";
}
