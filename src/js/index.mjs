import { getTasks } from "./models/domainObjects.mjs";
import { updateTasksHTML, taskAddButtonClickHandler } from "./controllers/tasks.mjs";
import { taskListHTMLSelector, addTaskButtonSelector } from "./models/defines.mjs"


/**
 * Punto de entrada al programa.
 * Al ser importado desde index.html como módulo
 * la ejecución se ve diferido al momento en que se
 * termine de cargar el documento HTML.
 */
updateTasksHTML(taskListHTMLSelector,getTasks());

document.querySelector(
    addTaskButtonSelector
).addEventListener(
    "click",
    taskAddButtonClickHandler
);

// Prueba de boton Mostrar/Ocultar. REVISAR. no funciona.

function toggleShowCompletedHandler (event) {
    const completedElements = document.querySelectorAll(".completed");
    for ( let item of completedElements ) {
        item.classList.toggle("hidden");
    }
}

const botonMostrarOcultar = document.querySelector("#triggerButton");

botonMostrarOcultar.addEventListener("click", toggleShowCompletedHandler);
























/*
for ( let idx = 0 ; idx < tasks.length ; idx ++ ) {
    tasks[idx].taskName
}
*/

//const taskHTML1 = '<li>' + taskName + '</p><input type="checkbox" name="completed" id=""' + completed + '></li>';

/*
const mappedTask = tasks.map(
    (task) => `
        <li>
            <p>${task.taskName}</p>
            <input
                type="checkbox"
                name="completed"
                id="" ${task.completed ? "checked" : ""}>
        </li>`
)

console.log("With map:", JSON.stringify(mappedTask))
*/