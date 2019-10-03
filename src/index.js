const $root = document.querySelector("#root")
const $memoryCard = document.createElement("article")
const $memoryCardFront = document.createElement("article")
const $iconGueio = `<img class="icon" src="/images/icon-collabcode.svg" alt="Gueio - Mascote da CollabCode" />`;
const $iconCPlusPlus = `<img class="icon" src="/images/icon-c.png" alt="C++">`;

$memoryCard.classList.add('memory-card')
$root.insertBefore($memoryCard, null)
$memoryCard.insertAdjacentHTML('afterbegin', $iconGueio)

$memoryCardFront.classList.add('memory-card')
$memoryCardFront.classList.add('-front')
$root.insertBefore($memoryCardFront, $memoryCard)
$memoryCardFront.insertAdjacentHTML("afterbegin", $iconCPlusPlus);
