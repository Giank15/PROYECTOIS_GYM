import './style.css'
import axios from 'axios'
import { IUsuario } from './interfaces/IUsuarios';

const httpAxios = axios.create({
  baseURL:`https://ing-soft-5a-default-rtdb.firebaseio.com/`
})

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `<div>
<center>
<div class="contenedor-formulario contenedor">
<div class="imagen-formulario" > <img src="./images/logo.JPG" alt="" ></div>
<form class="formulario" id="formulario">
<div class="logo"><img src="./images/LOGO NARANJA.png" alt="1200px" width="100px" height="105px"></div>
<div class="texto-formulario">
<h2>Iniciar Sesión</h2>
<p>Ingrese sus credenciales por favor </p>
</div>
<div class="input">
<label for=""></label>
<input placeholder="Usuario" type="text" id="user">
</div>
<div class="input contraseña">
<label for=""></label>
<input placeholder="Contraseña" type="password" id="pass">
</div>
<div class="input">
<label for=""></label><br>
<a type="submit" class="ingresar">Ingresar</a>
</div>
</form>
</div>
</center>
</div>`

/*let boton1 = document.querySelectorAll('.ingresar');
boton1.forEach(boton => {
  boton.addEventListener('click', ()=>{
    window.location.href = "/pages/bienvenido/bienvenido.html";
  })  
})*/

const ingresar = document.querySelector('.ingresar')!

const user = document.querySelector<HTMLInputElement>('#user')!
const contrasena = document.querySelector<HTMLInputElement>('#pass')!

ingresar.addEventListener('click', async()=>{
  const {data} = await httpAxios.get(`Usuarios.json`)
  const usuarios:IUsuario[] = []
  for (let id of Object.keys(data))
  {
      usuarios.push({
          id,
          ...data[id]
      })
  }
  console.log(usuarios);
  for(const usuario of usuarios){
    const validez = user.value;
    if(user.value==usuario.usuario && contrasena.value==usuario.contrasena){
      alert(`Sesión iniciada. Bienvenido Usuario! :D`);
      window.location.href = "./pages/bienvenido/bienvenido.html";
    }
    else if(validez.length == 0){
      alert('No has escrito nada en el usuario');
    }
    else{
      alert(`Datos incorrectos. Vuelva a intentarlo...`);
    }
  }
})

/*document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario")!.addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
  evento.preventDefault();
  var usuario = document.getElementById('usuario').value;
  if(usuario.length == 0) {
    alert('No has escrito nada en el usuario');
    return;
  }
  var clave = document.getElementById('clave').value;
  if (clave.length < 6) {
    alert('La clave no es válida');
    return;
  }
  this.submit();
}*/

/*const formulario = document.querySelector<HTMLFormElement>('.formulario')!

formulario.addEventListener('submit', async() => {
  const usuario = user.value;
})*/