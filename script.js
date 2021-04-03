const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let contador = 0


function addTodo() {

    const tituloTarea = prompt('Que tarea desea agregar?')
    if (tituloTarea != undefined) {
        contador++
        itemCountSpan.innerHTML = contador
        const item = document.createElement('li')
        item.innerHTML = tituloTarea
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.value = 1;
        checkbox.name = "todo[]";
        list.appendChild(item)
        item.appendChild(checkbox)


    }
}



function checkedItem() { // esta funcion esta sin terminar,seria la funcion que recorre la lista completa y dsp deberia contar cuantas tareas tengo pendientes
    let contador = 0;
    for (let index = 0; index < list.length; index++) {
        console.log(list[index])
            // if(list[index])

    }

}