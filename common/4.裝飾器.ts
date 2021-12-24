function A() {
  console.log("A ctor");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("A(): called");
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
  }
}

function B() {
  console.log("B ctor");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("B(): called");
  }
}

class C {
  @A()
  @B()
  test() {

  }
}