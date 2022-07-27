import './estilos.css'
import axios from 'axios'
import { IClientesFijos } from '../../interfaces/IClientesFijos'

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
        <h1>CLIENTES FIJOS</h1>
    </div>
    <div id="busqueda">
      <input id="buscar" class="field" >
      <button class="btn-n3">CONSULTAR POR CEDULA</button>
      <button class="btn-n4">CANCELAR</button> 
    </div></br>
    <div>
      <table id="tablita" class="contenedor-fila" >
          <tr> <!--Fila-->
              <th>Cedula</th> <!--Columna-->
              <th>Nombre</th> <!--Columna-->
              <th>Edad</th><!--Columna-->
              <th>Direccion</th><!--Columna-->
              <th>Telefono</th><!--Columna-->
              <th>Banco</th><!--Columna-->
              <th>N° Cuenta</th><!--Columna-->
              <th>Modificar</th><!--Columna-->
              <th>Eliminar</th><!--Columna-->
          </tr>
      </table> 
      <button class="btn-n1">REGISTRAR CLIENTE</button>
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
    const {data} = await httpAxios.get(`CLIENTESFIJOS.json`)
    const clientes:IClientesFijos[] = []
    for (let id of Object.keys(data)){
      clientes.push({
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

    for (const cliente of clientes){
      if(cliente.cedula.includes(buscar.value)){
        const row = tabla.insertRow();
        const cell = row.insertCell();
        cell.innerHTML=`${cliente.cedula}`;
        const cell2 = row.insertCell();
        cell2.innerHTML=`${cliente.nombres+' '+cliente.apellidos}`;
        const cell3 = row.insertCell();
        cell3.innerHTML=`${cliente.fechaNacimiento}`;
        const cell4 = row.insertCell();
        cell4.innerHTML=`${cliente.direccion}`;
        const cell5 = row.insertCell();
        cell5.innerHTML=`${cliente.telefono}`;
        const cell6 = row.insertCell();
        cell6.innerHTML=`${cliente.Banco}`;
        const cell7 = row.insertCell();
        cell7.innerHTML=`${cliente.cuenta}`;
        const cell8 = row.insertCell();
        cell8.innerHTML=`<button class="btn-n5" value="${cliente.id}">Actualizar</button>`;
        const cell9 = row.insertCell();
        cell9.innerHTML=`<button class="btn-n6" value="${cliente.id}">Eliminar</button>`;
      }
    }

    document.querySelectorAll('.btn-n6').forEach(boton => {
      boton.addEventListener('click', async ()=>{
        const codigo = ((boton as HTMLButtonElement).value);
        //console.log(codigo);
  
        const {data} = await httpAxios.delete<IClientesFijos>(`CLIENTESFIJOS/${codigo}.json`);
      
        alert(`El cliente fue eliminado con éxito...`);
      })  
    })
  
    document.querySelectorAll('.btn-n5').forEach(boton => {
      boton.addEventListener('click', async ()=>{
        const codigo = ((boton as HTMLButtonElement).value);
        
        const {data} = await httpAxios.get<IClientesFijos>(`CLIENTESFIJOS/${codigo}.json`)
        console.log(data.id);
        
        const formulario = document.querySelector('.formulario')!
        formulario.innerHTML+=`
        <form action="">
          <div class="f1">
          <label for="id">ID</label> <br>
          <input id="id" class="field" value="${data.id}"> <br/>
  
          <label for="nombre">Nombres</label><br>
          <input id="nombres" class="field" value="${data.nombres}"> <br/>
  
          <label for="apellidos">Apellidos</label> <br>
          <input id="apellidos" class="field" value="${data.apellidos}"> <br/>
  
          <label for="correo">Correo electrónico</label> <br>
          <input id="correo" class="field" value="${data.correo}"> <br/>
  
          <label for="cedula">Cedula</label> <br>
          <input id="cedula" class="field" value="${data.cedula}"> <br/>
          </div>
  
          <div class="f2">
          <label for="telefono">Teléfono</label><br>
          <input id="telefono" class="field" value="${data.telefono}"> <br/>
          
          <label for="direccion">Dirección</label> <br>
          <input id="direccion" class="field" value="${data.direccion}"> <br/>
  
          <label for="banco">Banco</label> <br>
          <input id="banco" class="field" value="${data.Banco}"> <br/>
  
          <label for="cuenta">N° Cuenta</label> <br>
          <input id="cuenta" class="field" value="${data.cuenta}"> <br/>
      
          <label for="fechaNacimiento">Fecha de nacimiento</label> <br>
          <input id="fechaNacimiento" class="field" value="${data.fechaNacimiento}"> <br/>
          </div>
        </form>
        <button class="btn-n7">Guardar</button>
        <button class="btn-n8">Cancelar</button>
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
  
        let btn1 = document.querySelectorAll('.btn-n7');
        btn1.forEach(boton => {
          boton.addEventListener('click', async ()=>{
          
            const body = asignarValores();
            const {data} = await httpAxios.put<IClientesFijos>(`CLIENTESFIJOS/${ID.value}.json`, body);
          
            alert(`El cliente ${data.nombres+' '+data.apellidos} fue modificado con éxito...`);
            window.location.href = "../clienteFijo/clienteFijo.html";
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
})

let boton5 = document.querySelectorAll('.btn-n4');
boton5.forEach(boton => {
  boton.addEventListener('click', ()=>{
    window.location.reload();
  })  
})

window.addEventListener('load', async()=>{
  const {data} = await httpAxios.get(`CLIENTESFIJOS.json`)
  const clientes:IClientesFijos[] = []
  for (let id of Object.keys(data))
  {
    clientes.push({
        id,
        ...data[id]
    })
  }

  console.log(clientes);
  for (const cliente of clientes){
    const row = tabla.insertRow();
    const cell = row.insertCell();
    cell.innerHTML=`${cliente.cedula}`;
    const cell2 = row.insertCell();
    cell2.innerHTML=`${cliente.nombres+' '+cliente.apellidos}`;
    const cell3 = row.insertCell();
    cell3.innerHTML=`${cliente.fechaNacimiento}`;
    const cell4 = row.insertCell();
    cell4.innerHTML=`${cliente.direccion}`;
    const cell5 = row.insertCell();
    cell5.innerHTML=`${cliente.telefono}`;
    const cell6 = row.insertCell();
    cell6.innerHTML=`${cliente.Banco}`;
    const cell7 = row.insertCell();
    cell7.innerHTML=`${cliente.cuenta}`;
    const cell8 = row.insertCell();
    cell8.innerHTML=`<button class="btn-n5" value="${cliente.id}">Actualizar</button>`;
    const cell9 = row.insertCell();
    cell9.innerHTML=`<button class="btn-n6" value="${cliente.id}">Eliminar</button>`;
  }

  document.querySelectorAll('.btn-n6').forEach(boton => {
    boton.addEventListener('click', async ()=>{
      const codigo = ((boton as HTMLButtonElement).value);
      //console.log(codigo);

      const {data} = await httpAxios.delete<IClientesFijos>(`CLIENTESFIJOS/${codigo}.json`);
    
      alert(`El cliente fue eliminado con éxito...`);
    })  
  })

  document.querySelectorAll('.btn-n5').forEach(boton => {
    boton.addEventListener('click', async ()=>{
      const codigo = ((boton as HTMLButtonElement).value);
      
      const {data} = await httpAxios.get<IClientesFijos>(`CLIENTESFIJOS/${codigo}.json`)
      console.log(data.id);
      
      const formulario = document.querySelector('.formulario')!
      formulario.innerHTML+=`
      <form action="">
        <div class="f1">
        <label for="id">ID</label> <br>
        <input id="id" class="field" value="${data.id}"> <br/>

        <label for="nombre">Nombres</label><br>
        <input id="nombres" class="field" value="${data.nombres}"> <br/>

        <label for="apellidos">Apellidos</label> <br>
        <input id="apellidos" class="field" value="${data.apellidos}"> <br/>

        <label for="correo">Correo electrónico</label> <br>
        <input id="correo" class="field" value="${data.correo}"> <br/>

        <label for="cedula">Cedula</label> <br>
        <input id="cedula" class="field" value="${data.cedula}"> <br/>
        </div>

        <div class="f2">
        <label for="telefono">Teléfono</label><br>
        <input id="telefono" class="field" value="${data.telefono}"> <br/>
        
        <label for="direccion">Dirección</label> <br>
        <input id="direccion" class="field" value="${data.direccion}"> <br/>

        <label for="banco">Banco</label> <br>
        <input id="banco" class="field" value="${data.Banco}"> <br/>

		    <label for="cuenta">N° Cuenta</label> <br>
        <input id="cuenta" class="field" value="${data.cuenta}"> <br/>
		
		    <label for="fechaNacimiento">Fecha de nacimiento</label> <br>
        <input id="fechaNacimiento" class="field" value="${data.fechaNacimiento}"> <br/>
        </div>
      </form>
      <button class="btn-n7">Guardar</button>
      <button class="btn-n8">Cancelar</button>
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

      let btn1 = document.querySelectorAll('.btn-n7');
      btn1.forEach(boton => {
        boton.addEventListener('click', async ()=>{
        
          const body = asignarValores();
          const {data} = await httpAxios.put<IClientesFijos>(`CLIENTESFIJOS/${ID.value}.json`, body);
        
          alert(`El cliente ${data.nombres+' '+data.apellidos} fue modificado con éxito...`);
          window.location.href = "../clienteFijo/clienteFijo.html";
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