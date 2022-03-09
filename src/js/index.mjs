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

// Prueba de boton ocultar. REVISAR. no funciona.
botonOcultar.addEventListener("click",
    (event) => {
        let hideTasksCompleted = document.querySelector("li.completed");
        console.log(hideTasksCompleted);
        document.querySelector("li.completed").style.display = "none";
        
        
                        
    }
)






















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