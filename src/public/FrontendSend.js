//Metodo de Comunicacion con el Backend

const respuesta = document.querySelector('#archivotxt');
const boton = document.querySelector('#boton1');

const urlp = "http://localhost:3000/analizador";

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

};

//para enviar
getButton.addEventListener('click', getData);