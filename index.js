const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const icon = document.querySelector(".icon");
const body = document.querySelector("body");
const content = document.querySelector(".nav-content");
const ul = document.querySelector(".list");

icon.addEventListener("click", () => {
  icon.classList.toggle("show");
  close.classList.toggle("show");
  hamburger.classList.toggle("show");
  body.classList.toggle("show");
  content.classList.toggle("show");
  ul.classList.toggle("show");
});
