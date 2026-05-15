
//2

const count = Number(prompt("Number of participants:"));
const names = [];

for (let i = 0; i < count; i++) {
  names.push(prompt("Enter your name:"));
}

names.sort();

let list = "<ol>";
for (let name of names) {
  list += `<li>${name}</li>`;
}
list += "</ol>";

document.body.innerHTML = list;
