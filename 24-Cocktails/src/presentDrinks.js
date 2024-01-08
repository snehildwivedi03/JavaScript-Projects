import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from "./setDrink.js";
//fetch drinks
const showDrinks = async (URL) => {
  const data = await fetchDrinks(URL);

  //display drinks
  const section = await displayDrinks(data);
  if (section) {
    setDrink(section);
  }
};

export default showDrinks;
