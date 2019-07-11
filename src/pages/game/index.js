const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();

const $memoryCard = createMemoryCard({
    nameClass: "",
    src: "img/icon-collabcode.png",
    alt: "Gueio, mascote da Collabcode"
});
const $frontardC= createMemoryCard({
    nameClass: "-front",
    src: "img/icon-c.png",
    alt: "Icone de um livro da linguagem C++"
});
const $frontCardJava = createMemoryCard({
    nameClass: "-front",
    src: "img/icon-java.png",
    alt: "Icone de um livro da linguagem Java"
});
const $frontCardWoman = createMemoryCard({
    nameClass: "-front",
    src: "img/icon-woman.png",
    alt: "Icone representando uma mulher ao computador"
});

$root.insertAdjacentElement("beforeend", $cardsWrapper);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $frontCardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $frontCardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $frontCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $frontCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $frontardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $frontardC);




