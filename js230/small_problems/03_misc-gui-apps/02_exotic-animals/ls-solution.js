const App = {
  scheduleToolTip: function(event) {
    this.timer = setTimeout(() => {
      this.showToolTip(event);
    }, 2000);
  },

  showToolTip: function(event) {
    const figcap = event.target.nextElementSibling;
    if (figcap && figcap.tagName === 'FIGCAPTION') {
      figcap.classList.add('show');
    }
  },

  clearToolTip: function() {
    clearTimeout(this.timer);
    this.timer = null;

    document.querySelectorAll('figcaption.show').forEach(figcap => {
      figcap.classList.remove('show');
    });
  },

  init: function() {
    const container = document.getElementById('exotic_animals');

    container.addEventListener('mouseenter', (event) => {
      if (event.target.tagName === 'IMG') {
        this.scheduleToolTip(event);
      }
    }, true);

    container.addEventListener('mouseleave', (event) => {
      if (event.target.tagName === 'IMG') {
        this.clearToolTip();
      }
    }, true);
  }
};

App.init();