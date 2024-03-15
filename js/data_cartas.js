//Cartas
//export let cards1= ["🤩","🤗","🥱","😎","🫢","😏","🙂","🙃","😮‍💨","😡","🤯","🫣"]
//export let cards2= ["🤩","🤗","🥱","😎","🫢","😏","🙂","🙃","😮‍💨","😡","🤯","🫣"]

export let cards1= ["🤩","🤗","🥱","😎","🫢","😏"]
export let cards2= ["🤩","🤗","🥱","😎","🫢","😏"]
function ordenarAleatorio(a,b){
    return Math.random() -0.5;
}

let todas_las_cartas = cards1.concat(cards2)

todas_las_cartas.sort(ordenarAleatorio)

export let Lista_random= todas_las_cartas;