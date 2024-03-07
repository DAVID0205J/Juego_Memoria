/* PROGRAMACION PARA DESCUBRIR CARTA*/

let todas_las_cartas = document.querySelectorAll(".carta_tracera");

todas_las_cartas.forEach((cada_div)=>{
   cada_div.addEventListener("click", ()=>{

/*CANTIDAD DE CARTAS DESCUBRIERTAS */

    let cartas_descubriertas=document.querySelectorAll(".activar")
    
    let total_descubriertas=cartas_descubriertas.length;

    if(total_descubriertas<2){
        cada_div.classList.add("activar")
        cartas_descubriertas=document.querySelectorAll(".activar")
        console.log(total_descubriertas);

    }if(total_descubriertas==1){

        //colocar el tiempo que se necesita cuando ya hay 2 cartas descubiertas 
        setTimeout(()=>{
            cartas_descubriertas.forEach((cada_carta_descubrierta)=>{
            cada_carta_descubrierta.classList.remove("activar")
            })
        }, 1000)


    }
   });
});

