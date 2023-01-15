import { consultaActividad } from "./PlanetaAPI.js";
import { creaActividad } from "./PlanetaAPI.js";
import { borraActividad } from "./PlanetaAPI.js";
import { Actividad } from "./Actividad.js";

window.addEventListener("load", async () => {
  const resultadoConsulta = await consultaActividad();

  //variables de elementos del DOM
  const fragmento = document.createDocumentFragment();
  const formularioHTML = document.querySelector("#formulario");
  const nombreFormHTML = document.getElementById("nombre");
  const direccionFormHTML = document.getElementById("direccion");
  const contactoFormHTML = document.getElementById("contacto");
  const horarioFormHTML = document.getElementById("horario");
  const precioFormHTML = document.getElementById("precio");
  const descripcionFormHTML = document.getElementById("descripcion");
  const botonGuardarFormHTML = document.getElementById("btn-guardar");
  const botonBorradoHTML = document.querySelector("#botonBorrado");

  //creación de un array de objetos desde el resultado de la consulta
  let actividades = resultadoConsulta.map(
    (actividades) =>
      new Actividad(
        actividades.nombre,
        actividades.direccion,
        actividades.contacto,
        actividades.dias,
        actividades.horario,
        actividades.reserva,
        actividades.precio,
        actividades.descripcion
      )
  );
//Pinta todos los objetos de la colección en pantalla
  actividades.forEach((actividad) => {
    const tarjeta = document.createElement("div");
    tarjeta.innerHTML = actividad.pintaActividad();
    fragmento.appendChild(tarjeta);
    
  });

  //funcion para mostrar el formulario y ocultar la lista al hacer clic en el botón Nuevo
  const mostrarFormulario = () => {
    formularioHTML.style.display = "block";
    document.getElementById("contenedor-actividades").style.display = "none";
  };

  //llamada a la función de mostrar formulario desde evento clic del botón Nuevo
  document
    .getElementById("btn-nuevo")
    .addEventListener("click", mostrarFormulario);

  //funcion para convertir los datos pasados por formulario a un objeto JSON, e inserción de los datos en la BD
  botonGuardarFormHTML.addEventListener("click", () => {
    const obj = {
      nombre: nombreFormHTML.value,
      direccion: direccionFormHTML.value,
      contacto: contactoFormHTML.value,
      horario: horarioFormHTML.value,
      precio: precioFormHTML.value,
      descripcion: descripcionFormHTML.value,
    };
    const nuevaActividad = JSON.stringify(obj);
    //pasamos el objeto Json creado la función de inserción de datos de la API
    creaActividad(nuevaActividad);
  });

  
    botonBorradoHTML.addEventListener(
      "click",
      borraActividad(this.actividades.nombre)
    );
  
});
