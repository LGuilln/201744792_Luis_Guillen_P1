//Para cargar el Archivo de entrada
function mostrarArchivo(e) {
  var archivo = e.target.files[0];
  if (!archivo) {
    return;
  }
  var lector = new FileReader();
  lector.onload = function(e) {
    var contenido = e.target.result;
    mostrarContenido(contenido);
  };
  lector.readAsText(archivo);
}

//Para poder hacer la Visualizacion previa 
function mostrarContenido(contenido) {
  
  var elemento = document.getElementById('archivotxt');
  elemento.innerHTML =contenido;
  document.getElementById('getButton').style.display = 'inline';
  document.getElementById('postButton').style.display = 'inline';
}

//visualizar
document.getElementById('fileinput')
  .addEventListener('change', mostrarArchivo, false);