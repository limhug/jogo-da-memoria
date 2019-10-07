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
    
    .memory-card.-active .card{
      display: none;
    }

    .memory-card.-active .card.-front{
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
  `

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


const handleClick = ($card) => $card.classList.toggle("-active")