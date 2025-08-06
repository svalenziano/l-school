const CENTISECONDS_IN_MILLISECONDS = 10;
const SECONDS_IN_CENTISECONDS = 100;
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;

const ELEMENT_IDS = [
  "hours",
  "minutes",
  "seconds",
  "centiseconds",
  "start-stop",
  "reset",
];

const INTERVAL_TIMEOUT = 10;

document.addEventListener("DOMContentLoaded", () => {
  new Stopwatch();
});

class Stopwatch {
  #interval;

  constructor() {
    this.timer = new Timer();
    this.#attachElements();
    this.#bindListeners();
  }

  start() {
    this.timer.start();
    this.#interval = setInterval(this.#renderTime.bind(this), INTERVAL_TIMEOUT);
    this.elements["start-stop"].innerText = "Stop";
  }

  stop() {
    this.timer.stop();
    this.#clear();
  }

  reset() {
    this.timer.reset();
    this.#clear();
  }

  #clear() {
    clearInterval(this.#interval);
    this.#renderTime();
    this.elements["start-stop"].innerText = "Start";
  }

  #attachElements() {
    this.elements = {};
    ELEMENT_IDS.forEach((id) => {
      this.elements[id] = document.getElementById(id);
    });
  }

  #bindListeners() {
    this.elements["start-stop"].addEventListener(
      "click",
      this.#startStop.bind(this)
    );
    this.elements["reset"].addEventListener("click", this.reset.bind(this));
  }

  #startStop() {
    if (this.timer.running) {
      this.stop();
    } else {
      this.start();
    }
  }

  #renderTime() {
    const dividedTime = this.#divideTime();
    for (const id in dividedTime) {
      const element = this.elements[id];
      element.innerText = String(dividedTime[id]).padStart(2, "0");
    }
  }

  #divideTime() {
    let raw = Math.floor(this.timer.elapsed / CENTISECONDS_IN_MILLISECONDS);

    const centiseconds = raw % SECONDS_IN_CENTISECONDS;
    raw = Math.floor(raw / SECONDS_IN_CENTISECONDS);

    const seconds = raw % SECONDS_IN_MINUTE;
    raw = Math.floor(raw / SECONDS_IN_MINUTE);

    const minutes = raw % MINUTES_IN_HOUR;
    raw = Math.floor(raw / MINUTES_IN_HOUR);

    const hours = raw;

    return { hours, minutes, seconds, centiseconds };
  }
}

class Timer {
  #elapsed;
  #lastPoll;

  constructor() {
    this.reset();
  }

  get elapsed() {
    return this.#poll();
  }

  reset() {
    this.running = false;
    this.#elapsed = 0;
    this.#lastPoll = null;
  }

  start() {
    this.running = true;
    this.#lastPoll = Date.now();
  }

  stop() {
    this.#poll();
    this.running = false;
  }

  #poll() {
    if (this.running) {
      const now = Date.now();
      this.#elapsed += now - this.#lastPoll;
      this.#lastPoll = now;
    }

    return this.#elapsed;
  }
}