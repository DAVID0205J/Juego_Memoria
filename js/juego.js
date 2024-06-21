import { repartirCartas } from './repartir_cartas.js';
import { iniciar_cronometro } from './cargar_cronometro.js';
import { actualizarNivel } from './header.js'; // Asegúrate de importar las funciones necesarias

let nivelActual = 1;
let niveles = 5;
let tiempoPorNivel = [60, 50, 40, 30, 20];

function iniciarJuego() {
    actualizarNivel(nivelActual); // Actualizar el nivel en el header
    repartirCartas(nivelActual); // Repartir las cartas para el nivel actual
    iniciar_cronometro(0, tiempoPorNivel[nivelActual - 1]); // Iniciar el cronómetro con el tiempo del nivel actual
}

export { iniciarJuego };
