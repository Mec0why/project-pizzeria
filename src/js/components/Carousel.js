/* global Flickity*/
import { select } from '../settings.js';

class Carousel {
  constructor(element) {
    const thisCarousel = this;

    thisCarousel.render(element);
    thisCarousel.initCarousel(element);
  }

  render(element) {
    const thisCarousel = this;

    thisCarousel.dom = {};

    thisCarousel.dom.wrapper = element;

    thisCarousel.dom.carousel = element.querySelector(
      select.containerOf.carousel
    );
  }

  initCarousel(element) {
    const thisCarousel = this;

    const flickityOpt = new Flickity(element, {
      // options
      contain: true,
      imagesLoaded: true,
      autoPlay: true,
    });
    console.log(flickityOpt);
    console.log(thisCarousel);
  }
}

export default Carousel;
