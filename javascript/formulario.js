// FORMULARIO - RECOMENDACION

function enviar(){
    var nombre = document.querySelector('#nombre').value;
    var apellido = document.querySelector('#apellido').value;
    var nombreCancion = document.querySelector('#nombreCancion').value;
    var nombreArtista = document.querySelector('#nombreArtista').value;

    if (nombre !== '' && apellido !== '' && nombreCancion !== '' && nombreArtista !== ''){
        alert('¡Gracias por tu recomendación! 😃');
    }else{
        alert('⚠️Rellena los campos obligatorios⚠️');
    }
}