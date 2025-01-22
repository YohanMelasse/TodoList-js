import { createElement } from "./createElement.js";

const init = () => {
  const body = document.querySelector("body");
  const taskInput = document.querySelector(".todo-input");
  const addButton = document.querySelector(".add-btn");
  const taskContainer = document.querySelector(".is-todo");

  let newTask = "";
  let taskName = "";
  let radioElement = "";
  let removeTaskBtn = "";

  let taskArr = [];
  let receivedData = []
  

  let initTaskCreated = 0;
  let limitTaskCreated = 9;

  


const tasks = () => {
  addButton.addEventListener("click", function addTask (){
    if (initTaskCreated < limitTaskCreated) {

      newTask = createElement("div", {
          "class" : "new-task"
      })
      taskContainer.appendChild(newTask);

      

      radioElement = createElement("input",{
        "type": "radio",
         "class": "task-radio"
        })
      newTask.appendChild(radioElement);

      taskName = createElement("p",{
        "class": "task-content"
      })

      taskName.textContent = taskInput.value;
      let data = taskName.textContent;
      
      const saveTasks = () => {
        taskArr.push(data);
        localStorage.setItem("tasks", JSON.stringify(taskArr));
      }
      saveTasks();

      newTask.appendChild(taskName);

      removeTaskBtn = createElement("button",{
          "class": "remove-task-btn"
        })

      newTask.appendChild(removeTaskBtn);
      
      const crossSvg = createElement("img",{
          "src" : "./assets/cross.svg"
        })
      removeTaskBtn.appendChild(crossSvg);

      
      
      initTaskCreated++;
      taskInput.value = "";

            radioElement.addEventListener("click", function setTaskIsDone (){
              if (radioElement.checked){
                taskName.classList.toggle("checked");
                }
            }),
            removeTaskBtn.addEventListener("click", function removeTask (){
              newTask.remove();
              taskArr.pop(data);
            })

      // Créer une fonction pour sauvegarder les tâches
        // initialiser un tableau vide
        // Remplir ce tableau
        // Sauvegarder les données dans la mémoire du navigateur
        // On converti les données en chaîne de caractères
        // Vérifier si les données sont bien sauvegardés dans le localStorage

        // localStorage => Persistance des données
        // modification de tâches
              }
            }
            
        )}
        tasks();
    
    
  }
init();

