const $root = document.querySelector('#root')

const $cardsWrapper = createCardsWrapper()

const $card = createMemoryCard("", "/images/icon-collabcode.svg", "Gueio - mascote da CollabCode")
const $cardC = createMemoryCard("-front", "/images/icon-c.png", "Ícone de um livro de C++")
const $cardPHP = createMemoryCard("-front", "/images/icon-php.png", "Ícone de um livro de PHP");
const $cardJS = createMemoryCard("-front", "/images/icon-js.png", "Ícone de um livro de JavaScript");

$cardsWrapper.insertAdjacentHTML("beforeend", $card)
$cardsWrapper.insertAdjacentHTML("beforeend", $card)
$cardsWrapper.insertAdjacentHTML("beforeend", $cardC)
$cardsWrapper.insertAdjacentHTML("beforeend", $cardC)
$cardsWrapper.insertAdjacentHTML("beforeend", $cardPHP)
$cardsWrapper.insertAdjacentHTML("beforeend", $cardPHP)
$cardsWrapper.insertAdjacentHTML("beforeend", $cardJS)
$cardsWrapper.insertAdjacentHTML("beforeend", $cardJS)

$root.insertAdjacentElement("beforeend", $cardsWrapper)