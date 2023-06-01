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
    //this below is a string and we need to turn it into a number
    const timeRemaining = parseFloat(this.durationInput.value);
    this.durationInput.value = timeRemaining - 1;
  };
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);
