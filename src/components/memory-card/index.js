const createMemoryCard = ({nameClass, src, alt}) => {
    
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    
    $style.textContent = `
    .memory-card {
        width: 155px;
        height: 155px;
        background-color: #f25a70;
        border-radius: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 3px 6px  rgba(0, 0, 0, 0.16);
        position: relative;
    }
    
    .memory-card.-front {
        background-color: #fff;
    }
    
    .memory-card.-front::before {
        content: "";
        width: 95px;
        height: 95px;
        background-color: #d4d4d4;
        border-radius: 50%;
        position: absolute;
    }
    
    .memory-card > .icon {
        width: 100px;
        height: 100px;
        cursor: pointer;
    }
    
    .memory-card.-front > .icon {
        position: absolute;
        transform: translateY(-12px);
    }`;

    $head.insertAdjacentElement("beforeend", $style);

    return `
            <article class="memory-card ${nameClass}">
                <img 
                    class="icon" 
                    src="${src}"
                    alt="${alt}"
                    onclick = "handleClick()"
                />
            </article>
            `;
        }



const handleClick = () => console.log("Consegui!");