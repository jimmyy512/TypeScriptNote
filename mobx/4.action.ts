import { observable, computed, autorun, action, when } from 'mobx';
class Ticker {
  @observable tick = 0;

  @action.bound
  increment() {
    this.tick++; // 'this' 永远都是正确的
    console.log(this.tick, this);
  }

  constructor() {
    autorun(() => {
      console.log(this.tick);
    });
  }
}

const ticker = new Ticker();
setInterval(ticker.increment, 1000);
