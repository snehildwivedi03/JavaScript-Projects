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
//  resume btn
document.addEventListener("DOMContentLoaded", function () {
  var resumeButton = document.getElementById("resumebtn");
  resumeButton.addEventListener("click", function () {
    window.open("./image/myresume.pdf", " ");
  });
});

document.body.style.fontFamily = '"Mukta", sans-serif';
function openNewWindow(event) {
  const targetCard = event.target.closest(".card");

  if (targetCard) {
    const url = targetCard.getAttribute("data-url");
    window.open(url, "");
  }
}

// oops card functionality

document.addEventListener("DOMContentLoaded", function () {
  var oopname1Element = document.querySelector(".oopname1");
  oopname1Element.addEventListener("click", function (event) {
    event.preventDefault();
    window.open("./17-Gallery/index.html", " ");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var oopname1Element = document.querySelector(".oopname2");
  oopname1Element.addEventListener("click", function (event) {
    event.preventDefault();
    window.open("./19-DarkMode/index.html", " ");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var oopname1Element = document.querySelector(".oopname3");
  oopname1Element.addEventListener("click", function (event) {
    event.preventDefault();
    window.open("./18-Numbers/index.html", " ");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var oopname1Element = document.querySelector(".oopname4");
  oopname1Element.addEventListener("click", function (event) {
    event.preventDefault();
    window.open("./16-Counter-OOP/index.html", " ");
  });
});
// api cards
document.addEventListener("DOMContentLoaded", function () {
  var oopname1Element = document.querySelector(".apiname1");
  oopname1Element.addEventListener("click", function (event) {
    event.preventDefault();
    window.open("./21-Dad Jokes/index.html", " ");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var oopname1Element = document.querySelector(".apiname2");
  oopname1Element.addEventListener("click", function (event) {
    event.preventDefault();
    window.open("./22-Products/index.html", " ");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var oopname1Element = document.querySelector(".apiname3");
  oopname1Element.addEventListener("click", function (event) {
    event.preventDefault();
    window.open("./20-Filters/index.html", " ");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var oopname1Element = document.querySelector(".apiname4");
  oopname1Element.addEventListener("click", function (event) {
    event.preventDefault();
    window.open("./24-Cocktails/index.html", " ");
  });
});

// fun with js
