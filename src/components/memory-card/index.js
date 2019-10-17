function memoryCard (){
  const $head = document.querySelector("head")
  const $style = document.createElement("style")

  $style.textContent = `
    .memory-card{
      width: 155px;
      height: 155px;
      position: relative;
      margin-bottom: 15px;
    }

    .memory-card .card{
      width: 100%;
      height: 100%;
      background-color: #f25a70;
      border-radius: 10px;
      display:flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16);
      position: relative;
      cursor: pointer;
      position: absolute;
    }

    
    .memory-card .card.-front{
      background-color: #ffffff;
      display: none;
    }
    
    .memory-card.-active .card,
    .memory-card.-score .card{
      display: none;
    }

    .memory-card.-active .card.-front,
    .memory-card.-score .card.-front{
      display: flex;
    }

    .memory-card .card.-front::before{
      content: '';
      background-color: #d4d4d4;
      width: 94px;
      height: 94px;
      border-radius: 50%;
      position: absolute;
    }

    .memory-card .card > .icon{
      width: 100px;
      height: 100px;
    }

    .memory-card .card.-front > .icon{
      width: 100px;
      transform: translateY(-10px);
    }
  `;

  $head.insertBefore($style, null)

  return ({ nameClass, src, alt }) => `
    <div class="memory-card" onclick="handleClick(this)">
      <article class="card ${nameClass}">
        <img 
          class="icon"
          src="${src}"
          alt="${alt}"
        />
      </article>
      <article class="card">
        <img 
          class="icon"
          src="/images/icon-collabcode.svg"
          alt="Gueio - Mascote da Collabcode"
        />
      </article>
    </div>  
  `;
}

let score = 0

const handleClick = ($card) => {

  if(qtdMemoryCardActive < 2){
    $card.classList.add("-active")
  }

  if(qtdMemoryCardActive === 1){

    const $memoryCardsActive = document.querySelectorAll(".memory-card.-active")

    if ($memoryCardsActive[0].querySelector(".-front .icon").getAttribute("src") === $memoryCardsActive[1].querySelector(".-front .icon").getAttribute("src")){
      score+=2
      console.log("Score:", score);
      $memoryCardsActive.forEach($memoryCard => {
        $memoryCard.classList.add("-score");
        $memoryCard.classList.remove("-active");
      });
    } else {
      score--;
      console.log("Score:", score)
      setTimeout(() => {
        const activeMemoryCards = document.querySelectorAll(
          ".memory-card.-active"
        );

        activeMemoryCards.forEach($memoryCards => {
          $memoryCards.classList.remove("-active");
        });

        qtdMemoryCardActive = 0;
      }, 1500);
    }
  }
}