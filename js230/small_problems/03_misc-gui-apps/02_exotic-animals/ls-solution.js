// modified by SV

const App = {
  scheduleToolTip(event) {
    this.timer = setTimeout(() => {
      this.showToolTip(event);
    }, 500);
  },

  showToolTip(event) {
    const figcap = event.target.nextElementSibling;
    if (figcap && figcap.tagName === 'FIGCAPTION') {
      figcap.classList.remove('hidden');
    }
  },

  clearAllToolTips() {
    clearTimeout(this.timer);
    this.timer = null;

    document.querySelectorAll('figcaption').forEach(figcap => {
      figcap.classList.add('hidden');
    });
  },

  init() {
    const container = document.querySelector('div.gallery');

    container.addEventListener('mouseenter', (event) => {
      if (event.target.tagName === 'IMG') {
        console.log("mouseenter =>", event)
        this.scheduleToolTip(event);
      }
    }, true);

    container.addEventListener('mouseleave', (event) => {
      if (event.target.tagName === 'IMG') {
        console.log("mouseleave =>", event)
        this.clearAllToolTips();
      }
    }, true);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  App.init();
  App.clearAllToolTips();
})