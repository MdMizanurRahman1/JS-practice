//8
function concat(array) {
  let result = "";
  for (let item of array) {
    result += item;
  }
  return result;
}

const namesList = ["Johnny", "DeeDee", "Joey", "Marky"];

document.body.innerHTML = concat(namesList);

