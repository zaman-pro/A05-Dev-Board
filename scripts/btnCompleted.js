const btnCompleted = document.querySelectorAll(".btn-completed");

let taskCompleted = document.getElementById("task-completed");

for (const button of btnCompleted) {
  button.addEventListener("click", function (event) {
    event.preventDefault();

    newTaskCount = parseInt(taskCount.innerText) - 1;
    const newTaskCompleted = parseInt(taskCompleted.innerText) + 1;

    taskCompleted.innerText = newTaskCompleted;
    taskCount.innerText = newTaskCount;

    button.disabled = true;

    // !for date
    // const currentTime = new Date();

    alert("Board updated Successfully!");

    if (parseInt(taskCount.innerText) === 0) {
      alert("Congrats! You have completed all the current task");
    }
  });
}
