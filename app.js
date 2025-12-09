let estudiantes = [
    {

        Año: '3ro',
        Nombre: 'Sofia',
        Apellido: 'Flores',
        Nota: 7

    },
    {
        Año: '4to',
        Nombre: 'Malena',
        Apellido: 'Quinteros',
        Nota: 9
    },
    {
        Año: '5to',
        Nombre: 'merlina',
        Apellido: 'cerezal',
        Nota: 9
    }

]

//Guardar inputs y boton
let alumno = document.querySelector('#alumno')
let botonBuscar = document.querySelector('#botonBuscar')
let parrafo = document.querySelector('p')
let apellido
let posicion
botonBuscar.onclick = function () {
    //Esto se ejecuta en el boton
    posicion = -1
    //Guardar lo que escribe el usuario
    apellido = alumno.value
    //Buscar el estudiante por apellido
    for (let index = 0; index < estudiantes.length; index++) {
        if (estudiantes[index].Apellido == apellido) {
            posicion = index
        }
    }
    if (posicion > -1) {
        parrafo.textContent = `${estudiantes[posicion].Apellido}, ${estudiantes[posicion].Nombre} ${estudiantes[posicion].Nota}`
    } else {
        parrafo.textContent = 'No se encuentra el usuario'
    }
    
}