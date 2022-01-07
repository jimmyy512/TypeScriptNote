import { observable, computed, autorun } from 'mobx';

class OrderLine {
  @observable price = 0;
  @observable amount = 1;

  constructor(price: number) {
    this.price = price;
  }

  @computed get total() {
    console.log('computed total call:', this.price, this.amount);
    return this.price * this.amount;
  }
}

const orderLine = new OrderLine(100);
autorun(() => {
  console.log('autorun total:', orderLine.total);
});

setInterval(() => {
  orderLine.price = Math.random() * 100;
}, 1000);
