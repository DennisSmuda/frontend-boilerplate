import { BaseTransition } from 'barba.js';
import $ from 'jquery';
import { TweenMax } from 'gsap';


const FadeTransition = BaseTransition.extend({
  // Initiate
  start() {
    this.fadeOut();
  },

  // Fade out old container
  fadeOut() {
    const self = this;
    // "Unload" Animation - onComplete callback
    TweenMax.to($(this.oldContainer), 0.4, {
      opacity: 0,
      onComplete: () => {
        this.fadeIn();
      }
    });
  },

  // Fade in new container
  fadeIn() {
    const self = this;
    const $el = $(this.newContainer);
    // Hide old Container
    $(this.oldContainer).hide();

    $el.css({
      visibility: 'visible',
      opacity: 0
    });

    TweenMax.to($el, 0.4, {
      opacity: 1,
      onComplete: () => {
        this.done();
      }
    });
  }
});


export default FadeTransition;