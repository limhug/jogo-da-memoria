let qtdMemoryCardActive = 0

function createCardsWrapper(){
  const $cardsWrapper = document.createElement('section')
  $cardsWrapper.classList.add('cards-wrapper')

  const $head = document.querySelector("head")
  const $style = document.createElement("style")
  
  $style.textContent = `
    .cards-wrapper{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-top: 15px;
    }
  `

  $head.insertBefore($style, null)


  $cardsWrapper.addEventListener("click", () => {
    qtdMemoryCardActive = document.querySelectorAll(".memory-card.-active").length
  })
  
  return $cardsWrapper

}