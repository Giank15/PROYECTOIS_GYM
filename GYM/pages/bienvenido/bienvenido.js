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
     <div class="contenedor">
         <h1>BIENVENIDO, ¿QUE TE GUSTARIA REALIZAR?</h1>
         <h2>Selecciona una opcion para continuar </h2>
     </div>

     <div class="contenedor-imagen">
         <div class="im">
         <img src="../../images/MenuEmpleado (3).png" alt="imagen no encontrada" width="200px" >
         <h3>Registrar Cliente Fijo</h3>
         <button class="btn-n1">REGISTRAR </button>
         </div>
         <div class="ime">
         <img src="../../images/MenuEmpleado (2).png" alt="imagen no encontrada" width="200px">
         <h3 >Cobro Cliente Eventual</h3>
         <button class="btn-n2">COBRAR</button> 
         </div>
         <div class="imee">
         <img src="../../images/MenuEmpleado (1).png" alt="imagen no encontrada" width="200px">
         <h3 >Asignar Horarios Caschs</h3>
         <button class="btn-n3">ASIGNAR</button> 
         </div>
     </div>
  </div>
`
let boton1 = document.querySelectorAll('.btn-n0');
boton1.forEach(boton => {
  boton.addEventListener('click', ()=>{
    window.location.href = "../../index.html";
  })  
})

let boton2 = document.querySelectorAll('.btn-n1');
boton2.forEach(boton => {
  boton.addEventListener('click', ()=>{
    window.location.href = "../clienteFijo/clienteFijo.html";
  })  
})

let boton3 = document.querySelectorAll('.btn-n2');
boton3.forEach(boton => {
  boton.addEventListener('click', ()=>{
    window.location.href = "../clienteEventual/clientee.html";
  })  
})

let boton4 = document.querySelectorAll('.btn-n3');
boton4.forEach(boton => {
  boton.addEventListener('click', ()=>{
    window.location.href = "../asignarHorario/asignacion.html";
  })  
})