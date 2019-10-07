const $root = document.querySelector('#root')

const $cardsWrapper = createCardsWrapper()
const createMemoryCard = memoryCard()

const $card = createMemoryCard({nameClass: "-front", src: "/images/icon-woman.png", alt: "O ícone de uma mina codando"});
const $cardC = createMemoryCard({nameClass: "-front", src: "/images/icon-c.png", alt: "Ícone de um livro da linguagem C++"})
const $cardPHP = createMemoryCard({nameClass: "-front", src: "/images/icon-php.png", alt: "Ícone de um livro de PHP"});
const $cardJS = createMemoryCard({nameClass: "-front", src: "/images/icon-js.png", alt: "Ícone de um livro de JavaScript"});

$cardsWrapper.insertAdjacentHTML("beforeend", $card)
$cardsWrapper.insertAdjacentHTML("beforeend", $cardC)
$cardsWrapper.insertAdjacentHTML("beforeend", $cardPHP)
$cardsWrapper.insertAdjacentHTML("beforeend", $cardC)
$cardsWrapper.insertAdjacentHTML("beforeend", $card)
$cardsWrapper.insertAdjacentHTML("beforeend", $cardJS)
$cardsWrapper.insertAdjacentHTML("beforeend", $cardJS)
$cardsWrapper.insertAdjacentHTML("beforeend", $cardPHP)

$root.insertAdjacentElement("beforeend", $cardsWrapper)