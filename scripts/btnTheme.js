document
  .getElementById("btn-theme")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const randomColor = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;

    document.getElementById("body").style.backgroundColor = randomColor;

    console.log(randomColor);
  });
