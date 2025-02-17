/** 
 * Este código implementa una aplicación de gestión de tareas que permite agregar, eliminar y marcar tareas como completadas.
 * Utiliza localStorage para almacenar las tareas de manera persistente en el navegador.
 */

/**
 * Clase que representa una tarea.
 */
class Task {
    /**
     * Crea una instancia de una tarea.
     * @param {string} text - El texto de la tarea.
     */
    constructor(text) {
        this.text = text;
        this.completed = false; // Se establece como no completada inicialmente.
    }
}

/**
 * Clase que gestiona las tareas, permitiendo agregar, eliminar, y marcar tareas como completadas.
 */
class TaskManager {
    constructor() {
        // Inicializa las tareas almacenadas en localStorage o en un arreglo vacío si no hay tareas.
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }

    /**
     * Agrega una tarea al gestor.
     * @param {string} text - El texto de la tarea a agregar.
     */
    addTask(text) {
        const task = new Task(text);
        this.tasks.push(task);
        this.updateLocalStorage();
    }

    /**
     * Elimina una tarea por su índice.
     * @param {number} index - El índice de la tarea a eliminar.
     */
    removeTask(index) {
        this.tasks.splice(index, 1);
        this.updateLocalStorage();
    }

    /**
     * Alterna el estado de completado de una tarea.
     * @param {number} index - El índice de la tarea a actualizar.
     */
    toggleTaskCompleted(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
        this.updateLocalStorage();
    }

    /**
     * Actualiza el almacenamiento local con las tareas actuales.
     */
    updateLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    /**
     * Obtiene todas las tareas.
     * @returns {Array<Task>} Las tareas almacenadas.
     */
    getTasks() {
        return this.tasks;
    }
}

/** Instancia del gestor de tareas */
const taskManager = new TaskManager();

/**
 * Agrega una nueva tarea desde el formulario.
 */
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const text = taskInput.value.trim();
    if (text) {
        taskManager.addTask(text);
        taskInput.value = ''; // Limpia el campo del formulario
        renderTasks();
    }
}

/**
 * Elimina una tarea por su índice.
 * @param {number} index - El índice de la tarea a eliminar.
 */
function deleteTask(index) {
    taskManager.removeTask(index);
    renderTasks();
}

/**
 * Renderiza todas las tareas en el HTML.
 */
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    taskManager.getTasks().forEach((task, index) => {
        const taskEl = document.createElement('li');
        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        taskText.style.flexGrow = '1';
        if (task.completed) {
            taskText.style.textDecoration = 'line-through';
        }

        // Botón para borrar la tarea
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Borrar';
        deleteBtn.onclick = () => deleteTask(index);
        deleteBtn.style.marginLeft = '10px';
        deleteBtn.classList.add('buttonB');

        taskEl.appendChild(taskText);
        taskEl.appendChild(deleteBtn);
        taskList.appendChild(taskEl);
    });
}

/**
 * Alterna el estado de completado de una tarea.
 * @param {number} index - El índice de la tarea a actualizar.
 */
function toggleTaskCompleted(index) {
    taskManager.toggleTaskCompleted(index);
    renderTasks();
}

document.getElementById('addTaskBtn').addEventListener('click', addTask);

renderTasks();
