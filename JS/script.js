const btn = document.querySelector(".menu__label");
const bk = document.querySelector(".bk");

btn.addEventListener("click", function () {
  bk.classList.toggle("bk__active");
  document.body.classList.toggle("stop-scroll");
});

bk.addEventListener("click", () => {
  document.querySelector(".menu__input").checked = false;
  bk.classList.toggle("bk__active");
  document.body.classList.toggle("stop-scroll");
});
