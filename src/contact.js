const div = document.querySelector("#content");

function contactFn() {
  div.innerHTML = "";
  const h1 = document.createElement("h1");
  h1.textContent = "This is a contact page";
  div.appendChild(h1);
}

export default contactFn;
