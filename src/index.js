// Creating variables
const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $frontMemoryCard = document.createElement("article");
const $iconCollab = `<img 
                class="icon" 
                src="img/icon-collabcode.png" 
                alt="Gueio, mascote da Collabcode"
                >`;

const $iconC = `<img 
                class="icon" 
                src="img/icon-c.png" 
                alt="Icone de um livro da linguagem C++"
                >`;           

// Add class to the components
$memoryCard.classList.add("memory-card");
$frontMemoryCard.classList.add("memory-card");
$frontMemoryCard.classList.add("-front");

// Add component to the root tag
$root.insertBefore($memoryCard, null);
$memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);

$root.insertBefore($frontMemoryCard, $memoryCard);
$frontMemoryCard.insertAdjacentHTML("beforeend", $iconC);

