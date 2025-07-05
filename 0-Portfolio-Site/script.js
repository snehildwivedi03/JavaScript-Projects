// Initial loading bar (2.5s), then show OS modal
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("os-modal-popup").style.opacity = 1;
    document.getElementById("os-modal-popup").style.pointerEvents = "all";
  }, 2500);
});

// OS selection logic
document.querySelectorAll(".os-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const os = btn.dataset.os;
    localStorage.setItem("os", os);

    // Apply theme class to body
    document.body.classList.add(`theme-${os}`);

    // Hide modal and floating shapes
    document.getElementById("os-modal-popup").style.display = "none";
    document.querySelector(".floating-shapes").style.display = "none";

    // Set up second loader based on OS
    const osLoader = document.getElementById("os-loader");
    const osLogo = document.getElementById("os-logo");
    const loadingFill = document.querySelector(".os-loading-fill");

    // Update logo and loading bar color
    //windowa
    if (os === "windows") {
      osLogo.innerHTML = '<i class="fa-brands fa-windows"></i>';
      loadingFill.style.backgroundColor = "#0078d7";
      document.getElementById("desktop").classList.add("windows-theme");
    }
    //linux
    else if (os === "linux") {
      osLogo.innerHTML = '<i class="fa-brands fa-linux"></i>';
      loadingFill.style.backgroundColor = "#f4d03f";
    }
    //macOS
    else if (os === "macos") {
      osLogo.innerHTML = '<i class="fa-brands fa-apple"></i>';
      loadingFill.style.backgroundColor = "#ffffff";
    }

    // Show OS-specific loader
    osLoader.style.display = "flex";

    // After 2.5s, hide loader and show desktop
    setTimeout(() => {
      osLoader.style.display = "none";
      document.getElementById("desktop").style.display = "block";
    }, 2500);
  });
});
const startBtn = document.getElementById("start-button");
const startMenu = document.getElementById("start-menu");

// Toggle start menu on button click
startBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent it from bubbling up
  startMenu.classList.toggle("show");
});

// Prevent clicks inside menu from closing it
startMenu.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Close start menu when clicking outside
document.addEventListener("click", () => {
  startMenu.classList.remove("show");
});

document.addEventListener("DOMContentLoaded", () => {
  const searchIcon = document.getElementById("search-toggle");
  const searchInput = document.getElementById("search-input");
  const searchClose = document.getElementById("search-close");

  searchIcon.addEventListener("click", () => {
    searchInput.classList.add("active");
    searchInput.focus();
  });

  searchClose.addEventListener("click", () => {
    searchInput.classList.remove("active");
    searchInput.value = "";
  });
});
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = now.toLocaleDateString("en-GB"); // DD-MM-YYYY
  document.getElementById("clock").textContent = time;
  document.getElementById("date").textContent = date;
}
setInterval(updateClock, 1000);
updateClock();
document.addEventListener("DOMContentLoaded", () => {
  const folderIcon = document.getElementById("folder-icon");
  const folderWindow = document.getElementById("folder-window");
  const closeBtn = document.querySelector(".close-btn");
  const minimizeBtn = document.querySelector(".minimize-btn");
  const maximizeBtn = document.querySelector(".maximize-btn");

  // Double-click to open
  folderIcon.addEventListener("dblclick", () => {
    folderWindow.style.display = "block";
  });

  // Close window
  closeBtn.addEventListener("click", () => {
    folderWindow.style.display = "none";
  });

  // Minimize (just hides)
  minimizeBtn.addEventListener("click", () => {
    folderWindow.style.display = "none";
  });

  // Maximize (toggle fullscreen class)
  maximizeBtn.addEventListener("click", () => {
    folderWindow.classList.toggle("fullscreen");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const folderIcon = document.getElementById("folder-icon");
  const folderWindow = document.getElementById("folder-window");
  const closeBtn = document.querySelector(".close-btn");

  // 🖱 Double-click to open with transition
  folderIcon.addEventListener("dblclick", () => {
    folderWindow.style.display = "block"; // make sure it's visible first
    setTimeout(() => folderWindow.classList.add("active"), 10);
  });

  // ❌ Close with transition
  closeBtn.addEventListener("click", () => {
    folderWindow.classList.remove("active");

    // Wait for transition to finish, then hide
    setTimeout(() => {
      folderWindow.style.display = "none";
    }, 300); // Match transition time
  });
});
