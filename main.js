import { Navbar } from './navbar.js';



let array = ["nav_responsive"];
let count = 1;
let count2 = 1;

function recursive() {
    if (window.innerWidth >= 720) {
        document.getElementsByClassName("navbar-toggler")[0], count, array, document.getElementsByClassName("navbar-collapse")[0].style.display = "flex";
    }

    if (window.innerWidth >= 720) {
        document.getElementsByClassName("navbar-toggler")[0], count, array, document.getElementsByClassName("navbar-collapse")[0].style.display = "flex";
    } else {
        let nav = new Navbar(document.getElementsByClassName("navbar-toggler")[0], count, array, document.getElementsByClassName("navbar-collapse")[0]);

        nav.optionsFunction();

        console.log("test ok");

    }

    if (document.getElementsByClassName("navbar-toggler")[0].style.display == "none") {
        document.getElementsByClassName("navbar-toggler")[0], count, array, document.getElementsByClassName("navbar-collapse")[0].style.display = "flex";
    }

    setTimeout(recursive, 2000);
}

let nav = new Navbar(document.getElementsByClassName("dropdown-toggle")[0], count2, array, document.getElementsByClassName("dropdown-menu")[0]);

nav.optionsFunction();

recursive();

