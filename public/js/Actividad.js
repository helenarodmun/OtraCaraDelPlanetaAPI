import { consultaActividad } from "./PlanetaAPI.js";

export class Actividad {


    constructor(nombre,direccion,contacto,dias,horario,reserva,precio,descripcion){
        this.nombre = nombre;
        this.direccion = direccion;
        this.contacto = contacto;
        this.dias = dias;
        this.horario = horario;
        this.reserva = reserva;
        this.precio = precio;
        this.descripcion = descripcion;
        
    }

    pintaActividad(){

        
        const contenedor = document.getElementById('contenedor-actividades');
        contenedor.setAttribute('class', 'card-group, pt-4');
        //crea una tarjeta
        const tarjetaHTML = document.createElement('div');
        tarjetaHTML.setAttribute('class', 'card ');
        tarjetaHTML.style.marginTop = "40px";
        
      
        // Crea  la cabecera y el cuerpo de la tarjeta
        const cabeceraTarjetaHTML = document.createElement('div');
        cabeceraTarjetaHTML.setAttribute('class', 'card-header');
        cabeceraTarjetaHTML.style.backgroundColor = "lightskyblue";
        const cuerpoTarjetaHTML = document.createElement('div');
        cuerpoTarjetaHTML.setAttribute('class', 'card-body');
        cuerpoTarjetaHTML.style.backgroundColor = "lightcyan";
        // Crea el encabezado y le asigna el mombre de la actividad
        const nombreHTML = document.createElement('h5');
        nombreHTML.setAttribute('class', 'card-title');
        nombreHTML.textContent = this.nombre;
        
        // Crea el párrafo y le asigna los datos de la actividad              

        const direccionHTML = document.createElement('p');
        direccionHTML.setAttribute('class', 'card-text');
        direccionHTML.textContent = `DIRECCIÓN:  ${ this.direccion }`;

        const horarioHTML = document.createElement('p');
        horarioHTML.setAttribute('class', 'card-text');
        horarioHTML.textContent = `HORARIO:  ${ this.horario }`;

        const contactoHTML = document.createElement('p');
        contactoHTML.setAttribute('class', 'card-text');
        contactoHTML.textContent = `CONTACTO:  ${ this.contacto }`;

        const precioHTML = document.createElement('p');
        precioHTML.setAttribute('class', 'card-text');
        precioHTML.textContent = `PRECIO:  ${ this.precio }`;

        const descripcionHTML = document.createElement('p');
        descripcionHTML.setAttribute('class', 'card-text');
        descripcionHTML.textContent = `${ this.descripcion }`;

        //Agregar un botón a la tarjeta
        const botonBorradoHTML = document.createElement('button');
        botonBorradoHTML.setAttribute('class', "btn btn-danger");
        botonBorradoHTML.setAttribute('id', "botonBorrado");
        botonBorradoHTML.textContent = 'Borrar actividad';

        // Agrega la tarjeta
        contenedor.appendChild(tarjetaHTML);
      
        // Agrega la cabecera y el cuerpo a la tarjeta
        tarjetaHTML.appendChild(cabeceraTarjetaHTML);
        tarjetaHTML.appendChild(cuerpoTarjetaHTML);
      
        // Agregamos el nombre a la cabecera
        cabeceraTarjetaHTML.appendChild(nombreHTML);
            
        // Agregamos los datos al cuerpo
        cuerpoTarjetaHTML.append(direccionHTML,contactoHTML,horarioHTML,precioHTML);
        cuerpoTarjetaHTML.insertAdjacentElement("afterbegin", descripcionHTML);
        cuerpoTarjetaHTML.insertAdjacentElement("beforeend", botonBorradoHTML);

    }
  
    
}

