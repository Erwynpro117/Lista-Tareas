function crearElementoTarea(){
    // Crear los elemntos html de la tarea
    const tareaContenedor = document.createElement('div');
    const tareaTexto = document.createElement('p');
    const iconoContenedor = document.createElement('div');
    const iconoCompletada = document.createElement('i');
    const iconoEliminar = document.createElement('i');

    /* Creamos la estructura de la tarea */

    iconoContenedor.append(iconoCompletada , iconoEliminar);
    tareaContenedor.append(tareaTexto , iconoContenedor);

    /* Agregamos las clases a los contenedores de la tarea */

    tareaContenedor.classList.add('tarea');
    tareaTexto.classList.add('tarea-texto');
    iconoContenedor.classList.add('tarea-iconos');
    iconoCompletada.classList.add('bis' , 'bi-dash-circle');
    iconoEliminar.classList.add('bis' , 'bi-trash2');


    console.log(tareaContenedor);
}

buttonAgregar.addEventlistener("click". agregarTarea);

function agregarTarea() {

    const elemntoTarea = crearElementoTarea ();
    console.log(elemntoTarea);
}