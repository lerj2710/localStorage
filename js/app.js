//variables
const formulario = document.querySelector('#formulario');
const listaTweests = document.querySelector('#lista-tweets');
let tweets = [];

//eventos
addEventListener();
function addEventListener() {
    formulario.addEventListener('submit', agregarTweet)
}

//funciones


function agregarTweet(e) {
    e.preventDefault();
    const tweet = document.querySelector('#tweet').value;
    if(tweet === ''){
        mostrarError('No puede ir vacio');
        return;
    }
     console.log('s hay algo');
}

function mostrarError(message) {
    // crear el elemento para mostrar el mensaje de error
    const messageError = document.createElement('p');
        messageError.textContent = message;
        messageError.classList.add('error');
    const contenido = document.querySelector('#contenido');
        contenido.appendChild(messageError);
    // Eliminar el mesaje de alerta despues e 3 segundos
        setTimeout(() => {
    messageError.remove()
}, 3000);
}