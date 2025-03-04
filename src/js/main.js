// Animação do FAQ
const faqArrows = document.querySelectorAll(".questions");

faqArrows.forEach((arrow) => {
  arrow.addEventListener("click", (event) => {
    event.stopPropagation();

    const questionItem = arrow.closest(".questions");
    questionItem.classList.toggle("active");
  });
});

// // Seleciona todos os cards
// const cards = document.querySelectorAll(".prices-box-stiles");
// let currentCard = 0;

// // Função para atualizar o card visível
// function updateCards() {
//   cards.forEach((card, index) => {
//     card.classList.toggle("active", index === currentCard);
//   });
// }

// // Adiciona eventos aos botões de seta direita
// document.querySelectorAll(".prices-arrow-right").forEach((arrow) => {
//   arrow.addEventListener("click", () => {
//     currentCard = (currentCard + 1) % cards.length;
//     updateCards();
//   });
// });

// // Adiciona eventos aos botões de seta esquerda
// document.querySelectorAll(".prices-arrow-left").forEach((arrow) => {
//   arrow.addEventListener("click", () => {
//     currentCard = (currentCard - 1 + cards.length) % cards.length;
//     updateCards();
//   });
// });

const cards = document.querySelectorAll(".prices-box-stiles");
let currentCard = 0;

function updateCards(direction) {
  cards.forEach((card, index) => {
    card.classList.remove("active", "prev", "next");

    if (index === currentCard) {
      card.classList.add("active");
    } else if (
      (direction === "right" && index === (currentCard + 1) % cards.length) ||
      (direction === "left" &&
        index === (currentCard - 1 + cards.length) % cards.length)
    ) {
      card.classList.add(direction === "right" ? "next" : "prev");
    }
  });
}

document.querySelectorAll(".prices-arrow-right").forEach((arrow) => {
  arrow.addEventListener("click", () => {
    const lastCard = currentCard;
    currentCard = (currentCard + 1) % cards.length;
    updateCards("right");
  });
});

document.querySelectorAll(".prices-arrow-left").forEach((arrow) => {
  arrow.addEventListener("click", () => {
    const lastCard = currentCard;
    currentCard = (currentCard - 1 + cards.length) % cards.length;
    updateCards("left");
  });
});

// Inicializa o primeiro card
updateCards("right");
