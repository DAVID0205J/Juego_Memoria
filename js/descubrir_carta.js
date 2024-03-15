

let todas_las_cartas = document.querySelectorAll(".carta_tracera");
let contador_de_cartas= document.querySelector(".")

todas_las_cartas.forEach((cada_div) => {

    cada_div.addEventListener("click", () => {
        
        let cartas_descubiertas = document.querySelectorAll(".activar");
        let total_descubiertas = cartas_descubiertas.length;
        
        if (total_descubiertas < 2) {
            cada_div.classList.add("activar");
            cartas_descubiertas = document.querySelectorAll(".activar");
            
            if (cartas_descubiertas.length == 2) {

                
                function comparar (){
                    let carta1 = cartas_descubiertas[0].innerHTML;
                    let carta2 = cartas_descubiertas[1].innerHTML;

                    if (carta1 == carta2){
                        console.log("Verdadero");

                        contador_de_cartas++;

                        if(contador_de_cartas==todas_las_cartas.length/2){
                            c
                            alert("todas las cartas descubiertas ")
                        }
                        
                        cartas_descubiertas.forEach((total_descubiertas) => {
                            total_descubiertas.classList.remove("activar")
                            total_descubiertas.classList.add("ocultar");
                        });

                    }else{
                        console.log("Falso");
                    }
                }

                comparar();
                setTimeout(() => {
                    cartas_descubiertas.forEach((cada_carta_descubierta) => {
                        cada_carta_descubierta.classList.remove("activar");
                    });
                }, 1000);    
            }
        } else {
            console.log("Dos cartas descubiertas");
        }
    });
});