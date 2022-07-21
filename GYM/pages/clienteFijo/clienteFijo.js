import './estilos.css'

document.querySelector('#app').innerHTML = `
<div class="inicio">
    <div class="img1">
     <img src="../../images/LOGO BLANCO.png" width="60"/>
    </div>
    <div class="img2">
      <img class="mediana" src="../../images/Workout (500 × 130 px).png" width="60"/>
    </div>
     <button  class="btn-n0">Cerrar Sesión</button> <br>
    <div class="img3">
     <img src="../../images/Logout.png" width="60"/>
    </div>  
 </div>
 <center>
    <div class="contenedor">
        <h1>CLIENTES FIJOS</h1>
    </div> 
    <div>
        <table class="contenedor-fila" >
            <tr> <!--Fila-->
                <th>Nombre</th> <!--Columna-->
                <th>Edad</th><!--Columna-->
                <th>Direccion</th><!--Columna-->
                <th>Telefono</th><!--Columna-->
                <th>N. Contrato</th><!--Columna-->
                <th>N. Cuenta</th><!--Columna-->
                <th>Notificar</th><!--Columna-->
            </tr>
            <tr class="show">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr class="show">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr class="show">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr class="show">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr class="show">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table> 
        <button class="btn-n1">REGISTRAR CLIENTE </button> 
        <table cellpadding="0" cellspacing="0" border="0" align="center"> 
    </div>  
 </center>    
<button class="btn-n2">REGRESAR</button>
`

let boton1 = document.querySelectorAll('.btn-n0');
boton1.forEach(boton => {
  boton.addEventListener('click', ()=>{
    window.location.href = "../../index.html";
  })  
})

let boton3 = document.querySelectorAll('.btn-n2');
boton3.forEach(boton => {
  boton.addEventListener('click', ()=>{
    window.location.href = "../bienvenido/bienvenido.html";
  })  
})