const div = document.querySelector("#content");

function contactMenu() {
  div.innerHTML = "";
  const h1 = document.createElement("h1");
  h1.textContent = "This is a menu page";
  div.appendChild(h1);
}

export default contactMenu;
