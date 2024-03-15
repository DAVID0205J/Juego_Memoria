import { cards1, cards2 } from "./data_cartas.js";
import { Lista_random } from "./data_cartas.js";

let todas_las_tarjetas = Lista_random;

function repartir_cartas() {
    let tablero = document.querySelector(".tablero");
    
    todas_las_tarjetas.forEach((cada_carta) => {
        let carta = document.createElement('div');
        carta.classList.add("carta_tracera");
        carta.innerHTML = `<div class="carta">${cada_carta}</div>`;

        tablero.appendChild(carta); 
    });
}

repartir_cartas();