import "./style.css";
import "./landingPage.css";
import "./menu.css";
import "./contact.css";

import landingPage from "./landingPage";
import menuPage from "./menu";
import contactPage from "./contact";

const content = document.getElementById("content");
const body = document.querySelector("body");

const header = document.createElement("header");
header.classList.add("header");
header.innerHTML = "<h1>Restaurant Page</h1>";

const navigation = document.createElement("nav");
navigation.classList.add("navigation");

const home = document.createElement("a");
home.textContent = "Home";
home.href = "#";

const menu = document.createElement("a");
menu.textContent = "Menu";
menu.href = "#";

const contact = document.createElement("a");
contact.textContent = "Contact";
contact.href = "#";

home.addEventListener("click", () => {
  content.innerHTML = "";
  landingPage();
});

menu.addEventListener("click", () => {
  content.innerHTML = "";
  menuPage();
});

contact.addEventListener("click", () => {
  content.innerHTML = "";
  contactPage();
});
navigation.append(home, menu, contact);
body.appendChild(header);
body.appendChild(navigation);
body.appendChild(content);
