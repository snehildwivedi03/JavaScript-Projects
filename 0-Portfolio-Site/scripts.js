// 💻 OS-Themed Portfolio UI Logic

// --------------------
// ⏳ Initial Loader + OS Selection Modal
// --------------------
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("os-modal-popup").style.opacity = 1;
    document.getElementById("os-modal-popup").style.pointerEvents = "all";
  }, 2500);
});

// --------------------
// 🖥️ OS Selection Handler
// --------------------
document.querySelectorAll(".os-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const os = btn.dataset.os;
    localStorage.setItem("os", os);

    document.body.classList.add(`theme-${os}`);
    document.getElementById("os-modal-popup").style.display = "none";
    document.querySelector(".floating-shapes").style.display = "none";

    const osLoader = document.getElementById("os-loader");
    const osLogo = document.getElementById("os-logo");
    const loadingFill = document.querySelector(".os-loading-fill");

    // Set logo and color
    if (os === "windows") {
      osLogo.innerHTML = '<i class="fa-brands fa-windows"></i>';
      loadingFill.style.backgroundColor = "#0078d7";
      document.getElementById("desktop").classList.add("windows-theme");
    } else if (os === "linux") {
      osLogo.innerHTML = '<i class="fa-brands fa-linux"></i>';
      loadingFill.style.backgroundColor = "#f4d03f";
    } else if (os === "macos") {
      osLogo.innerHTML = '<i class="fa-brands fa-apple"></i>';
      loadingFill.style.backgroundColor = "#ffffff";
    }

    // Show loader
    osLoader.style.display = "flex";

    setTimeout(() => {
      osLoader.style.display = "none";
      document.getElementById("desktop").style.display = "block";
    }, 2500);
  });
});

// --------------------
// 🪟 Start Menu Toggle
// --------------------
const startBtn = document.getElementById("start-button");
const startMenu = document.getElementById("start-menu");

startBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  startMenu.classList.toggle("show");
});

startMenu.addEventListener("click", (e) => e.stopPropagation());

document.addEventListener("click", () => {
  startMenu.classList.remove("show");
});

// --------------------
// ⏰ Clock & Date Update
// --------------------
function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  document.getElementById("date").textContent = now.toLocaleDateString("en-GB");
}
setInterval(updateClock, 1000);
updateClock();

// --------------------
// 🖱️ Desktop Interactions (on DOM Ready)
// --------------------
document.addEventListener("DOMContentLoaded", () => {
  const folderIcon = document.getElementById("folder-icon");
  const folderWindow = document.getElementById("folder-window");
  const taskbarIcon = document.getElementById("taskbar-folder-icon");
  const closeBtn = document.querySelector(".close-btn");
  const minimizeBtn = document.querySelector(".minimize-btn");
  const maximizeBtn = document.querySelector(".maximize-btn");
  const folderHeader = document.querySelector(".folder-header");

  let isMaximized = false;
  let prevState = {};

  // 📁 Launch Folder
  function openFolderWindow() {
    folderWindow.style.display = "block";
    setTimeout(() => folderWindow.classList.add("active"), 10);
    taskbarIcon.style.display = "flex";
    taskbarIcon.classList.add("active");
  }

  // 🖱️ Double-click to open
  folderIcon?.addEventListener("dblclick", openFolderWindow);

  // ❌ Close button
  closeBtn?.addEventListener("click", () => {
    folderWindow.classList.remove("active");
    setTimeout(() => {
      folderWindow.style.display = "none";
      taskbarIcon.style.display = "none";
      taskbarIcon.classList.remove("active");
    }, 300);
  });

  // ➖ Minimize button
  minimizeBtn?.addEventListener("click", () => {
    folderWindow.style.display = "none";
    taskbarIcon.classList.remove("active");
  });

  // ⛶ Maximize / Restore
  maximizeBtn?.addEventListener("click", () => {
    if (!isMaximized) {
      prevState = {
        top: folderWindow.style.top,
        left: folderWindow.style.left,
        width: folderWindow.style.width,
        height: folderWindow.style.height,
        position: folderWindow.style.position,
      };
      folderWindow.classList.add("fullscreen");
      folderWindow.style.position = "fixed";
      folderWindow.style.top = "0";
      folderWindow.style.left = "0";
      isMaximized = true;
    } else {
      folderWindow.classList.remove("fullscreen");
      folderWindow.style.top = prevState.top;
      folderWindow.style.left = prevState.left;
      folderWindow.style.width = prevState.width;
      folderWindow.style.height = prevState.height;
      folderWindow.style.position = prevState.position || "absolute";
      isMaximized = false;
    }
  });

  // 📌 Taskbar Toggle
  taskbarIcon?.addEventListener("click", () => {
    const isVisible = folderWindow.style.display === "block";
    if (isVisible) {
      folderWindow.classList.remove("active");
      setTimeout(() => {
        folderWindow.style.display = "none";
        taskbarIcon.classList.remove("active");
      }, 300);
    } else {
      openFolderWindow();
    }
  });

  // 🖱️ Drag Folder
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  folderHeader?.addEventListener("mousedown", (e) => {
    if (isMaximized) return;
    isDragging = true;
    const rect = folderWindow.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    document.body.style.userSelect = "none";
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging || isMaximized) return;
    let left = e.clientX - offsetX;
    let top = e.clientY - offsetY;

    const maxLeft = window.innerWidth - folderWindow.offsetWidth;
    const maxTop = window.innerHeight - folderWindow.offsetHeight - 50;

    left = Math.max(0, Math.min(left, maxLeft));
    top = Math.max(0, Math.min(top, maxTop));

    folderWindow.style.left = `${left}px`;
    folderWindow.style.top = `${top}px`;

    folderWindow.style.position = "absolute";
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    document.body.style.userSelect = "auto";
  });

  // 🖼️ Desktop Icon Selection Logic
  const desktopIcons = document.querySelectorAll(".icon");
  let selectedIcon = null;

  desktopIcons.forEach((icon) => {
    icon.addEventListener("click", (e) => {
      e.stopPropagation();
      if (selectedIcon) selectedIcon.classList.remove("selected");
      icon.classList.add("selected");
      icon.focus();
      selectedIcon = icon;
    });

    icon.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const app = icon.dataset.app;
        openApp(app);
      }
    });

    icon.addEventListener("dblclick", () => {
      const app = icon.dataset.app;
      openApp(app);
    });
  });

  document.addEventListener("click", () => {
    if (selectedIcon) {
      selectedIcon.classList.remove("selected");
      selectedIcon = null;
    }
  });
});

// 🧠 Open App by ID
function openApp(appName) {
  if (!appName) return;
  const appWindow = document.getElementById(`${appName}-window`);
  if (appWindow) {
    appWindow.style.display = "block";
    setTimeout(() => appWindow.classList.add("active"), 10);
  }
}
// 📦 Dragging Logic for folder window
const folderHeader = document.querySelector(".folder-header");
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

folderHeader?.addEventListener("mousedown", (e) => {
  // Don't allow drag in fullscreen
  if (appFolderWindow.classList.contains("fullscreen")) return;

  isDragging = true;
  const rect = appFolderWindow.getBoundingClientRect();
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;

  document.body.style.userSelect = "none"; // Prevent text selection
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  // Limit within screen boundaries
  let left = e.clientX - offsetX;
  let top = e.clientY - offsetY;

  const maxLeft = window.innerWidth - appFolderWindow.offsetWidth;
  const maxTop = window.innerHeight - appFolderWindow.offsetHeight - 50; // 50 = taskbar height

  left = Math.max(0, Math.min(left, maxLeft));
  top = Math.max(0, Math.min(top, maxTop));

  appFolderWindow.style.left = `${left}px`;
  appFolderWindow.style.top = `${top}px`;
  appFolderWindow.style.position = "absolute";
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  document.body.style.userSelect = "auto";
});
