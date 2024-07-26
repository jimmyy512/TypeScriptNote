export default {};

class Card {
  public balance = 10;
}

class Customer {
  private card: Card = new Card();

  public getCard(): Card {
    return this.card;
  }
}

class SurfShop {
  public static main(): void {
    const surfShop: SurfShop = new SurfShop();
    const customer: Customer = new Customer();
    console.log('before shop', customer.getCard().balance);
    surfShop.chargeCustomer(customer, 10);
    console.log('after shop', customer.getCard().balance);
  }

  public chargeCustomer(c: Customer, fee: number): void {
    c.getCard().balance -= fee;
  }
}

// 執行 main 函式來模擬 Java 的 main 方法
SurfShop.main();
