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


    tareaTexto.innerText = tareaEntrada.value;

    iconoCompletada.addEventListener('click', (e) => {
        
        const tareaElemento = e.target.parentNode.parentNode;
        const esCompletada = tareaElemento.classList.contains('tarea-completada')

        tareaElemento.classList.toggle('tarea-completada');

        if(esCompletada) {
            e.target.classList.remove('bi-dash-circle');
            e.target.classList.add('bi-chack-circle');
        } else {
            e.target.classList.remove('bi-check-circle');
            e.target.classList.add('bi-dash-circle');
        }
        

    })

    iconoEliminar.addEventListener('click', () => {



    })

}

buttonAgregar.addEventlistener("click". agregarTarea);

function agregarTarea() {

    const elemntoTarea = crearElementoTarea ();
    contenedorTareas.append(elemntoTarea);

    tareaEntrada.value = "";

    mensaje.textcontent = "Tarea"
}

document.addEventListener('keydown', () => {

    if(e.key == "Enter") {

    agregarTarea();

}
})

tareaEntrada.addEventListener('input', () => {
    if(tareaEntrada.Value.trim() === ""){
        mensaje.textcontent = 'Pon algo'
    }else{
        mensaje.textcontent = 'enter'
    }
})

tarea-completada
