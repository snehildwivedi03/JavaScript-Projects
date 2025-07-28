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

    // After loader, redirect or continue based on OS
    setTimeout(() => {
      osLoader.style.display = "none";

      if (os === "windows") {
        document.getElementById("desktop").style.display = "block";
      } else if (os === "linux") {
        window.location.href = "./linux.html"; // ✅ Use ./ for relative path
      } else if (os === "macos") {
        window.location.href = "./macOS.html"; // ✅ Use ./ for relative path
      }
    }, 2500);
  });
});

// --------------------
// 🪟 Start Menu Toggle
// --------------------
// 🧠 Open App by ID
function openApp(appName) {
  if (!appName) return;
  const appWindow = document.getElementById(`${appName}-window`);
  if (appWindow) {
    appWindow.style.display = "block";
    setTimeout(() => appWindow.classList.add("active"), 10);
  }
}
const desktopStartButton = document.getElementById("start-button");
const systemStartMenu = document.getElementById("start-menu");

desktopStartButton.addEventListener("click", (e) => {
  e.stopPropagation();

  const isMenuVisible = systemStartMenu.classList.contains("show");

  if (!isMenuVisible) {
    systemStartMenu.classList.add("show");
    systemStartMenu.style.opacity = "1";
    systemStartMenu.style.transform = "translateY(0)";
    systemStartMenu.style.zIndex = "20000";
  } else {
    systemStartMenu.classList.remove("show");
    systemStartMenu.style.opacity = "0";
    systemStartMenu.style.transform = "translateY(10px)";
    setTimeout(() => {
      if (!systemStartMenu.classList.contains("show")) {
        systemStartMenu.style.zIndex = "0";
      }
    }, 300); // match transition
  }
});

// 🧱 Prevent hiding when clicking inside the menu
systemStartMenu.addEventListener("click", (e) => e.stopPropagation());

// 🌌 Click outside to hide
document.addEventListener("click", () => {
  if (systemStartMenu.classList.contains("show")) {
    systemStartMenu.classList.remove("show");
    systemStartMenu.style.opacity = "0";
    systemStartMenu.style.transform = "translateY(10px)";
    setTimeout(() => {
      if (!systemStartMenu.classList.contains("show")) {
        systemStartMenu.style.zIndex = "0";
      }
    }, 300);
  }
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
