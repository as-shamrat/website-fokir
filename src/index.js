import contactFn from "./contact";
import contactMenu from "./menu";

const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", function (e) {
    if (e.target.classList.contains("contact")) {
      contactFn();
    } else if (e.target.classList.contains("menu")) {
      contactMenu();
    } else {
      return;
    }
  });
});
