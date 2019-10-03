const $root = document.querySelector("#root")
const $memoryCard = document.createElement("article")
const $memoryCardOpen = document.createElement("article")
const $bgIconCenter = document.createElement("div")
const $iconGueio = `<img class="icon" src="/images/icon-collabcode.svg" alt="Gueio - Mascote da CollabCode" />`;
const $iconCPlusPlus = `<img class="icon" src="/images/icon-c.png" alt="C++">`;

$memoryCard.classList.add('memory-card')
$memoryCardOpen.classList.add('memory-card')
$memoryCardOpen.classList.add('-open')
$bgIconCenter.classList.add('bg-center')

$root.insertBefore($memoryCard, null)
$memoryCard.insertAdjacentHTML('afterbegin', $iconGueio)

$root.insertBefore($memoryCardOpen, $memoryCard)
$memoryCardOpen.insertBefore($bgIconCenter, null)
$bgIconCenter.insertAdjacentHTML('afterbegin', $iconCPlusPlus)
