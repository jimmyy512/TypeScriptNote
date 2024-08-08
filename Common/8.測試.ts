export default {};

type HasNames = { readonly names: string[] };

// 這邊加上 const 關鍵字，可以讓 TypeScript 推論出正確的型別
function getNamesExactly<const T extends HasNames>(arg: T): T['names'] {
  return arg.names;
}

// getNamesExactly不加 const 關鍵字，TypeScript 會推論出錯誤的型別
// Inferred type: string[]
// getNamesExactly加上 const 關鍵字，TypeScript 會推論出正確的型別
// const names: ["Alice", "Bob", "Eve"]
const names = getNamesExactly({ names: ['Alice', 'Bob', 'Eve'] });

console.warn('names:', names);
