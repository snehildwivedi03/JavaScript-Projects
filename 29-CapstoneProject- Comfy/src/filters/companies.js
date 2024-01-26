import { getElement } from "../utils.js";
import display from "../displayProducts.js";

const setupCompanies = (store) => {
  let companies = ["all", ...new Set(store.map((product) => product.company))];
  const companiesDOM = getElement(".companies");
  companiesDOM.innerHTML = companies
    .map((company) => {
      return `<button class="company-btn">${company}</button>`;
    })
    .join("");
  companiesDOM.addEventListener("click", function (e) {
    const element = e.target;
    if (element.classList.contains("company-btn")) {
      let newStore = [];

      // Check if the clicked button is "all"
      if (element.textContent.toLowerCase() === "all") {
        // If "all" is clicked, set newStore to the entire store
        newStore = [...store];
      } else {
        // If a specific company button is clicked, filter the store accordingly
        newStore = store.filter(
          (product) => product.company === e.target.textContent
        );
      }

      // Display the products based on the newStore
      display(newStore, getElement(".products-container"));
    }
  });
};

export default setupCompanies;
