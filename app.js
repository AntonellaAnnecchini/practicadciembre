
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
//guardar lo que escribe el usuario
let alumno = document.querySelector('#alumno')
let botonBuscar = document.querySelector('#botonBuscar')
let Apellido
botonBuscar.onclick = function () {

//buscar el estudiante por appelido
Apellido = alumno.value
//mostrar todos sus datos

}