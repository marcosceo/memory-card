const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();

const memoryCard = {
    nameClass: "",
    src: "img/icon-collabcode.png",
    alt: "Gueio, mascote da Collabcode"
}

const languageC = {
    nameClass: "-front",
    src: "img/icon-c.png",
    alt: "Icone de um livro da linguagem C++"
}
const languageJava = {
    nameClass: "-front",
    src: "img/icon-java.png",
    alt: "Icone de um livro da linguagem Java"
}
const woman = {
    nameClass: "-front",
    src: "img/icon-woman.png",
    alt: "Icone representando uma mulher ao computador"
}

const $memoryCard = createMemoryCard(memoryCard);
const $frontardC= createMemoryCard(languageC);
const $frontCardJava = createMemoryCard(languageJava);
const $frontCardWoman = createMemoryCard(woman);

// const $memoryCard = createMemoryCard("img/icon-collabcode.png", "Gueio, mascote da Collabcode");
// const $frontardC= createMemoryCard("img/icon-c.png", "Icone de um livro da linguagem C++","-front");
// const $frontCardJava = createMemoryCard("img/icon-java.png", "Icone de um livro da linguagem Java","-front");
// const $frontCardWoman = createMemoryCard("img/icon-woman.png", "Icone representando uma mulher ao computador","-front");

$root.insertAdjacentElement("beforeend", $cardsWrapper);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $frontCardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $frontCardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $frontCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $frontCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $frontardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $frontardC);




