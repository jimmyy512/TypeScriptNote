interface GameType1 {
  id: number;
  size: number;
}

interface GameType2 {
  id: number;
  type: string;
}

const list1: GameType1[] = [];
const list2: GameType2[] = [];

for (let i = 0; i < 3; i++) {
  list1.push({ id: i, size: i * 100 } as GameType1);
  list2.push({ id: i, type: (i * 200).toString() } as GameType2);
}
console.log('before list:', list1);
console.log('before list:', list2);

//非泛型只能寫死GameType
// const moveElementToFirst = (arr: GameType1[], value: GameType1) => {
//     arr.forEach((it, index) => {
//         if (it.id === value.id) {
//             arr.splice(index, 1);
//             arr.unshift(it);
//         }
//     })
// }

//泛型寫法
const moveElementToFirstGeneric = <T extends GameType1 | GameType2>(
  arr: T[],
  value: T
) => {
  arr.forEach((it, index) => {
    if (it.id === value.id) {
      arr.splice(index, 1);
      arr.unshift(it);
    }
  });
};

moveElementToFirstGeneric(list1, { id: 1, size: 10 });
moveElementToFirstGeneric(list2, { id: 1, type: 'gg' });
console.log('after list:', list1);
console.log('after list:', list2);
