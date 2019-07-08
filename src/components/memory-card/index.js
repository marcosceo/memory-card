const createMemoryCard = nameClass => {
    let src = "img/icon-collabcode.png";
    
    if(nameClass === "-front"){
        src = "img/icon-c.png"
    };
    
    return `            
            <article class="memory-card ${nameClass}">
                <img 
                    class="icon" 
                    src=${src} 
                    alt="Gueio, mascote da Collabcode"
                    onclick = "handleClick()"
                />
            </article>`;

}

const handleClick = () => console.log("Consegui!");