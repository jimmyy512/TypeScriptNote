export default {};
import { makeAutoObservable, reaction } from 'mobx';

class Person {
  name = 'John';
  age = 10;
  showAge = true;

  constructor() {
    makeAutoObservable(this);
  }

  get labelText() {
    return this.showAge ? `${this.name} (age: ${this.age})` : this.name;
  }

  setAge(age: number) {
    this.age = age;
  }

  setName(name: string) {
    this.name = name;
  }
}

const person = new Person();

reaction(
  () => person.labelText,
  (res) => console.log('res:', res)
);

person.setAge(21);
person.setName('Dave');

setTimeout(() => {
  person.setAge(30);
  person.setName('asd');
}, 1000);
