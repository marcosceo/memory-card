(function(){
const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
const createMemoryCard = memoryCard.create();

const $pointBar = pointBar.create();
const $startLayer = startLayer.render("Start");

const $frontCardJS = createMemoryCard({
  src: "img/icon-js.png",
  alt: "Icone de um livro da linguagem JavaScript"
});
const $frontCardC = createMemoryCard({
  src: "img/icon-c.png",
  alt: "Icone de um livro da linguagem C++"
});
const $frontCardJava = createMemoryCard({
  src: "img/icon-java.png",
  alt: "Icone de um livro da linguagem Java"
});
const $frontCardWoman = createMemoryCard({
  src: "img/icon-woman.png",
  alt: "Icone representando uma mulher ao computador"
});

$root.insertAdjacentHTML("afterbegin", $pointBar);
$root.insertAdjacentElement("beforeend", $cardsWrapper);
$root.insertAdjacentHTML("beforeend", $startLayer);

$cardsWrapper.insertAdjacentHTML("beforeend", $frontCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $frontCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $frontCardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $frontCardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $frontCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $frontCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $frontCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $frontCardC);
})();



