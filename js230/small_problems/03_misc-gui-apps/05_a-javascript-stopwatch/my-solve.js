"use strict";

class Stopwatch {
  
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
    return this.elapsedAtLastPause + (new Date() - this.lastStartTime);
  }

  reset() {
    this.pause();
    this.deactivateButton(this.$resetButton);
    this.lastStartTime = new Date();
    this.elapsedAtLastPause = 0;
  }

  start() {
    this.activateButton(this.$resetButton);
    this.running = true;
    this.lastStartTime = new Date();
    this.$startStopButton.textContent = "Pause"
    this.currentInterval = setInterval(() => {
      this.$timeDisplay.textContent = this.calcElapsedTime();
    }, 100);
  }

  pause() {
    this.$startStopButton.textContent = "Start"
    this.elapsedAtLastPause = this.calcElapsedTime();
    this.running = false;
    clearInterval(this.currentInterval);
    this.currentInterval = null;
  }

  handleStartStopClick(e) {
    console.log(e)
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
  const sw = new Stopwatch(document.querySelector(".stopwatch"))
})