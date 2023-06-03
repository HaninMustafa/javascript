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
      //the time found when the start is clicked is the total duration time
      this.onStart(this.timeRemaining);
    }
    this.tick();
    //will run the function once every second .. but it will wait one sec!
    // const interval = setInterval(this.tick, 1000);
    //to make the variable shared to the pause function we change it to this.interval
    this.interval = setInterval(this.tick, 20);
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
      this.timeRemaining = this.timeRemaining - 0.02;
      if (this.onTick) {
        //we want to give the world access to the time remaing for the circle offSet
        //so we pass it to the function below!
        this.onTick(this.timeRemaining);
      }
    }
  };
  //Getters
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }
  //Setters : set the value inside out input ,, the setted value is the time
  set timeRemaining(time) {
    //toFixed is used to ignore all the decimals except the value inside,, here it is 2
    this.durationInput.value = time.toFixed(2);
  }
}
