import "./style.css";
import { addHomeContent } from "./home.js";
import { addMenuContent } from "./menu.js";

const contentDiv = document.querySelector(".content");
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

homeButton.addEventListener("click", () => {
    homeButton.setAttribute("class", "active-header-button");
    menuButton.removeAttribute("class");
    aboutButton.removeAttribute("class");
    contentDiv.innerHTML = "";
    addHomeContent();
});

aboutButton.addEventListener("click", () => {
    aboutButton.setAttribute("class", "active-header-button");
    menuButton.removeAttribute("class");
    homeButton.removeAttribute("class");
});

menuButton.addEventListener("click", () => {
    menuButton.setAttribute("class", "active-header-button");
    homeButton.removeAttribute("class");
    aboutButton.removeAttribute("class");
    contentDiv.innerHTML = "";
    addMenuContent();
});

const clickEvent = new Event("click");
homeButton.dispatchEvent(clickEvent);
