document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".service-box-wrapper");
  const leftArrow = document.querySelector(".service-arrow-left");
  const rightArrow = document.querySelector(".service-arrow-right");
  const items = document.querySelectorAll(".service-box");
  let currentIndex = 0;
  let autoPlayInterval;
  let isHovering = false;

  function updateCarousel() {
    const itemWidth = items[0].offsetWidth + 40; // 20px é o gap
    wrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }

  function nextSlide() {
    if (currentIndex < items.length - 4) {
      currentIndex++;
    } else {
      currentIndex = 0; // Reset para o início
    }
    updateCarousel();
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = items.length - 1; // Vai para o último item
    }
    updateCarousel();
  }

  function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
      if (!isHovering) nextSlide();
    }, 3000);
  }

  // Event listeners
  rightArrow.addEventListener("click", () => {
    nextSlide();
    resetAutoPlay();
  });

  leftArrow.addEventListener("click", () => {
    prevSlide();
    resetAutoPlay();
  });

  wrapper.addEventListener("mouseenter", () => (isHovering = true));
  wrapper.addEventListener("mouseleave", () => (isHovering = false));

  function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
  }

  // Inicialização
  startAutoPlay();
  window.addEventListener("resize", () => {
    updateCarousel();
    resetAutoPlay();
  });
});
