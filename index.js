const init = () => {
    const taskInput = document.querySelector(".todo-input");
    const addButton = document.querySelector(".add-btn");
    const taskContainer = document.querySelector(".is-todo");

    const taskAdding = () => {
        addButton.addEventListener("click", newTask = () => {
            const newTask = document.createElement("div");
            newTask.className = "new-task"
            taskContainer.appendChild(newTask);

            const taskName = document.createElement("p");
            taskName.className = "task-content";
            taskName.textContent = taskInput.value;
            newTask.appendChild(taskName);

            taskInput.value = "";
        })
    }
    taskAdding();
}

init();

