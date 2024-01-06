const url = "https://course-api.com/javascript-store-products";
const productsDOM = document.querySelector(".products-centre");

const fetchProducts = async () => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
fetchProducts();
