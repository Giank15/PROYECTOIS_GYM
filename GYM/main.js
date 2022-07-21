import './style.css'

let html = '';
html+=`<div>`
html+=`<center> `
html+=`<div class="contenedor-formulario contenedor">`
html+=`<div class="imagen-formulario" > <img src="./images/logo.JPG" alt="" ></div>`
html+=`<form class="formulario">`
html+=`<div class="logo"><img src="./images/LOGO NARANJA.png" alt="1200px" width="100px" height="105px"></div>`
html+=`<div class="texto-formulario">`
html+=`<h2>Iniciar Sesión</h2>`
html+=`<p>Ingrese sus credenciales por favor </p>`
html+=`</div>`
html+=`<div class="input">`
html+=`<label for=""></label>`
html+=`<input placeholder="Usuario" type="text" id="usuario">`
html+=`</div>`
html+=`<div class="input contraseña">`
html+=`<label for=""></label>`
html+=`<input placeholder="Contraseña" type="password" id="contraseña">`
html+=`</div>`
html+=`<div class="input">`
html+=`<label for=""></label><br>`
html+=`<a class="ingresar" href="./pages/bienvenido/bienvenido.html">Ingresar</a>`
html+=`</div>`
html+=`</form>`
html+=`</div>`
html+=`</center>`
html+=`</div>`
app.innerHTML = html;

/*let boton1 = document.querySelectorAll('.ingresar');
boton1.forEach(boton => {
  boton.addEventListener('click', ()=>{
    window.location.href = "/pages/bienvenido/bienvenido.html";
  })  
})*/
