export default {};

// 定義選項陣列
const options = [
  { key: 'CN', displayName: 'China' },
  { key: 'US', displayName: 'USA' },
  { key: 'JP', displayName: 'Japan' },
  { key: 'EU', displayName: 'Eurozone' },
];

// 使用 reduce 來生成物件映射
const res = options.reduce((sum, it) => {
  return { ...sum, [it.key]: it.displayName };
}, {});

console.log('res:', res);
