'use strict';
const target = document.getElementById("target");

const names = ["John", "Paul", "Jones"];

target.innerHTML = "";

for (let name of names) {
  target.innerHTML += "<li>" + name + "</li>";
}
