// Animação do FAQ
const faqArrows = document.querySelectorAll(".questions > img");

faqArrows.forEach((arrow) => {
  arrow.addEventListener("click", (event) => {
    event.stopPropagation();

    const questionItem = arrow.closest(".questions");
    questionItem.classList.toggle("active");
  });
});
