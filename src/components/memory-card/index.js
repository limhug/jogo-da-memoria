const createMemoryCard = (className, image, alt) => `
  <article class="memory-card ${className}">
    <img 
      class="icon"
      src="${image}"
      alt="${alt}"
      onclick="handleClick()"
    />
  </article>
`

const handleClick = () => console.log("Deu certo!")