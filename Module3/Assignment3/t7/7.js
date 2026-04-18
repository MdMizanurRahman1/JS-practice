const trigger = document.getElementById("trigger");
const image = document.getElementById("target");

// mouse over
trigger.addEventListener("mouseover", function () {
  image.src = "img/picB.jpg";
});

// mouse out
trigger.addEventListener("mouseout", function () {
  image.src = "img/picA.jpg";
});