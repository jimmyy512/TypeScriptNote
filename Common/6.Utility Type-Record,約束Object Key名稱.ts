// Type約束key
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

// Enum約束key
enum PlaceType {
  PARK = 'park',
  ZOO = 'zoo',
  OFFICE = 'office',
}
interface PlaceInfo {
  address: string;
  phone: string;
}
type PlaceRecord = Record<PlaceType, PlaceInfo>;
const placeRecord: PlaceRecord = {
  [PlaceType.PARK]: {
    address: 'foo1',
    phone: 'bar',
  },
  [PlaceType.ZOO]: {
    address: 'foo2',
    phone: 'bar',
  },
  [PlaceType.OFFICE]: {
    address: 'foo3',
    phone: 'bar',
  },
};
console.log(placeRecord.office.address);
