//Creamos variables con acceso a los elementos del html
var contenido = document.getElementById('contenido-archivo');
var fil = document.getElementById('fila');
var col = document.getElementById('columna');
var cad = document.getElementById('cadena');
var tipo = document.getElementById('tipo');

//creamos array's con las palabras reservadas
var palabrasReservadas = ["palabra reservada", "variable", "entero", "decimal", "booleano", "cadena", "si", "sino", "mientras", "hacer"];
var agrupacion = ["agrupacion", "(", ")", "{", "}"];
var operador = ["operador", "+", "-", "*", "/", "%", "=", "==", "<", ">", ">=", "<="];
var booleano = ["boolean", "verdadero", "falso"];

//Funcion encargada de verificar todo el texto
function verificar() {
  var strTemp =  contenido.value.toString();
 var arStr = strTemp.split(/\n/);

  for(var i = 0; i < arStr.length-1; i++){//inicia en 0, y termina en el tamano de filas - 1, esto debido a que nos cuenta la ultima fila vacía
    verificarLinea(i+1, arStr[i]);//Enviamos i + 1, para que muestre el numero de linea (para que empiece en 1 y no en 0), además del string de la fila numero i
  }
}

function verificarLinea(numLinea, cadenaNLinea) {
  var arregloCadenaSinEspacio = cadenaNLinea.split(' ');
  
  for(var i = 0; i < arregloCadenaSinEspacio.length; i++){
    var iDo = 1;
    do{
      var tipoAux = compararCadenas(arregloCadenaSinEspacio[i], iDo);  //comparamos la cadena/token con el arreglo definido al inicio (depende del valor de iDo)
      iDo++;
      if(tipoAux != " "){//si al comparar el token con las palabras reservadas nos retorna un valor distinto del vacio se termina el ciclo
        iDo = 5;
      }
    }while(iDo !=5);
    
    if(tipoAux != " "){//Imprimimos los resultados en las listas del html
      fil.innerHTML = fil.innerHTML + "<p>" + numLinea +  "</p>";
      col.innerHTML = col.innerHTML + "<p>" + (i + 1) + "</p>";
      cad.innerHTML = cad.innerHTML + "<p>" + arregloCadenaSinEspacio[i] + "</p>";
      tipo.innerHTML = tipo.innerHTML + "<p>" + tipoAux + "</p>";
    }
  }
}
function compararCadenas(cadena1, num) {
  var res = " "; 
  switch (num) {
    case 1:
      for(var i = 1; i < palabrasReservadas.length; i++){
        if(cadena1 == palabrasReservadas[i]){
          res = palabrasReservadas[0];
        }
      }
      break;
    case 2:
      for(var i = 1; i < agrupacion.length; i++){
        if(cadena1 == agrupacion[i]){
          res = agrupacion[0];
        }
      }
      break;
    case 3:
      for(var i = 1; i < operador.length; i++){
        if(cadena1 == operador[i]){
          res = operador[0];
        }
      }
      break;
    case 4:
      for(var i = 1; i < booleano.length; i++){
        if(cadena1 == booleano[i]){
          res = booleano[0];
        }
      }
      break;
    default:
      break;
  }
  
  return res;
}