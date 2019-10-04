const $root = document.querySelector('#root')

const $cardsWrapper = createCardsWrapper()
const $card = createMemoryCard(
  "",
  "/images/icon-collabcode.svg",
  "Gueio - mascote da CollabCode"
)

const $cardFront = createMemoryCard(
  "-front",
  "/images/icon-c.png",
  "C++"
)

$cardsWrapper.insertAdjacentHTML("beforeend", $card)
$cardsWrapper.insertAdjacentHTML("beforeend", $card)
$cardsWrapper.insertAdjacentHTML("beforeend", $card)
$cardsWrapper.insertAdjacentHTML("beforeend", $card)
$cardsWrapper.insertAdjacentHTML("beforeend", $card)
$cardsWrapper.insertAdjacentHTML("beforeend", $card)
$cardsWrapper.insertAdjacentHTML("beforeend", $cardFront)
$cardsWrapper.insertAdjacentHTML("beforeend", $cardFront)

$root.insertAdjacentElement("beforeend", $cardsWrapper)