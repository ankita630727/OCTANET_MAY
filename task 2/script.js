let tasks = [];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskName = taskInput.value.trim();
    if (taskName !== "") {
        tasks.push({ name: taskName, completed: false });
        taskInput.value = "";
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.textContent = task.name;
        if (task.completed) {
            li.classList.add("completed");
        }
        li.addEventListener("click", () => toggleTaskCompletion(index));
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "❌";
        deleteButton.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent li click event from firing
            deleteTask(index);
        });
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}
