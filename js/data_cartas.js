export let lista_cartas_nivel = [
    ["😎", "🤗"], // Nivel 0
    ["😎", "🤗", "😊", "🤩"], // Nivel 1
    ["😎", "🤗", "😊", "🤩", "😂", "🤣"], // Nivel 2
    ["😎", "🤗", "😊", "🤩", "😂", "🤣", "😒", "😍"], // Nivel 3
    ["😎", "🤗", "😊", "🤩", "😂", "🤣", "😒", "😍", "😘", "😁"], // Nivel 4
    ["😎", "🤗", "😊", "🤩", "😂", "🤣", "😒", "😍", "😘", "😁", "👍", "👌"], // Nivel 5
    // Añadir más niveles según sea necesario
];

export let cards1 = ["🍟", "🥐"];
export let cards2 = ["🍟", "🥐"];

// Función para crear aleatoriedad
function ordenarAleatorio(a, b) {
    return Math.random() - 0.5;
}

// Unificar las listas
let todas_las_tarjetas = cards1.concat(cards2);


// Organiza de forma aleatoria la lista todas_las_cartas
todas_las_tarjetas.sort(ordenarAleatorio);

export let lista_random = todas_las_tarjetas;