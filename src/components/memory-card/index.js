function memoryCard (){
  const $head = document.querySelector("head")
  const $style = document.createElement("style")

  $style.textContent = `
    .memory-card{
      width: 155px;
      height: 155px;
      background-color: #f25a70;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16);
      position: relative;
      margin: 5px auto;
      cursor: pointer;
    }

    .memory-card.-front{
      background-color: #ffffff;
    }

    .memory-card.-front::before{
      content: '';
      background-color: #d4d4d4;
      width: 94px;
      height: 94px;
      border-radius: 50%;
      position: absolute;
    }

    .memory-card > .icon{
      width: 100px;
      height: 100px;
    }

    .memory-card.-front > .icon{
      width: 100px;
      transform: translateY(-10px);
    }
  `

  $head.insertBefore($style, null)

  return ({ nameClass, src, alt }) => `
    <article class="memory-card ${nameClass}">
      <img 
        class="icon"
        src="${src}"
        alt="${alt}"
        onclick="handleClick()"
      />
    </article>  
  `;
}


const handleClick = () => console.log("Deu certo!")