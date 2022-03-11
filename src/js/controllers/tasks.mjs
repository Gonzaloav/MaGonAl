import { addTask, saveTasks, getTasks, deleteTasks,deleteIndividualTask } from "../models/domainObjects.mjs";
import { taskListHTMLSelector, addTaskInputSelector, completedCSSClass } from "../models/defines.mjs"

export function task2HTMLElement (taskIndex, taskObject) {
    // Creo los elementos HTML
    const listHTMLItem = document.createElement("li");
    const pHTMLItem = document.createElement("p");
    const inputCheckboxHTMLItem = document.createElement("input");
    const inputDeleteHTMLItem = document.createElement("input");
    const textoEliminar=document.createElement("span");
    //Seleccionar boton borrar
    const botonBorrar=document.querySelector("#botonBorrar");
    //Les proporciono valores 
    inputCheckboxHTMLItem.type = "checkbox";
    inputDeleteHTMLItem.type = "checkbox";
    inputCheckboxHTMLItem.checked = taskObject.completed;
    pHTMLItem.innerHTML = taskObject.taskName
    textoEliminar.innerHTML="Eliminar";
    // Los anido
    listHTMLItem.append(pHTMLItem, inputCheckboxHTMLItem,inputDeleteHTMLItem, textoEliminar);
    // Aplico estilos si está completada
    if (taskObject.completed) {
        listHTMLItem.classList.add(completedCSSClass);
    } else {
        listHTMLItem.classList.remove(completedCSSClass);
    }
    // Añado el manejador de eventos
    inputCheckboxHTMLItem.addEventListener(
        "click",
        (event) => {
            const tasks = getTasks();
            tasks[taskIndex].completed = event.target.checked;
            saveTasks(tasks);
        }
    );
    // Manejador de eventos de borrado total
    botonBorrar.addEventListener(
        "click",
        (event) => {
            const tasks = getTasks();
            deleteTasks(tasks);
        }
    );
     // Manejador de eventos de borrado individual
     inputDeleteHTMLItem.addEventListener(
        "click",
        (event) => {
            deleteIndividualTask(taskIndex);
        }
    );
    return listHTMLItem
}

/**
 * 7. Mantener las tareas completadas al final (ordenar automaticamente) Gonzalo
 */
 function sortTasksHTML () {
    const ul = document.querySelector("ul");
    const li = document.querySelectorAll(".completed");
    console.log (ul,li);
    for (let idx=0; idx<li.length; idx++){
        const checkbox = li[idx];
        console.log(checkbox); 
        ul.appendChild(checkbox);
    }
}


export function updateTasksHTML (CSSselector, tasksArray) {
    const listHTMLElement = document.querySelector(CSSselector);
    listHTMLElement.innerText = ""
    if (tasksArray.length > 0) {
        for ( let index in tasksArray ) {
            listHTMLElement.appendChild(task2HTMLElement(index, tasksArray[index]))
        }
    } else {
        listHTMLElement.innerText = "Add your first task..."
    } 
    sortTasksHTML() // 7. Mantener las tareas completadas al final
}

export function taskAddButtonClickHandler (event) {
    //console.log(event)
    const input = document.querySelector(addTaskInputSelector);
    /** No permitir añadir tareas vacías. Manuel
        if (document.getElementById("taskInput").value===""){
        alert("No se puede dejar el campo de tareas vacío");
    }
    else{}
    */
    if (document.getElementById("taskInput").value===""){
        alert("No se puede dejar el campo de tareas vacío");
    }
    else{
        event.preventDefault()
        const newTask = {
            taskName: input.value,
            completed: false,
        };
        addTask(newTask);
        updateTasksHTML(taskListHTMLSelector,getTasks());
        /** Limpiar input tras añadir tarea. Gonzalo
         * document.getElementById("taskInput").value= "";
         */
        document.getElementById("taskInput").value= "";
    }
}
