const hamburgerButton = document.querySelector(".hamburger-button");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerButton.addEventListener("click", () => {
  if (hamburgerMenu.style.display === "flex") {
    hamburgerMenu.style.display = "none";
  } else {
    hamburgerMenu.style.display = "flex";
  }
});
