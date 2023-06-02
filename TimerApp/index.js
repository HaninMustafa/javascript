class Timer {
  //the callbacks are optional
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }

  start = () => {
    //we need to check if onStart is added as it is optional
    if (this.onStart) {
      this.onStart();
    }
    this.tick();
    //will run the function once every second .. but it will wait one sec!
    // const interval = setInterval(this.tick, 1000);
    //to make the variable shared to the pause function we change it to this.interval
    this.interval = setInterval(this.tick, 1000);
  };

  pause = () => {
    clearInterval(this.interval); //passing the interval ID.. interval
  };

  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemaining = this.timeRemaining - 1;
      if (this.onTick) {
        this.onTick();
      }
    }
  };
  //Getters
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }
  //Setters : set the value inside out input ,, the setted value is the time
  set timeRemaining(time) {
    this.durationInput.value = time;
  }
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log("Timer started");
  },
  onTick() {
    console.log("Timer onTick");
  },
  onComplete() {
    console.log("Timer onComplete");
  },
});
