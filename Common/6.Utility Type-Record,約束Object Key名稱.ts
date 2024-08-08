export default {};

// 使用 type 約束 key
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

// 使用 Enum 約束 key
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
    address: 'PARK',
    phone: 'bar1',
  },
  [PlaceType.ZOO]: {
    address: 'ZOO',
    phone: 'bar2',
  },
  [PlaceType.OFFICE]: {
    address: 'OFFICE',
    phone: 'bar3',
  },
};

// 確保 `PlaceType` 的鍵值一致性
console.log(
  placeRecord[PlaceType.OFFICE].address,
  placeRecord[PlaceType.OFFICE].phone
);
