const fetchDrinks = async (URl) => {
  try {
    const response = await fetch(URl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchDrinks;
