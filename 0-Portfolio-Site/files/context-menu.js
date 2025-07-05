const desktop = document.getElementById("desktop");
const contextMenu = document.getElementById("desktop-context-menu");

// Show context menu on right-click
desktop.addEventListener("contextmenu", (e) => {
  e.preventDefault(); // stop default context menu
  hideContextMenu(); // close if already open

  // Show menu at mouse position
  contextMenu.style.top = `${e.clientY}px`;
  contextMenu.style.left = `${e.clientX}px`;
  contextMenu.style.display = "block";
});

// Hide on click elsewhere
document.addEventListener("click", (e) => {
  if (!contextMenu.contains(e.target)) {
    hideContextMenu();
  }
});

function hideContextMenu() {
  contextMenu.style.display = "none";
}
const folderIcon = document.querySelector('[data-app="folder"]');
const folderWindow = document.getElementById("folder-window");
const closeBtn = document.querySelector(".close-btn");
const minimizeBtn = document.querySelector(".minimize-btn");
const maximizeBtn = document.querySelector(".maximize-btn");

// Show window on double click
folderIcon.addEventListener("dblclick", () => {
  folderWindow.style.display = "block";
});

// Show window on Enter after clicking
folderIcon.addEventListener("click", () => {
  folderIcon.focus(); // Set focus to element
});

folderIcon.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    folderWindow.style.display = "block";
  }
});

// Close
closeBtn.addEventListener("click", () => {
  folderWindow.style.display = "none";
});

// Minimize (just hide for now)
minimizeBtn.addEventListener("click", () => {
  folderWindow.style.display = "none"; // or add .minimized
});

// Maximize (toggle full-screen for now)
maximizeBtn.addEventListener("click", () => {
  folderWindow.classList.toggle("fullscreen");
});
