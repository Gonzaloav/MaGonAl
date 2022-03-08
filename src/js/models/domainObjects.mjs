import { taskListHTMLSelector } from "./defines.mjs";
import { updateTasksHTML } from "../controllers/tasks.mjs";

export const tasksStorageKey = "tasks"

export function getTasks () {
    const stringData = localStorage.getItem(tasksStorageKey) || "[]";
    return JSON.parse(stringData);
}

export function addTask(taskObject) {
    const tasks = getTasks();
    tasks.push(taskObject);
    saveTasks(tasks);
}

/**
 * Función para borrar elementos individuales del array
 * @param {} index 
 */
export function deleteIndividualTask(index) {
    const tasks = getTasks();
    tasks.splice(index,1);
    saveTasks(tasks);
}

export function saveTasks(newTasksArray) {
    const stringData = JSON.stringify(newTasksArray)
    localStorage.setItem(tasksStorageKey, stringData);
    updateTasksHTML(taskListHTMLSelector, newTasksArray)
}

/**
 * Función para borrar todo el array
 * @param {*} newTasksArray 
 */
export function deleteTasks(newTasksArray) {
    const stringData = JSON.stringify(newTasksArray)
    localStorage.removeItem(tasksStorageKey, stringData);
    updateTasksHTML(taskListHTMLSelector, newTasksArray)
}