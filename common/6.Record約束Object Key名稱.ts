export default {};
type petsGroup = 'dog' | 'cat' | 'fish';
interface IPetInfo {
  name: string;
  age: number;
}

type IPets = Record<petsGroup, IPetInfo>;

const animalsInfo: IPets = {
  dog: {
    name: 'dogName',
    age: 1,
  },
  cat: {
    name: 'catName',
    age: 3,
  },
  fish: {
    name: 'fishName',
    age: 5,
  },
};

console.log(animalsInfo.cat);
