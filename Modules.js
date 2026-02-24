const names = require("./Names");
// console.log("Names:", names);
const getRandomName = () => {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

console.log(getRandomName());
