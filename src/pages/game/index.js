const $root = document.querySelector('#root')

const $cardsWrapper = createCardsWrapper()
const createMemoryCard = memoryCard()

const $card = createMemoryCard({src: "/images/icon-collabcode.svg", alt: "Gueio - mascote da CollabCode"})
const $cardC = createMemoryCard({nameClass: "-front", src: "/images/icon-c.png", alt: "Ícone de um livro da linguagem C++"})
const $cardPHP = createMemoryCard({nameClass: "-front", src: "/images/icon-php.png", alt: "Ícone de um livro de PHP"});
const $cardJS = createMemoryCard({nameClass: "-front", src: "/images/icon-js.png", alt: "Ícone de um livro de JavaScript"});

$cardsWrapper.insertAdjacentHTML("beforeend", $card)
$cardsWrapper.insertAdjacentHTML("beforeend", $card)
$cardsWrapper.insertAdjacentHTML("beforeend", $cardC)
$cardsWrapper.insertAdjacentHTML("beforeend", $cardC)
$cardsWrapper.insertAdjacentHTML("beforeend", $cardPHP)
$cardsWrapper.insertAdjacentHTML("beforeend", $cardPHP)
$cardsWrapper.insertAdjacentHTML("beforeend", $cardJS)
$cardsWrapper.insertAdjacentHTML("beforeend", $cardJS)

$root.insertAdjacentElement("beforeend", $cardsWrapper)