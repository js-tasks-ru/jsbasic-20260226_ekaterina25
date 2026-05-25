import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    let slidesHTML = this.slides.map(slide => `
    <div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
      `).join('');

    this.elem = createElement(`
      <div class="carousel">
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>

      <div class="carousel__inner">
        ${slidesHTML}
      </div>
    </div>
    `)

    this.currentSlideNumber = 0;

    let rightArrow = this.elem.querySelector('.carousel__arrow_right');
    let leftArrow = this.elem.querySelector('.carousel__arrow_left');
    let caruselInner = this.elem.querySelector('.carousel__inner');

    rightArrow.addEventListener('click', () => {
      this.currentSlideNumber++
      let slideWidth = caruselInner.offsetWidth;
      caruselInner.style.transform = `translateX(-${this.currentSlideNumber * slideWidth}px)`
      updateArrows.call(this)
    })

    leftArrow.addEventListener('click', () => {
      this.currentSlideNumber--
      let slideWidth = caruselInner.offsetWidth;
      caruselInner.style.transform = `translateX(-${this.currentSlideNumber * slideWidth}px)`
      updateArrows.call(this)
    })

    function updateArrows() {
      if (this.currentSlideNumber === 0) {
        leftArrow.style.display = "none"
      } else {
        leftArrow.style.display = ""
      }

      if (this.currentSlideNumber === this.slides.length -1) {
        rightArrow.style.display = "none"
      } else {
        rightArrow.style.display = ""
      }
    }
    updateArrows.call(this)

    this.elem.addEventListener('click', (event) => {
      let button = event.target.closest('.carousel__button')

      if (button) {
        let slide = event.target.closest('.carousel__slide')
        let id = slide.dataset.id

        this.elem.dispatchEvent(new CustomEvent("product-add", {
          detail: id,
          bubbles: true
        }))
      }
    })
  }
}
