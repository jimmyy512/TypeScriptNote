export default {};
enum TestEnum {
  TEST1 = 'test1',
  TEST2 = 'test2',
  TEST3 = 'test3',
}

//no generic
const getEnumKeyByEnumValue = (
  enumKey: { [index: string]: string },
  enumValue: string
) => {
  const keys = Object.keys(enumKey).filter((it) => enumKey[it] === enumValue);
  return keys.length > 0 ? keys[0] : null;
};

//use generic
const getEnumKeyByEnumValue2 = <T extends { [index: string]: string }>(
  enumKey: T,
  enumValue: string
): keyof T => {
  const keys = Object.keys(enumKey).filter((it) => enumKey[it] === enumValue);
  return keys.length > 0 ? keys[0] : null;
};

//鼠標移到Function看不出回傳型態
console.log(getEnumKeyByEnumValue(TestEnum, 'test1'));
//鼠標移到Function上可以看出回傳型態
console.log(getEnumKeyByEnumValue2(TestEnum, 'test2'));
