function createMemoryCard() {
  const $memoryCard = `
    <article class="memory-card">
      <img class="icon" src="/images/icon-collabcode.svg" alt="Gueio - Mascote da CollabCode" onclick="handleClick()" />
    </article>
  `;

  return $memoryCard
}

function createMemoryCardFront() {
  const $memoryCardFront = `
    <article class="memory-card -front">
      <img class="icon" src="/images/icon-c.png" alt="C++" onclick="handleClick()" />
    </article>
  `;

  return $memoryCardFront
}

function handleClick(){
  console.log("Deu certo!")
}