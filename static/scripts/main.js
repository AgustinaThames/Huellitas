
const toggle = document.querySelector('.toggle')
const links = document.querySelector('.links')

toggle.addEventListener('click', () => {
    toggle.classList.toggle('rotate')
    links.classList.toggle('inactive')
})


function formulario() {
  var name = document.getElementById("nombre").value 
  var apellido = document.getElementById("apellido").value 
  var dni = document.getElementById("dni").value
  var correo = document.getElementById("mail").value 
  var telefono = document.getElementById("telefono").value 
  var direccion = document.getElementById("direccion").value 
  var hogar = document.getElementById("hogar").value 
  var mascotas = document.getElementById("mascotas").value 
  var convivientes = document.getElementById("convivientes").value 

  var contieneArroba = false
  if (correo.includes('@')){
    contieneArroba = true
  }
  if (name.length == 0 || apellido.length == 0 || dni.length == 0 || correo.length == 0 || telefono.length == 0 || direccion.length == 0 || hogar.length == 0 || mascotas.length  == 0 || convivientes.length == 0 || contieneArroba == false)  {
    alert("Faltan ingresar datos")
    return 0;
  }
  
  
  $.ajax({ 
    url:"/formulario", 
    type:"POST", 
    data: {"nombre":name,
          "apellido": apellido,
          "dni": dni,
          "mail": correo,
          "telefono": telefono,
          "direccion": direccion,
          "hogar": hogar,
          "mascotas": mascotas,
          "convivientes": convivientes
          }, 

    success: function(response){  
      datos = response
      //if(datos == true) {
      alert(`Se registro su respuesta`)
      location.href= '/'
      //}
    }, 
    error: function(error){ 
      console.log(error); 
  }, });

}

function formularioRefugio() {
  var usuario = document.getElementById("usuario")
  var password = document.getElementById("password") 
  console.log(password.value)
/*
if (usuario.value.length == 0 || password.value.length == 0)  {
    alert("Faltan ingresar datos")
    password.value = "";
  }
else{
  document.getElementById("formularioRefugio").submit()
  location.href='/borrar'
}*/
  document.getElementById("formularioRefugio").submit()
  /*location.href='/refugio'*/
  
  $.ajax({ 
    url:"/refugio", 
    type:"POST", 
    data: {"usuario": usuario,
          "password": password,
          }, 

    success: function(response){  
      datos = response
      //console.log(datos)
      console.log('Llega al java')
      location.href= '/opcionesAdmin'
      if(datos == true) {
        alert(`Se registro su respuesta`)
      }
    }, 
    error: function(error){ 
      console.log(error); 
  }, });

}

function redirigirAdminBorrar() {
  location.href = "/borrar";
}

function redirigirAdminCargar() {
  location.href = "/cargarPerfiles";
}

function redirigirAdminModificar() {
  location.href = "/modificarPerfiles";
}

function pagAnterior() {
  location.href = "/opcionesAdmin";
}

function cargarPerfiles() {
  var name = document.getElementById("nombre").value 
  var sexo = document.getElementById("sexo").value 
  var edad = document.getElementById("edad").value
  var raza = document.getElementById("raza").value 
  var tamaño = document.getElementById("tamaño").value 
  var informacion = document.getElementById("informacion").value 
  var imagen = document.getElementById("imagen").value 
  let formData = new FormData($("#form1")[0])
  console.log(formData)

  if (name.length == 0 || sexo.length == 0 || edad.length == 0 || raza.length == 0 || tamaño.length == 0 || informacion.length == 0 || imagen.length == 0)  {
    alert("Faltan ingresar datos")
  }


  let info = {"nombre":name,
          "sexo": sexo,
          "edad": edad,
          "raza": raza,
          "tamaño": tamaño,
          "informacion": informacion,
          "imagen": imagen
          };
  console.log(info);
  $.ajax({ 
    url:"/cargarPerfiles", 
    type:"POST", 
    data: {"nombre":name,
          "sexo": sexo,
          "edad": edad,
          "raza": raza,
          "tamaño": tamaño,
          "informacion": informacion,
          "imagen": imagen
          }, 

    success: function(response){  
      datos = response
      if(datos == true) {
        alert(`Se registro su respuesta`)
      }
    }, 
    error: function(error){ 
      console.log(error); 
  }, });

}


function borrarPerfilGato() {
  nombreGato = document.getElementById("nombreGato")
  
  $.ajax({ 
    url:"/opcionesBorrarGato", 
    type:"POST", 
    data: {"nombreGato": nombreGato,
          }, 

    success: function(response){  
      datos = response
    }, 
    error: function(error){ 
      console.log(error); 
  }, });

}

function borrarPerfilPerro() {
  var nombre = document.getElementById("nombre").value 
  
  $.ajax({ 
    url:"/opcionesBorrarPerro", 
    type:"POST", 
    data: {"nombre": nombre,
          }, 

    success: function(response){  
      datos = response
    }, 
    error: function(error){ 
      console.log(error); 
  }, });

}


function seleccionar(animal) {
  animal = animal
  console.log(animal)
  $.ajax({ 
    url:"/seleccionarGato", 
    type:"POST", 
    data: {"animal": animal,
          }, 

    success: function(response){  
      console.log(animal)
      location.href= '/seleccionarGato'
      datos = (response); 
      console.log(datos)
      
    }, 
    error: function(error){ 
      console.log(error); 
  }, });
}

function seleccionar(animal) { 
  animal = animal
  console.log(animal)
  $.ajax({ 
    url:"/seleccionarPerro", 
    type:"POST", 
    data: {"animal": animal,
          }, 

    success: function(response){  
      console.log(animal)
      location.href= '/seleccionarPerro'
      datos = (response); 
      console.log(datos)
      
    }, 
    error: function(error){ 
      console.log(error); 
  }, });
}



function probarModal(nombre) {
  dialog = document.getElementById("modal"+nombre);
  dialog.showModal();
}

function ocultarModal(nombre) {
  dialog = document.getElementById("modal"+nombre);
  dialog.close();
}

function redirigir(animal) {
  
  console.log(animal)
  $.ajax({ 
    url:"/seleccionarAnimal", 
    type:"POST", 
    data: {"animal": animal,
          }, 

    success: function(response){  
      location.href = "/formulario";
      datos = (response); 
      console.log(datos)
      
    }, 
    error: function(error){ 
      console.log(error); 
  }, });
  
  
}

function redirigirRefugio() {
  location.href = "/formularioRefugio";
}

function deseleccionar(check) {
  if (document.getElementById(check).checked == true) {
    document.getElementById(check).checked = false
  }
}



function eliminar(nombre, mascota) {
  nombre = nombre
  mascota = mascota
  console.log(mascota)
  console.log(nombre)
  $.ajax({ 
    url:"/eliminar", 
    type:"POST", 
    data: {"nombre": nombre,
           "mascota": mascota,
          }, 

    success: function(response){  
      datos = (response); 
      console.log(datos)
      console.log(nombre)
      document.getElementById(nombre).remove()
      alert("Se eliminó a " + datos)
      
    }, 
    error: function(error){ 
      console.log(error); 
  }, });
}

function modificar(nombre, mascota) {
  nombre = nombre
  mascota = mascota
  info = document.getElementById("info").value;
  console.log(mascota)
  console.log(nombre)
  console.log(info)
  $.ajax({ 
    url:"/modificar", 
    type:"POST", 
    data: {"nombre": nombre,
           "mascota": mascota,
           "info": info,
          }, 

    success: function(response){  
      datos = (response); 
      console.log(datos)
      console.log(nombre)
      alert("Se modificó " + datos)
      
    }, 
    error: function(error){ 
      console.log(error); 
  }, });
}

function modificarPerfilGato() {
  nombreGato = document.getElementById("nombreGato")
  console.log(nombreGato)
  
  $.ajax({ 
    url:"/opcionesModificarGato", 
    type:"POST", 
    data: {"nombreGato": nombreGato,
          }, 

    success: function(response){  
      datos = response
    }, 
    error: function(error){ 
      console.log(error); 
  }, });

}

function detectarImagen() {
  let cargadorImagenes = document.getElementById("selecArchivo");
  if(cargadorImagenes.files.length > 0) {
    //Tengo imagenes subidas
    document.getElementById("selecArchivoLabel").innerHTML = "Imágen Adjunta";
  }
  else {
    document.getElementById("selecArchivoLabel").innerHTML = "Adjunte una imagen ";
  }
}