export default {};

import { makeAutoObservable, when } from 'mobx';

class MyResource {
  num = 0;
  interval: number;

  constructor() {
    makeAutoObservable(this);

    when(
      // 一旦
      () => !this.isVisible,
      // 然后
      () => this.dispose()
    );

    this.interval = setInterval(() => {
      this.add();
    }, 1000);
  }

  get isVisible() {
    return this.num < 3;
  }

  dispose() {
    // 清理
    console.log('dispose!!!! num:', this.num);
    clearInterval(this.interval);
  }

  add() {
    console.log('before add:', this.num);
    this.num++;
    console.log('after add:', this.num);
  }
}

new MyResource();
