"use strict";

class Stopwatch {
  
  static updateInterval = 60 // interval in milliseconds.  Above ~25 is meaningless bc the display just flashes a lot
  static timeMultiplier = 1  // FOR TESTING: set to 1 for 'normal' time

  constructor(parentElement) {
    this.lastStartTime = null;
    this.elapsedAtLastPause = 0;
    this.currentInterval = null;
    this.running = false;
    
    if (Array.from(parentElement.children).length > 0) {
      throw new Error("parentElement should not contain any elements")
    }

    parentElement.innerHTML = `<div>
    
      <div class="time-display fira-code-medium"><time>00:00:00:00</time></div>
      <div class="controls">
        <button class="start-stop">Start</button>
        <button class="reset inactive">Reset</button>
      </div>
    </div>`

    this.$timeDisplay = parentElement.querySelector(".time-display time");
    this.$startStopButton = parentElement.querySelector(".start-stop")
    this.$resetButton = parentElement.querySelector(".reset")
    
    this.$startStopButton.addEventListener("click", this.handleStartStopClick.bind(this))
    this.$resetButton.addEventListener("click", this.handleResetClick.bind(this))
  }

  calcElapsedTime() {
    return (this.elapsedAtLastPause + (new Date() - this.lastStartTime)) * Stopwatch.timeMultiplier;
  }

  formatTime(milliseconds) {
    return new Date(milliseconds).toISOString().substr(11, 11).replace(".", ":");
  }

  reset() {
    this.pause();
    this.deactivateButton(this.$resetButton);
    this.$timeDisplay.textContent = this.formatTime(0);
    this.elapsedAtLastPause = 0;
  }

  start() {
    this.activateButton(this.$resetButton);
    this.running = true;
    this.lastStartTime = new Date();
    this.$startStopButton.textContent = "Pause"
    this.currentInterval = setInterval(() => {
      this.$timeDisplay.textContent = this.formatTime(this.calcElapsedTime());
    }, Stopwatch.updateInterval);
  }

  pause() {
    this.$startStopButton.textContent = "Start"
    this.elapsedAtLastPause = this.calcElapsedTime();
    this.running = false;
    clearInterval(this.currentInterval);
    this.currentInterval = null;
  }

  handleStartStopClick(e) {
    if (this.running === true) {
      this.pause();
    } else {
      this.start();
    }
  }

  handleResetClick(e) {
    this.reset();
  }

  activateButton(buttonEle) {
    buttonEle.classList.remove("inactive");
  }

  deactivateButton(buttonEle) {
    buttonEle.classList.add("inactive");
  }
}


document.addEventListener("DOMContentLoaded", () => {
  for (let container of document.querySelectorAll("div.stopwatch")) {
    new Stopwatch(container)
  }
})