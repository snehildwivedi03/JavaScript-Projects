const url = "https://course-api.com/javascript-store-products";
const productsDOM = document.querySelector(".products-center");

const fetchProducts = async () => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    productsDOM.innerHTML = '<p class="error">There was an error</p>';
    throw error; // Re-throw the error so that it can be handled elsewhere if needed
  }
};

const displayProducts = (list) => {
  const productList = list
    .map((product) => {
      const { id, fields } = product;
      const { name: title, price } = fields;
      const { url: img } = fields.image[0];
      const formattedPrice = (price / 100).toFixed(2); // Format price with two decimal places
      // id name price image
      return `
        <a class="single-product" href="product.html?id=${id}">
          <img src="${img}" class="single-product-img img" alt="${title}" />
          <footer>
            <h5 class="name">${title}</h5>
            <span class="price">$${formattedPrice}</span>
          </footer>
        </a>`;
    })
    .join("");

  productsDOM.innerHTML = `<div class="products-container">${productList}</div>`;
};

const start = async () => {
  try {
    const data = await fetchProducts();
    displayProducts(data);
  } catch (error) {
    console.error(error);
  }
};

start();
