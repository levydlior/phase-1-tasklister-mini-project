document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById("create-task-form");

  newTaskForm.addEventListener("submit", e => makeShitHappen(e));


function makeShitHappen(e){
  e.preventDefault();
  //declare const to hold user input value
  const textBox = document.getElementById("new-task-description");
  
  //append a list item to an unorded list
  //add a button to each task list
  const taskList = document.getElementById("tasks");
  const newTask = document.createElement("li");
  newTask.textContent = textBox.value;
  taskList.append(newTask);
  newTaskForm.reset();
}
}
);
