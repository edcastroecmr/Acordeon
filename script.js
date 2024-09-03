const pegarLi = document.querySelectorAll(".item-lista");
const pegarTextoOculto = document.querySelectorAll(".texto")



pegarLi.forEach((lis) =>{
    lis.addEventListener("click", ()=>{
    let setaAberta = lis.classList.contains("seta-aberta")


    pegarTextoOculto.forEach((textinho)=>{textinho.classList.remove("mostrar")})
    pegarLi.forEach((titulos)=>{titulos.classList.remove("seta-aberta")})

     
    if (!setaAberta) {
         const textoAssociado = lis.querySelector(".texto");
         if (textoAssociado) {
            textoAssociado.classList.add("mostrar");
         }
         lis.classList.add("seta-aberta");
     }
     

    })
})





// pegarTextoOculto.forEach((textinhos)=>{textinhos.classList.remove("mostrar") })