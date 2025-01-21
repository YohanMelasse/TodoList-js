import { createElement } from "./createElement.js";

const init = () => {
    const body = document.querySelector("body");
    const taskInput = document.querySelector(".todo-input");
    const addButton = document.querySelector(".add-btn");
    const taskContainer = document.querySelector(".is-todo");

    let initTaskCreated = 0;
    let limitTaskCreated = 9;

    const taskAdding = () => {
        addButton.addEventListener("click", function addTask (){
                 if (initTaskCreated < limitTaskCreated) {

                  let newTask = createElement("div", {
                    "class" : "new-task"
                  })
                  taskContainer.appendChild(newTask);

                  const radioElement = createElement("input", {
                    "type": "radio",
                    "class": "task-radio"
                  })
                newTask.appendChild(radioElement);

                const taskName = createElement("p", {
                  "class": "task-content"
                })

                taskName.textContent = taskInput.value;
                newTask.appendChild(taskName);

                const removeTaskBtn = createElement("button",
                  {
                    "class": "remove-task-btn"
                  }
                )

                newTask.appendChild(removeTaskBtn);

                const crossSvg = createElement("img",{
                  "src" : "./assets/cross.svg"
                })
                removeTaskBtn.appendChild(crossSvg);

                radioElement.addEventListener("click", function setTaskIsDone (){
                  if (radioElement.checked){
                    taskName.classList.toggle("checked");
                  }
                })

                removeTaskBtn.addEventListener("click", function removeTask (){
                  newTask.remove();
                })
                
                initTaskCreated++;

                taskInput.value = "";
                    
              }
            }
        )}
        
        taskAdding();
    }
init();

