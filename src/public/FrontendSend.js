//Metodo de Comunicacion con el Backend

const respuesta = document.querySelector('#archivotxt');
const boton = document.querySelector('#boton1');

/*/
// enviaando al analizador con Axios
const getData = () => {

    axios.post('http://localhost:3000/postusers', {
            text: respuesta.value
            
        }, {
            'Content-Type': 'application/json'
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });

};*/


const urlp = "http://localhost:3000/postusers";
const url = "http://localhost:3000/users";

//envia los datos a la ruta establecida
const sendData = () => {
    numeros=0
    axios.post('http://localhost:3000/postusers', {
            text: respuesta.value
            
        }, {
            'Content-Type': 'application/json'
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });

};
//recibe la informacion enviada por el backend
const getData = () => {
    console.log("Holaaa");
    numeros++;
    axios.get("http://localhost:3000/users").then(response => {
            console.log(response.data);
            console.log(response.data.palabra);
            historial.innerHTML="Token Analizados:  "+numeros;
            historial.innerHTML = historial.innerHTML + "<li class=\"list-group-item\">"+token[o].split(" ")+" - "+"Palabra Reservada"+"</li>";
            enviarTabla(response.data.tipo,response.data.palabra,response.data.filas);
            console.log({historial});
        })
        .catch(error => {
            console.log(error);
        });
};



//para enviar
getButton.addEventListener('click', getData);
getButton.addEventListener('click', sendData);