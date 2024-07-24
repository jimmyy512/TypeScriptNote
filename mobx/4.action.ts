import { makeAutoObservable, autorun } from 'mobx';

class Ticker {
  tick = 0;

  constructor() {
    makeAutoObservable(this);

    autorun(() => {
      console.log(this.tick);
    });
  }

  increment() {
    this.tick++;
  }
}

const ticker = new Ticker();
setInterval(() => ticker.increment(), 1000);
