let filteredProduct = [...products];
const productsContainer = document.querySelector(".products-container");
const displayProducts = () => {
  //if statement

  productsContainer.innerHTML = filteredProduct
    .map(({ id, title, image, price }) => {
      return ` <article class="product" data-id ="${id}">
   <img
     src="${image}"
   />
   <footer>
     <h5 class="product-name">${title}a</h5>
     <span class="product-price">₹${price}</span>
   </footer>
 </article>`;
    })
    .join("");
};
displayProducts();
