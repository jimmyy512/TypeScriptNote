export default {};
// such as { CN : "China", US : "USA" }
const options = [
  { key: 'CN', displayName: 'China' },
  { key: 'US', displayName: 'USA' },
  { key: 'JP', displayName: 'Japan' },
  { key: 'EU', displayName: 'Eurozone' },
];

const res = options.reduce((sum, it) => {
  return { ...{ [it.key]: it.displayName }, ...sum };
}, {}) as { [key: string]: string };
console.log('res:', res.key);
