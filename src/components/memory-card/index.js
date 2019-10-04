function memoryCardClose() {
  const $memoryCard = document.createElement("article");
  const $iconGueio = `<img class="icon" src="/images/icon-collabcode.svg" alt="Gueio - Mascote da CollabCode" />`;

  $memoryCard.classList.add("memory-card");
  $memoryCard.insertAdjacentHTML("afterbegin", $iconGueio);
  $wrapCards.insertBefore($memoryCard, null);

  $memoryCard.addEventListener("click", () => console.log("clicou!!!"));
}

function $memoryCardOpen() {
  const $memoryCardFront = document.createElement("article");
  const $iconCPlusPlus = `<img class="icon" src="/images/icon-c.png" alt="C++">`;

  $memoryCardFront.classList.add("memory-card");
  $memoryCardFront.classList.add("-front");
  $memoryCardFront.insertAdjacentHTML("afterbegin", $iconCPlusPlus);
  $wrapCards.insertBefore($memoryCardFront, null);
  
  $memoryCardFront.addEventListener("click", () => console.log("clicou no front!!!"));
}
