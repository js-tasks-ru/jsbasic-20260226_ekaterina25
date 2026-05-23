function initCarousel() {
  let carousel = document.querySelector('.carousel__inner');
  let leftArrow = document.querySelector('.carousel__arrow_left');
  let rightArrow = document.querySelector('.carousel__arrow_right');
  let index = 0;
  let slides = carousel.querySelectorAll('.carousel__slide');
  let lastIndex = slides.length - 1;

  function updateArrows() {
    if (index === lastIndex) {
      rightArrow.style.display = 'none';
    } else {
      rightArrow.style.display = '';
    }

    if (index === 0) {
      leftArrow.style.display = 'none' 
    } else {
      leftArrow.style.display = ''
    }
  }

  rightArrow.addEventListener('click', () => {
    if (index === lastIndex) return;
    index++
    let width = carousel.offsetWidth;
    let amount = index * width;
    carousel.style.transform = `translateX(-${amount}px)`
    updateArrows()
  });

    leftArrow.addEventListener('click', () => {
    if (index === 0) return;
    index--
    let width = carousel.offsetWidth;
    let amount = index * width;
    carousel.style.transform = `translateX(-${amount}px)`
    updateArrows()
  });
  
  updateArrows();
}
