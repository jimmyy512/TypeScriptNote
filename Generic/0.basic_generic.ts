type A = string;
const str: A = '';

// interface Data {
//   key: string
//   key2: number
// }

// interface Data2 {
//   key: string
//   key2: boolean
// }

// 用 type 鼠標移到 Data 會發現是一個物件
type GenericObj<T> = {
  key: string;
  key2: T;
};
// 用 interface 鼠標移到 Data 看不到完整物件
// interface GenericObj<T> {
//   key: string;
//   key2: T;
// }

type Data = GenericObj<number>;
type Data2 = GenericObj<boolean>;
