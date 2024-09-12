import "./styles.css";
import {pageLoad} from "./home.js";
import {aboutLoad} from "./about.js";
import {menuLoad} from "./menu.js";

pageLoad();

const homeTab = document.querySelector("#home");
const aboutTab = document.querySelector("#about");
const menuTab = document.querySelector("#menu");

homeTab.addEventListener("click", function () {
    pageLoad();
});

aboutTab.addEventListener("click", function () {
    aboutLoad();
});

menuTab.addEventListener("click", function () {
    menuLoad();
});