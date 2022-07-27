import axios from 'axios'
import './estilos.css'
import { IClientesEventuales } from '../../interfaces/IClientesEventuales'

const httpAxios = axios.create({
    baseURL:`https://ing-soft-5a-default-rtdb.firebaseio.com/`
  })
    
const app = document.querySelector('#app')!

app.innerHTML = `
<div class="inicio">
<div class="img1">
<img src="../../images/LOGO BLANCO.png" width="60"/>
</div>
<div class="img2">
<img class="mediana" src="../../images/Workout (500 × 130 px).png" width="60"/>
</div>

<button class="btn-n0">Cerrar Sesión</button> <br>

<div class="img3">
<img src="../../images/Logout.png" width="60"/>
</div>      
</div>

<h1 id="realizar">REALIZAR COBROS A CLIENTES EVENTUALES</h1>


<form action="">
<label for="id">ID</label><br>
<input id="id" class="field"> <br/>

<label for="cedula">Cedula</label><br>
<input id="cedula" class="field"> <br/>

<label for="nombre">Nombre</label><br>
<input id="nombres" class="field"> <br/>

<label for="apellidos">Apellidos</label> <br>
<input id="apellidos" class="field"> <br/>
        
<label for="telefono">Telefono</label><br>
<input id="telefono" class="field"> <br/>

<label for="direccion">Dirección</label> <br>
<input id="direccion" class="field"> <br/>

<div class="f">

<label for="hora de ingreso">Hora de ingreso</label> <br>
<input type="datetime-local" id="horaIngreso" class="field"> <br/>

<label for="hora de salida">Hora de salida</label> <br>
<input type="datetime-local" id="horaSalida" class="field"> <br/>
</div>

<div class="coach">
    <label for="coach">Coach</label> <br>
    <select class="fields" id="coa" >
        <option disabled selected> COACH QUE ATENDIO </option>
        <option>Martin Intriago</option>
        <option>Miguel Bermudez</option>
        <option>Ninguno</option>
    </select>
</div>
        
<div class="t">
<label for="tipo de pago">Tipo de pago</label> <br>
</div>

<div class="checkbox">
<input type="checkbox" id="tipoPago" class="field" value="debito" />
</div>

<div class="debito">
<label for="debito">Debito</label>
</div>
<img id="img4" src="../../images/CC (1).png" width="40" /> <br>
 
<div class="check">
<input type="checkbox" id="tipoPago" class="field" value="credito" />
</div>

<div class="credito">
<label for="credito">Credito</label>
</div>
<img id="img5" src="../../images/CC (2).png" width="40" /> <br>

<div class="n">
<label for="cuenta">Número de cuenta:</label><br>
<input id="cuenta" class="field"> <br/>

<label for="banco">Nombre de la Institución Bancaria:</label><br>
<input id="banco" class="field"> <br/>
        
</div>
        
        
</form>

<label for="btn-modal" class="lbl-modal">COBRAR Y  GENERAR FACTURA</label>
<button class="btn-n1">REGRESAR</button>
`

const ID = document.querySelector<HTMLInputElement>('#id')!
const cedula = document.querySelector<HTMLInputElement>('#cedula')!
const nombres = document.querySelector<HTMLInputElement>('#nombres')!
const apellidos = document.querySelector<HTMLInputElement>('#apellidos')!
const telefono = document.querySelector<HTMLInputElement>('#telefono')!
const direccion = document.querySelector<HTMLInputElement>('#direccion')!
const horaIngreso = document.querySelector<HTMLInputElement>('#horaIngreso')!
const horaSalida = document.querySelector<HTMLInputElement>('#horaSalida')!
const coa = document.querySelector<HTMLSelectElement>('#coa')!
const tipoPago = document.querySelector<HTMLInputElement>('#tipoPago')!
const banco = document.querySelector<HTMLInputElement>('#banco')!
const cuenta = document.querySelector<HTMLInputElement>('#cuenta')!

const asignarValores = ()=>{
  const body: IClientesEventuales = {
      id: ID.value,
      nombres: nombres.value,
      apellidos: apellidos.value,
      cedula: cedula.value,
      telefono: telefono.value,
      coach: coa.value,
      direccion: direccion.value,
      tipoPago: tipoPago.value,
      banco: banco.value,
      cuenta: cuenta.value,
      horaEntrada: horaIngreso.value,
      horaSalida: horaSalida.value
  }
  return body;
}

let boton1 = document.querySelectorAll('.btn-n0');
boton1.forEach(boton => {
  boton.addEventListener('click', ()=>{
    window.location.href = "../../index.html";
  })  
})

let boton2 = document.querySelectorAll('.btn-n1');
boton2.forEach(boton => {
  boton.addEventListener('click', ()=>{
    window.location.href = "../bienvenido/bienvenido.html";
  })  
})

let boton3 = document.querySelectorAll('.lbl-modal');
boton3.forEach(boton => {
  boton.addEventListener('click', async ()=>{

    const body = asignarValores();
    const {data} = await httpAxios.put<IClientesEventuales>(`ClientesEventuales/${ID.value}.json`, body);

    alert(`Se esta generando la factura del cliente ${data.nombres+' '+data.apellidos}...`);
    window.location.href = "../bienvenido/bienvenido.html";
  })  
})