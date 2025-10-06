
// address it with how you would in cs
const button = document.querySelector(".btn");
console.log(button);

const box = document.querySelector("box");
button.addEventListener("click", function(event) {
    /* console.log(event);
    console.log(event.target); */
    box.style.backgroundColor = "red";
}); // this allows the button to pick up on stuff