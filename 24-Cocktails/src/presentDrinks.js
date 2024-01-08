import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
//fetch drinks
const showDrinks = async (URL) => {
  const data = await fetchDrinks(URL);

  //display drinks
  const section = await displayDrinks(data);
  console.log(section);
};

export default showDrinks;
