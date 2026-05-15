//3
const dogs = [];

for (let i = 0; i < 6; i++) {
  dogs.push(prompt("Enter dog name:"));
}

dogs.sort().reverse();

let lists = "<ul>";
for (let dog of dogs) {
  lists += `<li>${dog}</li>`;
}
lists += "</ul>";

document.body.innerHTML = lists;
