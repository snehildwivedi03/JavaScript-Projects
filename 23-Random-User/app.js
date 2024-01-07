const URL = "https://randomuser.me/api/";
const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error("no element selected");
};
const img = getElement(".user-img");
console.log(img);
