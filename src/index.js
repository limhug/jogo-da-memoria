const $root = document.querySelector("#root")

function memoryCardClose(){
  const $memoryCard = document.createElement("article")
  const $iconGueio = `<img class="icon" src="/images/icon-collabcode.svg" alt="Gueio - Mascote da CollabCode" />`;
  
  $memoryCard.classList.add('memory-card')
  $memoryCard.insertAdjacentHTML('afterbegin', $iconGueio)
  $root.insertBefore($memoryCard, null)
}


function $memoryCardOpen(){  
  const $memoryCardFront = document.createElement("article")
  const $iconCPlusPlus = `<img class="icon" src="/images/icon-c.png" alt="C++">`;
  
  $memoryCardFront.classList.add('memory-card')
  $memoryCardFront.classList.add('-front')
  $memoryCardFront.insertAdjacentHTML("afterbegin", $iconCPlusPlus);
  $root.insertBefore($memoryCardFront, null)
}

$memoryCardOpen()
memoryCardClose()
memoryCardClose()
memoryCardClose()
memoryCardClose()
memoryCardClose()
memoryCardClose()
memoryCardClose()
memoryCardClose()
memoryCardClose()