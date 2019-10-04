const $root = document.querySelector('#root')

const $cardsWrapper = createCardsWrapper()
const $card = createMemoryCard();
const $cardFront = createMemoryCardFront();

$cardsWrapper.insertAdjacentHTML("beforeend", $card)
$cardsWrapper.insertAdjacentHTML("beforeend", $card)
$cardsWrapper.insertAdjacentHTML("beforeend", $card)
$cardsWrapper.insertAdjacentHTML("beforeend", $card)
$cardsWrapper.insertAdjacentHTML("beforeend", $card)
$cardsWrapper.insertAdjacentHTML("beforeend", $card)
$cardsWrapper.insertAdjacentHTML("beforeend", $cardFront)
$cardsWrapper.insertAdjacentHTML("beforeend", $cardFront)

$root.insertAdjacentElement("beforeend", $cardsWrapper)