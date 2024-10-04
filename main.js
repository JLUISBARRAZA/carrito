let conteo = 0;
function agregarcosas(nombre,descripcion,precio,imagen){
    
    document.getElementById("producto").innerHTML += `
    <div class="productico">
    <img src="${imagen}" alt="">
    <h2>${nombre}</h2>
    <h3>${descripcion} </h3>
    <p>${precio}</p>
    
    <div>
    `
    conteo++

    let contador = document.getElementById("conteo").textContent=conteo;


 }

