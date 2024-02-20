"user strict"

let DIV_textResult = document.querySelector("div.textResult");

function createVerse(leftText, rightText) {
  let DIV_verse = document.createElement("div");
  let DIV_left = document.createElement("div");
  let DIV_right = document.createElement("div");

  DIV_verse.classList.add("verse");
  DIV_left.classList.add("left");
  DIV_right.classList.add("right");
  DIV_left.innerText = leftText;
  DIV_right.innerText = rightText;

  DIV_verse.appendChild(DIV_left);
  DIV_verse.appendChild(DIV_right);
  DIV_textResult.appendChild(DIV_verse);
}
function createAllVerses(leftText, rightText) {
  let left = leftText.split("\n");
  let right = rightText.split("\n");

  for (let i = 0; i < left.length || i < right.length; i++) {
    leftText = left[i] || "";
    rightText = right[i] || "";
    createVerse(leftText, rightText);
  }
}
function clearVerses() {
  DIV_textResult.innerHTML = "";
}

function organize() {
  let TEXTAREA_left = document.querySelector("textarea.left");
  let TEXTAREA_right = document.querySelector("textarea.right");
  let left = TEXTAREA_left.value;
  let right = TEXTAREA_right.value;

  clearVerses();
  createAllVerses(left, right);
}
let BUTTON_organize = document.querySelector("button");
BUTTON_organize.addEventListener("click", organize);

function center() {
  let aDIV_left = document.querySelectorAll("div.left");
  aDIV_left.forEach(function (v) {
    v.classList.toggle("align-right");
    console.log(82726626);
  });
}
let INPUT_center = document.querySelector("#center");
INPUT_center.addEventListener("click", center);
