import axios from 'axios'
import './estilos.css'
import {IClientesFijos} from '../../interfaces/IClientesFijos'


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
    
        <button  class="btn-n0">Cerrar Sesión</button> <br>
       
        <div class="img3">
    <img src="../../images/Logout.png" width="60"/>
        </div>      
    </div>

    <h1 id="realizar">REGISTRO DE CLIENTES FIJOS</h1>
    

    <form action="">
        <div class="f1">
        <label for="id">ID</label> <br>
        <input id="id" class="field" > <br/>

        <label for="nombre">Nombres</label><br>
        <input id="nombres" class="field" > <br/>

        <label for="apellidos">Apellidos</label> <br>
        <input id="apellidos" class="field" > <br/>

        <label for="correo">Correo electrónico</label> <br>
        <input id="correo" class="field" > <br/>

        <label for="cedula">Cedula</label> <br>
        <input id="cedula" class="field" > <br/>
        </div>

        <div class="f2">
        <label for="telefono">Teléfono</label><br>
        <input id="telefono" class="field" > <br/>
        
        <label for="direccion">Dirección</label> <br>
        <input id="direccion" class="field" > <br/>

        <label for="banco">Banco</label> <br>
        <input id="banco" class="field" > <br/>

		<label for="cuenta">N° Cuenta</label> <br>
        <input id="cuenta" class="field" > <br/>
		
		<label for="fechaNacimiento">Fecha de nacimiento</label> <br>
        <input id="fechaNacimiento" class="field" > <br/>
        </div>
    </form>
    <button class="btn-n1">CANCELAR</button> <br> 
    <button class="btn-n2">REGISTRAR</button>
` 

const ID = document.querySelector<HTMLInputElement>('#id')!
const nombres = document.querySelector<HTMLInputElement>('#nombres')!
const apellidos = document.querySelector<HTMLInputElement>('#apellidos')!
const correo = document.querySelector<HTMLInputElement>('#correo')!
const cedula = document.querySelector<HTMLInputElement>('#cedula')!
const telefono = document.querySelector<HTMLInputElement>('#telefono')!
const direccion = document.querySelector<HTMLInputElement>('#direccion')!
const banco = document.querySelector<HTMLInputElement>('#banco')!
const cuenta = document.querySelector<HTMLInputElement>('#cuenta')!
const fechaNacimiento = document.querySelector<HTMLInputElement>('#fechaNacimiento')!

const asignarValores = ()=>{
  const body: IClientesFijos = {
      id: ID.value,
      nombres: nombres.value,
      apellidos: apellidos.value,
      correo: correo.value,
      cedula: cedula.value,
      telefono: telefono.value,
      direccion: direccion.value,
      Banco: banco.value,
      cuenta: cuenta.value,
      fechaNacimiento: fechaNacimiento.value
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
    window.location.href = "../clienteFijo/clienteFijo.html";
  })  
})

let boton3 = document.querySelectorAll('.btn-n2');
boton3.forEach(boton => {
  boton.addEventListener('click', async ()=>{

    const body = asignarValores();
    const {data} = await httpAxios.put<IClientesFijos>(`CLIENTESFIJOS/${ID.value}.json`, body);

    alert(`El cliente ${data.nombres+' '+data.apellidos} fue grabado con éxito...`);
    window.location.href = "../clienteFijo/clienteFijo.html";
  })  
})
