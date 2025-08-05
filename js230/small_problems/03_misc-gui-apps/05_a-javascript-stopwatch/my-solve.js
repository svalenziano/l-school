"use strict";

class Stopwatch {
  
  constructor(parentElement) {
    this.elapsedMillis = 0;
    this.startTime = null;
    this.running = false;
    
    if (Array.from(parentElement.children).length > 0) {
      throw new Error("parentElement should not contain any elements")
    }

    parentElement.innerHTML = `<div>
    
      <div class="time-display fira-code-medium"><time>00:00:00:00</time></div>
      <div class="controls">
        <button class="start-stop">Start</button>
        <button class="reset">Reset</button>
      </div>
    </div>`

    this.$startStopButton = parentElement.querySelector(".start-stop")
    this.$resetButton = parentElement.querySelector(".reset")
    
    this.$startStopButton.addEventListener("click", this.handleStartStopClick.bind(this))
    this.$resetButton.addEventListener("click", this.handleResetClick.bind(this))
  }

  reset() {
    this.startTime = new Date();
  }

  start() {
    this.reset();
    this.running = true;
    this.$startStopButton.textContent = "Start"
  }

  stop() {
    this.$startStopButton.textContent = "Stop"
    this.running = false;
  }

  handleStartStopClick(e) {
    console.log(e)
    if (this.running === true) {
      this.stop();
    } else {
      this.start();
    }
  }

  handleResetClick(e) {
    console.log(e)
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const sw = new Stopwatch(document.querySelector(".stopwatch"))
})