const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
}
const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let contador = 0;
let resueltos = 0;


function addTodo() {
    const tituloTarea = prompt('Que tarea desea agregar?')
    if (tituloTarea != undefined && tituloTarea != '') {
        contador++
        itemCountSpan.innerHTML = contador
        const item = document.createElement('li')
        item.innerHTML = tituloTarea
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "todo";
        checkbox.value = contador;
        resueltos++;

        checkbox.addEventListener("click", checkedItem);

        list.appendChild(item)
        item.appendChild(checkbox)
        function checkedItem(e) { // esta funcion esta sin terminar,seria la funcion que recorre la lista completa y dsp deberia contar cuantas tareas tengo pendientes
            let res = 0;
            const checkeados = document.querySelectorAll(`input[name="todo"]:checked`)
            checkeados.forEach((chekbox) => {
                res++;
            })
            uncheckedCountSpan.innerHTML = resueltos - res;
            console.log(resueltos - res)

            /* var inputs = document.getElementsByTagName('input');
            for (var i = 0; i < inputs.length; i++) {
                if(inputs[i].checked)
                
                if (inputs[i] == 'checkbox' && inputs[i].checked()) {
                    resuelto++;
                }
                console.log(inputs[i].value)
            }
            let porHacer = contador - resuelto;
            console.log(porHacer)
            uncheckedCountSpan.innerHTML = porHacer; */
        }
    }
    checkedItem();
}
