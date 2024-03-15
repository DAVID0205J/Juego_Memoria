let vidas=["❤️","❤️","❤️","❤️","❤️","❤️"];

let div_vidas= document.querySelector(".vidas")



function actualizar_vidas(resultado){


    if(resultado){
        vidas.forEach((cada_vida)=>{

            let div= document.createElement("div")
            div.innerHTML=cada_vida;
            div_vidas.appendChild(div)
        
        })
    }else{
        vidas.pop();
        console.log(vidas);

    }
}

actualizar_vidas(true);

export{ actualizar_vidas }