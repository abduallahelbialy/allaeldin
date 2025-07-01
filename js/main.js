////data-theme///
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("darkModeToggle");
  const toggleo = document.getElementById("darkModeTogglephone");
  const currentTheme = localStorage.getItem("theme");
const currentTheme2 = localStorage.getItem("theme2");
  if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  if (currentTheme2 === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");

      if (currentTheme === "dark") {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      }
    });
  }
  if (toggleo) {
    toggleo.addEventListener("click", () => {
      const currentTheme2 = document.documentElement.getAttribute("data-theme");

      if (currentTheme2 === "dark") {
        document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme2", "light");
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme2", "dark");
      }
    });
  }
});
////data-theme////
///search////
const input = document.getElementById("searchInput");
const icon = document.getElementById("searchIcon");

input.addEventListener("input", () => {
  if (input.value.trim() !== "") {
    icon.style.opacity = "0";
    input.classList.add("expanded");
  } else {
    icon.style.opacity = "1";
    input.classList.remove("expanded");
  }
});
///search////

///tabs//
const tabs = document.querySelectorAll(".tab");
const products = document.querySelectorAll(".product");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active-tab"));
    tab.classList.add("active-tab");

    const category = tab.getAttribute("data-category");

    products.forEach((product) => {
      if (
        category === "all" ||
        product.getAttribute("data-category") === category
      ) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});
  ////tabs////
  ///purpleBox///
  document
    .getElementById("staticBackdropLabel")
    .addEventListener("click", function () {
      const box = document.getElementById("purpleBox");
      const box2 = document.getElementById("purpleBox2");
      box.style.display = box.style.display === "none" ? "block" : "none";
      box2.style.display = box2.style.display === "none" ? "block" : "none";
    });
  document
    .getElementById("staticBackdropLabel2")
    .addEventListener("click", function () {
      const box2 = document.getElementById("purpleBox2");
      box2.style.display = box2.style.display === "none" ? "block" : "none";
    });
      ///purpleBox///
//login page///






//login page///