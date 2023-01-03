let myEmojis = [];
let inputEl = document.getElementById("input-el");
let emojiEl = document.getElementById("emoji-el");
let addEndBtn = document.getElementById("add-end-btn");
let addBegBtn = document.getElementById("add-beg-btn");
let removeEndBtn = document.getElementById("remove-end-btn");
let removeBegBtn = document.getElementById("remove-beg-btn");

addEndBtn.addEventListener("click", function () {
  myEmojis.push(inputEl.value);
  console.log(myEmojis);
  inputEl.value = "";
  emojiEl.innerHTML = "";
  renderEmojis();
});

addBegBtn.addEventListener("click", function () {
  myEmojis.unshift(inputEl.value);
  console.log(myEmojis);
  inputEl.value = "";
  emojiEl.innerHTML = "";
  renderEmojis();
});

removeEndBtn.addEventListener("click", function () {
  myEmojis.pop();
  console.log(myEmojis);
  emojiEl.innerHTML = "";
  renderEmojis();
});

removeBegBtn.addEventListener("click", function () {
  myEmojis.shift();
  console.log(myEmojis);
  emojiEl.innerHTML = "";
  renderEmojis();
});

function renderEmojis() {
  for (let i = 0; i < myEmojis.length; i++) {
    emojiEl.innerHTML += `<h2 id="emoji-el"> ${myEmojis[i]} </h2>`;
  }
}
