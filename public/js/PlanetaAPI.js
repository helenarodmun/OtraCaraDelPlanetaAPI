

async function consultaActividad() {
    return fetch('http://localhost:8080/actividades/')
        .then(function (resultadoEnBruto) { //función que recibe la respuesta de fetch
            return resultadoEnBruto.json(); //convertimos la respuesta en formato json
        })
        .then(function (actividad) {//recibe la respuesta con el formato json
            console.log(actividad);
            return actividad;
        })
        .catch(function () {
            alert("La consulta a la API falló");
        });

}

 function creaActividad(nuevaActividad){
    fetch('http://localhost:8080/actividades/nuevo',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: nuevaActividad
    });
    
}

function borraActividad(nombre){
    fetch('http://localhost:8080/actividades/borra/'+nombre,{
       
            method: 'DELETE'
          })
          .then(res => res.json())         
          .catch(function () {
            alert("El borrado de registró falló");
         
    });
}

export{ consultaActividad };
export{ creaActividad };
export{ borraActividad };