import generateJoke from "./generateJoke";
import "./styles/main.scss";
import brain from "./assets/brain.jpg";

const brainImg = document.querySelector("#brainImg");
brainImg.src = brain;

console.log(generateJoke());
