// SLIDER
window.addEventListener('load', function(){
    var botonRetroceder = document.querySelector('#retroceder');
    var botonAvanzar = document.querySelector('#avanzar')
    var imagen = document.querySelector('#slider')

    var imagenes = [];
    imagenes[0] = 'imagenes/imagen1.jpg';
    imagenes[1] = 'imagenes/imagen2.jpg';
    imagenes[2] = 'imagenes/imagen3.jpg';
    imagenes[3] = 'imagenes/imagen4.jpg';
    imagenes[4] = 'imagenes/imagen5.jpg';
    imagenes[5] = 'imagenes/imagen6.jpg';
    imagenes[6] = 'imagenes/imagen7.jpg';

    var posicionActualAuto = 0;
    var posicionActualManual = 0;
    var intervalo;

    function cambiarImagenes(){
        imagen.src = imagenes[posicionActualAuto];

        if (posicionActualAuto < imagenes.length - 1){
            posicionActualAuto++;
        } 
        else{
            posicionActualAuto = 0;
        }
    }
    // iniciamos el intervalo de tiempo automáticamente
    intervalo = setInterval(cambiarImagenes, 3000);

    function anvanzarImagen(){
        // detenemos el intervalo de tiempo antes de cambiar a manual
        clearInterval(intervalo)

        if (posicionActualManual >= imagenes.length - 1){
            posicionActualManual = 0;
        } else{
            posicionActualManual++;
        }
        imagen.src = imagenes[posicionActualManual];

        // reiniciamos el intervalo después del cambio manual
        intervalo = setInterval(cambiarImagenes, 3000);
    }

    function retrocederImagen(){
        // detenemos el intervalo de tiempo antes de cambiar a manual
        clearInterval(intervalo)

        if(posicionActualManual <= 0){
            posicionActualManual = imagenes.length - 1;
        } else{
            posicionActualManual--;
        }
        imagen.src = imagenes[posicionActualManual];

        // detenemos el intervalo de tiempo antes de cambiar a manual
        intervalo = setInterval(cambiarImagenes, 3000);
    }

    botonAvanzar.addEventListener('click', anvanzarImagen);
    botonRetroceder.addEventListener('click', retrocederImagen);

});