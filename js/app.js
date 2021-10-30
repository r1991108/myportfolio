const text = document.querySelectorAll(".thePaths");

for (let i = 0; i < text.length; i++) {
  console.log(`text number ${i} length is ${text[i].getTotalLength()}`);
}

const lastWord = document.querySelector("#fourth");
const animation = document.querySelector("div.animation");
if (lastWord != null) {
  lastWord.addEventListener("animationend", () => {
    animation.style =
      "transition: all 1s ease 0.2s; opacity: 0; pointer-events: none; transform: scale(1.5, 1.5);";
  });
}

let header = document.querySelector(".headerContainer");
let nav = document.querySelector(".headerContainer nav");
let nav_bk = nav.innerHTML;
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    nav.innerHTML = "";
    header.style.boxShadow = "0 10px 10px -5px rgb(85, 85, 85)";
  } else {
    nav.innerHTML = nav_bk;
    header.style.boxShadow = "";
  }
});
