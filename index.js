const quoteSection = document.querySelector("blockquote");
const changer = document.querySelector(".dice");
const idSpan = document.querySelector("span");
const url = "https://api.adviceslip.com/advice";

quoteGenerator();

changer.addEventListener("click", quoteGenerator);

function quoteGenerator() {
  fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      quoteSection.textContent = responseJson.slip.advice;
      idSpan.textContent = "#" + responseJson.slip.id;
    });
}
