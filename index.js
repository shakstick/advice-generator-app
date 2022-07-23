const img = document.querySelector("img");
// const box = document.querySelector(".box");
const changer = document.querySelector(".dice");
const idSpan = document.querySelector("span");
const url = "https://api.adviceslip.com/advice";

quoteGenerator();

changer.addEventListener("click", quoteGenerator);

function quoteGenerator() {
  fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      idSpan.textContent = "#" + responseJson.slip.id;

      const quoteEl = document.createElement("blockquote");
      quoteEl.textContent = responseJson.slip.advice;
      quoteEl.classList.add("animate__animated", "animate__pulse");
      quoteEl.setAttribute("id", "new");
      img.parentElement.insertBefore(quoteEl, img);
    });
  try {
    document.querySelector("#new").remove();
  } catch (e) {}
}
