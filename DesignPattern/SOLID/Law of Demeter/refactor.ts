export default {};
class Card {
  balance = 10;

  deduct(fee: number): void {
    this.balance -= fee;
  }

  getBalance(): number {
    return this.balance;
  }
}

class Customer {
  private card: Card = new Card();

  pay(fee: number): void {
    this.card.deduct(fee);
  }

  getCardBalance(): number {
    return this.card.getBalance();
  }
}

class SurfShop2 {
  chargeCustomer(c: Customer, fee: number): void {
    c.pay(fee);
  }

  static main(): void {
    const surfShop2 = new SurfShop2();
    const customer = new Customer();
    console.log('before shop', customer.getCardBalance());
    surfShop2.chargeCustomer(customer, 10);
    console.log('after shop', customer.getCardBalance());
  }
}

SurfShop2.main();
