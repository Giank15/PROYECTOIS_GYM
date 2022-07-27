import axios from 'axios'
import './estilos.css'
import { ICoach } from '../../interfaces/ICoach'

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
<center>
   <div class="contenedor">
       <h1>ASIGNACION DE HORARIOS A LOS COACH</h1>
   </div> 
   <div id="busqueda">
     <input id="buscar" class="field" >
     <button class="btn-n3">CONSULTAR POR CEDULA</button>
     <button class="btn-n4">CANCELAR</button>  
   </div></br>
   <div>
        <table class="contenedor-fila" >
            <tr> <!--Fila-->
             <th>Cedula</th> <!--Columna-->
             <th>Nombre</th> <!--Columna-->
             <th>Edad</th><!--Columna-->
             <th>Direccion</th><!--Columna-->
             <th>Telefono</th><!--Columna-->
             <th>N. Contrato</th><!--Columna-->
             <th>Dias</th><!--Columna-->
             <th>Hora de entranamiento</th><!--Columna-->
             <th>Asignar</th><!--Columna-->
            </tr>
        </table>
        <button class="btn-n2">REGRESAR</button>
        <table cellpadding="0" cellspacing="0" border="0" align="center"> 
   </div>  
</center>
<div class="formulario"></div>
`
const tabla = document.querySelector<HTMLTableElement>('.contenedor-fila')!

let boton1 = document.querySelectorAll('.btn-n0');
boton1.forEach(boton => {
  boton.addEventListener('click', ()=>{
    window.location.href = "../../index.html";
  })  
})

let boton2 = document.querySelectorAll('.btn-n1');
boton2.forEach(boton => {
  boton.addEventListener('click', ()=>{
    window.location.href = "../registroClienteFijo/registro.html";
  })  
})

let boton3 = document.querySelectorAll('.btn-n2');
boton3.forEach(boton => {
  boton.addEventListener('click', ()=>{
    window.location.href = "../bienvenido/bienvenido.html";
  })  
})

const buscar = document.querySelector<HTMLInputElement>('#buscar')!

let boton4 = document.querySelectorAll('.btn-n3');
boton4.forEach(boton => {
  boton.addEventListener('click', async()=>{
    const {data} = await httpAxios.get(`COACH.json`)
    const coachs:ICoach[] = []
    for (let id of Object.keys(data)){
      coachs.push({
          id,
          ...data[id]
      })
    }
    const elmtTable = document.getElementById('tablita')!
    const tableRows = elmtTable.getElementsByTagName('tr')!
    const rowCount = tableRows.length;

    for (var x=rowCount-1; x>0; x--) {
       tabla.deleteRow(x);
    }

    for (const coach of coachs){
      if(coach.cedula.includes(buscar.value)){
        const row = tabla.insertRow();
        const cell = row.insertCell();
        cell.innerHTML=`${coach.cedula}`;
        const cell2 = row.insertCell();
        cell2.innerHTML=`${coach.nombres+' '+coach.apellidos}`;
        const cell3 = row.insertCell();
        cell3.innerHTML=`${coach.fechaNacimiento}`;
        const cell4 = row.insertCell();
        cell4.innerHTML=`${coach.direccion}`;
        const cell5 = row.insertCell();
        cell5.innerHTML=`${coach.telefono}`;
        const cell6 = row.insertCell();
        cell6.innerHTML=`${coach.contrato}`;
        const cell7 = row.insertCell();
        cell7.innerHTML=`${coach.dias}`;
        const cell8 = row.insertCell();
        cell8.innerHTML=`${coach.hora}`;
        const cell9 = row.insertCell();
        cell9.innerHTML=`<button class="btn-n5" value="${coach.id}">Modificar</button>`;
      }
    }

  })  
})

let boton5 = document.querySelectorAll('.btn-n4');
boton5.forEach(boton => {
  boton.addEventListener('click', ()=>{
    window.location.reload();
  })  
})

window.addEventListener('load', async()=>{
    const {data} = await httpAxios.get(`COACH.json`)
    const coachs:ICoach[] = []
    for (let id of Object.keys(data)){
      coachs.push({
          id,
          ...data[id]
      })
    }

    for (const coach of coachs){
        const row = tabla.insertRow();
        const cell = row.insertCell();
        cell.innerHTML=`${coach.cedula}`;
        const cell2 = row.insertCell();
        cell2.innerHTML=`${coach.nombres+' '+coach.apellidos}`;
        const cell3 = row.insertCell();
        cell3.innerHTML=`${coach.fechaNacimiento}`;
        const cell4 = row.insertCell();
        cell4.innerHTML=`${coach.direccion}`;
        const cell5 = row.insertCell();
        cell5.innerHTML=`${coach.telefono}`;
        const cell6 = row.insertCell();
        cell6.innerHTML=`${coach.contrato}`;
        const cell7 = row.insertCell();
        cell7.innerHTML=`${coach.dias}`;
        const cell8 = row.insertCell();
        cell8.innerHTML=`${coach.hora}`;
        const cell9 = row.insertCell();
        cell9.innerHTML=`<button class="btn-n5" value="${coach.id}">Modificar</button>`;
    }

    document.querySelectorAll('.btn-n5').forEach(boton => {
        boton.addEventListener('click', async ()=>{
          const codigo = ((boton as HTMLButtonElement).value);
          
          const {data} = await httpAxios.get<ICoach>(`COACH/${codigo}.json`)
          console.log(data.id);
          
          const formulario = document.querySelector('.formulario')!
          formulario.innerHTML+=`
          <form action="">
            <div class="f1">
            <label for="dias">ID</label> <br>
            <input id="dias" class="field" value="${data.dias}"> <br/>
            </div>
    
            <div class="f2">
            <label for="hora">Teléfono</label><br>
            <input id="hora" class="field" value="${data.hora}"> <br/>
            </div>
          </form>
          <button class="btn-n7">Guardar</button>
          <button class="btn-n8">Cancelar</button>
          `
          const dias = document.querySelector<HTMLInputElement>('#dias')!
          const hora = document.querySelector<HTMLInputElement>('#hora')!
    
          const asignarValores = ()=>{
            const body: ICoach = {
                id: data.id,
                nombres: data.nombres,
                apellidos: data.apellidos,
                direccion: data.direccion,
                telefono: data.telefono,
                contrato: data.contrato,
                correo: data.correo,
                cedula: data.cedula,
                fechaNacimiento: data.fechaNacimiento,
                dias: dias.value,
                hora: hora.value
            }
            return body;
          }
    
          let btn1 = document.querySelectorAll('.btn-n7');
          btn1.forEach(boton => {
            boton.addEventListener('click', async ()=>{
            
              const body = asignarValores();
              const {data} = await httpAxios.put<ICoach>(`COACH/${codigo}.json`, body);
            
              alert(`El cliente ${data.nombres+' '+data.apellidos} fue modificado con éxito...`);
              window.location.href = "../asignarHorario/asignacion.html";
            })  
          })
    
          let btn2 = document.querySelectorAll('.btn-n8');
          btn2.forEach(boton => {
            boton.addEventListener('click', ()=>{
              window.location.reload();
            })  
          })
    
        })
      })
})