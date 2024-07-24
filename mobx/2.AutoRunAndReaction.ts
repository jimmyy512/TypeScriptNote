import {
  observable,
  computed,
  autorun,
  makeAutoObservable,
  reaction,
} from 'mobx';

class OrderLine {
  price = 0;
  amount = 1;

  constructor(price: number) {
    makeAutoObservable(this);
    this.price = price;
  }

  setPrice(price: number) {
    this.price = price;
  }

  get total() {
    return this.price * this.amount;
  }
}

const orderLine = new OrderLine(100);
// autorun 会在初始化时执行一次，然后每次依赖项变化时执行。
autorun(() => {
  console.log('autorun:', orderLine.total);
});

// reaction 只有在依赖项变化时才执行处理函数。
reaction(
  () => orderLine.total,
  (total) => {
    console.log('reaction:', total);
  }
);

setTimeout(() => {
  orderLine.setPrice(500);
}, 1000);
