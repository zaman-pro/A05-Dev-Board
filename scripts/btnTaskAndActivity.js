const btnCompleted = document.querySelectorAll(".btn-completed");
let taskCompleted = document.getElementById("task-completed");

const totalTask = document.getElementById("task-container").children.length;
const taskCount = document.getElementById("task-count");

const activityContainer = document.getElementById("activity-container");

taskCount.innerText = totalTask;

for (const button of btnCompleted) {
  button.addEventListener("click", function (event) {
    event.preventDefault();

    let newTaskCount = parseInt(taskCount.innerText);
    let newTaskCompleted = parseInt(taskCompleted.innerText);

    taskCount.innerText = newTaskCount - 1;
    taskCompleted.innerText = newTaskCompleted + 1;

    button.disabled = true;

    // dynamic title
    const cardTitle = button.closest(".taskCard").querySelector("h3").innerText;

    // ?for activity log

    const div = document.createElement("div");
    const currentTimeDate = new Date();

    div.innerHTML = `
     <p class="bg-secondary p-2 text-black/70 rounded-lg">
     You have Complete The Task <span class='font-bold'>${cardTitle}</span> at <span class='text-sm text-emerald-700 font-semibold'>${currentTimeDate.toLocaleTimeString()}</span
     </p>
`;

    activityContainer.appendChild(div);

    alert("Board updated Successfully!");

    if (newTaskCount - 1 === 0) {
      alert("Congrats! You have completed all the current task");
    }
  });
}

// clear history button

const btnClearHistory = document.getElementById("btn-clear-history");

btnClearHistory.addEventListener("click", function () {
  activityContainer.innerHTML = "";
});
