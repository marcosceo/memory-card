const memoryCard = () => {

  const $head = document.querySelector("head");
  const $style = document.createElement("style");

  $style.textContent = `
    .memory-card {
      width: 155px;
      height: 155px;
      position: relative;
    }

    .memory-card .card {
      width: 100%;
      height: 100%;
      background-color: #f25a70;
      border-radius: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 3px 6px  rgba(0, 0, 0, 0.16);
      position: absolute;
    }

    .memory-card.-active .card,
    .memory-card.-score .card {
      display: none;
    }

    .memory-card.-active .card.-front,
    .memory-card.-score .card.-front {
      display: flex;
    }
    
    .memory-card .card.-front {
      background-color: #fff;
    }
    
    .memory-card .card.-front::before {
      content: "";
      width: 95px;
      height: 95px;
      background-color: #d4d4d4;
      border-radius: 50%;
      position: absolute;
    }
    
    .memory-card .card > .icon {
      width: 100px;
      height: 100px;
      cursor: pointer;
    }
    
    .memory-card .card.-front > .icon {
      position: absolute;
      transform: translateY(-12px);
    }`;

  $head.insertAdjacentElement("beforeend", $style);

  return ({ src, alt }) => `
  <div class="memory-card" onclick = "handleClick(this)">
    <article class="card -front">
      <img 
        class="icon" 
        src="${src}"
        alt="${alt}"
        
      />
    </article>
    <article class="card">
      <img 
        class="icon" 
        src="img/icon-collabcode.png"
        alt=""Gueio, mascote da Collabcode""
        
      />
    </article>
      
  </div>
  `;
}

const handleClick = $component => {
  if(!$component.classList.contains("-active")) {
    activeMemoryCard($component);
    checkScore();    
  }
};  

function activeMemoryCard($component) {
  if (store.numberActiveMemoryCard < 2) {
    $component.classList.add("-active");
  };
};

function checkScore() {
  if (store.numberActiveMemoryCard === 1) {
    const $activeMemoryCard = document.querySelectorAll(".memory-card.-active");
    if($activeMemoryCard[0].querySelector(".-front .icon").getAttribute("src") === $activeMemoryCard[1].querySelector(".-front .icon").getAttribute("src")){
      
      store.score++;
      console.log("Score: ", store.score);

      $activeMemoryCard.forEach($memoryCard => {
        $memoryCard.classList.add("-score");
        $memoryCard.classList.remove("-active");  
      });
    } else { 
      setTimeout(() => {
        

        $activeMemoryCard.forEach(($memoryCard) => {
          $memoryCard.classList.remove("-active");
        });

        store.numberActiveMemoryCard = 0;
      }, 1500);
    }
  }
}