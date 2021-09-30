//variables
const formulario = document.querySelector('#formulario');
const listaTweests = document.querySelector('#lista-tweets');
let tweets = [];

//eventos
addEventListener();
function addEventListener() {
    //cargar el fomulario previo
    formulario.addEventListener('submit', agregarTweet);
    //cargar el localStorage
    document.addEventListener('DOMContentLoaded', () =>{
            tweets = JSON.parse(localStorage.getItem('tweets')) || [];
            console.log(tweets);
            crearHTML()

    });
}

//funciones


function agregarTweet(e) {
    e.preventDefault();
    const tweet = document.querySelector('#tweet').value;
    if(tweet === ''){
        mostrarError('No puede ir vacio');
        return;
    }
     const tweetObj= {
            id: Date.now(),
            tweet: tweet
     };
     tweets = [...tweets, tweetObj];
    ///Insertar el HTML
    crearHTML();
    // reiniciar le formulario
    formulario.reset();
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
//muestra el listado de los tweets
function crearHTML() {
    limpiarHtml();
    if(tweets.length > 0){

        tweets.forEach(tweet =>{
            
            //agregar el boton de enviar
            const btnEliminar = document.createElement('a');
                  btnEliminar.classList.add('borrar-tweet');
                  btnEliminar.textContent= 'X';
                  btnEliminar.onclick = () =>{
                        eliminandoTweets(tweet.id);
                  };
            // Iterar en el html
            const li = document.createElement('li');
            li.innerHTML = tweet.tweet        
            //añadir html
            li.appendChild(btnEliminar);
            //añadir al html
            listaTweests.appendChild(li);
        });
    }
    agregarLocalStorage();
}
function agregarLocalStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));// cambiar el arrglo a un string para local storage
}

//eliminando tweets
function eliminandoTweets(id) {
        tweets = tweets.filter( ( tweet => tweet.id !== id));
    console.log(tweets);
    crearHTML();
}
//limpiar html
function limpiarHtml() {
    while (listaTweests.firstChild) {
        listaTweests.removeChild(listaTweests.firstChild)
    }
}