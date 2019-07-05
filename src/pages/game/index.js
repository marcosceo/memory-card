createMemoryCard();
createMemoryCard();
createMemoryCard();
createMemoryCard();
createMemoryCard();
createMemoryCard();
createFrontMemoryCard();
createFrontMemoryCard();

const wrap = document.querySelector(".wrap-cards");

wrap.addEventListener("click", function(e) {
    if (e.target.classList.contains("memory-card") || e.target.classList.contains("icon")){
        console.log("ae");
    } 
})

