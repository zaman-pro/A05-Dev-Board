const currentTimeDate = new Date();

const weekDay = document.getElementById("week-day");
const date = document.getElementById("date");

// !for weekday
const newDay = currentTimeDate.toLocaleDateString("en-US", {
  weekday: "short",
});

weekDay.innerText = newDay;

// !for date
const newDate = currentTimeDate
  .toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  })
  .replace(",", "");

date.innerText = newDate;
