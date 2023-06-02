class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }

  start = () => {
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
    } else {
      this.timeRemaining = this.timeRemaining - 1;
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

const timer = new Timer(durationInput, startButton, pauseButton);
