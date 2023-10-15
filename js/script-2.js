var toggle = document.getElementById("container");
var body = document.querySelector("body");
var h1 = document.querySelector("h1");

toggle.onclick = function(){
    toggle.classList.toggle("active");
    body.classList.toggle("active");
    h1.classList.toggle("active");
}


const stopwatch =  document.getElementById('stopwatch');
const playPauseButton =  document.getElementById('play-pause');
const secondsSphere =  document.getElementById('seconds-sphere');


let stopwatchInterval;
let runningTime =0;

const playPause = () => {
    const isPaused = !playPauseButton.classList.contains('running');
    if(isPaused) {
        playPauseButton.classList.add('running');
        start();
    } else{
        playPauseButton.classList.remove('running');
        pause();
    }
}

const pause = () => {
    secondsSphere.style.animationPlayState = 'paused';
    clearInterval(stopwatchInterval);
}

const stop = () => {
    secondsSphere.style.transform = 'rotate(-90deg) translateX(60px)';
    secondsSphere.style.animation = 'none';
    playPauseButton.classList.remove('running');
    runningTime = 0;
    clearInterval(stopwatchInterval);
    stopwatch.textContent = '00:00';
}

const start = () => {
    secondsSphere.style.animation = 'rotacion 60s linear infinite';
    let startTime = Date.now() - runningTime;
    secondsSphere.style.animationPlayState = 'running';
    stopwatchInterval = setInterval( () => {
        runningTime = Date.now() - startTime;
        stopwatch.textContent = calculateTime(runningTime);
    }, 1000)
}

const calculateTime = runningTime => {
    const total_seconds = Math.floor(runningTime / 1000);
    const total_minutes = Math.floor(total_seconds / 60);

    const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
    const display_minutes = total_minutes.toString().padStart(2, "0");

    return `${display_minutes}:${display_seconds}`
}

///

let contador = 0;

const valor = document.querySelector('#valor');
const botones = document.querySelectorAll('.boton')

botones.forEach(boton =>{
    boton.addEventListener('click', function(e){
        const estilos = e.currentTarget.classList;

        if(estilos.contains('disminuir')) {
            contador--
        }
        else if(estilos.contains('aumentar')) {
            contador++;
        } 
        else{
            contador = 0;
        }
         valor.textContent = contador;


         if(contador>0) {
            valor.style.color = '#fff';
         }
         if(contador<0) {
            valor.style.color = '#ba215a';
         }

    })
})


let numeroAleatorio;
          let intentos = 0;
        
          function iniciarJuego() {
            const min = parseInt(document.getElementById("min").value);
            const max = parseInt(document.getElementById("max").value);
        
            if (isNaN(min) || isNaN(max) || min >= max) {
              alert("Ingresa un rango válido.");
              return;
            }
        
            numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
            intentos = 0;
        
            document.getElementById("resultado").textContent = "";
            document.getElementById("adivinaNumero").value = "";
            document.getElementById("adivinaNumero").disabled = false;
            document.getElementById("adivinaNumero").setAttribute("max", max);
            document.getElementById("adivinaNumero").setAttribute("min", min);
          }
        
          function verificarAdivinanza() {
            intentos++;
            const adivina = parseInt(document.getElementById("adivinaNumero").value);
        
            if (adivina === numeroAleatorio) {
              document.getElementById("resultado").textContent = `¡Adivinaste en ${intentos} intentos!`;
              document.getElementById("adivinaNumero").disabled = true;
            } else if (adivina < numeroAleatorio) {
              document.getElementById("resultado").textContent = `Demasiado bajo. Intento #${intentos}`;
            } else {
              document.getElementById("resultado").textContent = `Demasiado alto. Intento #${intentos}`;
            }
          }


          function actualizarReloj() {
            var fecha = new Date();
            var hora = fecha.getHours();
            var minutos = fecha.getMinutes();
            var segundos = fecha.getSeconds();
            var tiempo = `${hora < 10 ? '0' : ''}${hora}:${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
            document.getElementById("reloj").textContent = tiempo;
          }
      
          setInterval(actualizarReloj, 1000);