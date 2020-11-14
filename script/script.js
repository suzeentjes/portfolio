const menuBtn = document.querySelector ('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
  
});

var button = document.querySelector(".menu-btn");

console.log(button)

function toggleMenu() {
document.body.classList.toggle("toonMenu");
}

button.addEventListener("click", toggleMenu);
