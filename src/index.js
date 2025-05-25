import "./style.css";
import { addHomeContent } from "./home.js";
import { addMenuContent } from "./menu.js";
import { addContactContent } from "./contact.js";

const contentDiv = document.querySelector(".content");
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactButton = document.querySelector("#contact");

homeButton.addEventListener("click", () => {
    homeButton.setAttribute("class", "active-header-button");
    menuButton.removeAttribute("class");
    contactButton.removeAttribute("class");
    contentDiv.innerHTML = "";
    addHomeContent();
});

contactButton.addEventListener("click", () => {
    contactButton.setAttribute("class", "active-header-button");
    menuButton.removeAttribute("class");
    homeButton.removeAttribute("class");
    contentDiv.innerHTML = "";
    addContactContent();
});

menuButton.addEventListener("click", () => {
    menuButton.setAttribute("class", "active-header-button");
    homeButton.removeAttribute("class");
    contactButton.removeAttribute("class");
    contentDiv.innerHTML = "";
    addMenuContent();
});

// const clickEvent = new Event("click");
// homeButton.dispatchEvent(clickEvent);
