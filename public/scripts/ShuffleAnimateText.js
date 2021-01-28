// Source string
const TEXT_POOL = "-------abcdefghijklmnopqrstuvwxyz";

/**
 * @class ShuffleAnimateText
 * @classdesc Shuffle and animate of text
 */
class ShuffleAnimateText {
  /**
   * @constructor
   * @param {Object} el Target element
   * @param {String} completeText CompleteText Text
   */
  constructor(el, completeText) {
    // Properties
    this.el = document.querySelector(el);
    this.textPoolLength = TEXT_POOL.length;
    this.currentTextLength = 0;
    this.completeText = completeText;

    // Bind this
    this.start = this.start.bind(this);
    this.animate = this.animate.bind(this);
    this.end = this.end.bind(this);

    this.events();
  }

  /**
   * Subscription of event
   * @private
   */
  events() {
    this.el.addEventListener("animateEnd", this.end);
  }

  /**
   * Start animate
   * @private
   */
  start() {
    // Current display number (increment)
    const currentTextLength = 1;
    this.intervalId = window.setInterval(this.animate, 40);
  }

  /**
   * Tick animate
   * @private
   */
  animate() {
    // If current text is longer than complete text
    if (this.currentTextLength > this.completeText.length) {
      // dispatch event
      const event = new Event("animateEnd");
      this.el.dispatchEvent(event);
      return;
    }

    let outputText = "";
    for (var i = 0; i <= this.currentTextLength; i++) {
      outputText += TEXT_POOL[Math.floor(Math.random() * TEXT_POOL.length)];
    }
    this.el.innerHTML = outputText;
    this.currentTextLength++;
  }

  /**
   * End animate
   * @private
   */
  end() {
    // remove and clear interval
    window.clearInterval(this.intervalId);
    // Add text to elements
    this.el.innerHTML = this.completeText;
  }
}

module.exports = ShuffleAnimateText;
