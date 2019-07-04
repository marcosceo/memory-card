function createMemoryCard() {
    const $memoryCard = document.createElement("article");

    const $iconCollab = `<img 
                class="icon" 
                src="img/icon-collabcode.png" 
                alt="Gueio, mascote da Collabcode"
                >`;

    $memoryCard.classList.add("memory-card");

    $wrapCards.insertBefore($memoryCard, null);
    $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
}

function createFrontMemoryCard() {
    const $frontMemoryCard = document.createElement("article");

    const $iconC = `<img 
                class="icon" 
                src="img/icon-c.png" 
                alt="Icone de um livro da linguagem C++"
                >`;           

// Add class to the components

$frontMemoryCard.classList.add("memory-card");
$frontMemoryCard.classList.add("-front");

// Add component to the root tag


$wrapCards.insertBefore($frontMemoryCard, null);
$frontMemoryCard.insertAdjacentHTML("beforeend", $iconC);
}
