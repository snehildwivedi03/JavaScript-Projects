function smoothScrollBy(offset) {
  window.scrollTo({
    top: window.scrollY + offset,
    behavior: "smooth",
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const btnScroll = document.querySelector(".button-74");

  if (btnScroll) {
    btnScroll.addEventListener("click", function () {
      smoothScrollBy(700);
    });
  }
});

// document.getElementById("myCard").addEventListener("click", function () {
//   var urlToOpen = "../29-CapstoneProject- Comfy/index.html";

//   window.open(urlToOpen, " ");
// });
function openNewWindow(event) {
  const targetCard = event.target.closest(".card");

  if (targetCard) {
    const url = targetCard.getAttribute("data-url");
    window.open(url, "");
  }
}
