enum TestEnum {
    TEST1 = "test1",
    TEST2 = "test2",
    TEST3 = "test3",
}

//no generic
const getEnumKeyByEnumValue = (enumKey: { [index: string]: string }, enumValue: String) => {
    const keys = Object.keys(enumKey).filter(it => enumKey[it] === enumValue);
    return keys.length > 0 ? keys[0] : null;
}

//use generic
const getEnumKeyByEnumValue2 = <T extends { [index: string]: string }>(enumKey: T, enumValue: String): keyof T | null => {
    const keys = Object.keys(enumKey).filter(it => enumKey[it] === enumValue);
    return keys.length > 0 ? keys[0] : null;
}

console.log(getEnumKeyByEnumValue(TestEnum, "test1"));
console.log(getEnumKeyByEnumValue2(TestEnum, "test2"));