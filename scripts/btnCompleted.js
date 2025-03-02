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
    const currentTime = new Date();

    // Use Intl.DateTimeFormat for AM/PM format
    /**const timeString = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).format(currentTime);

    console.log("You have Complete The Task at: ", timeString); */

    alert("Board updated Successfully!");
  });
}
