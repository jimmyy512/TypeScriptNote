export default {};

//如果2,3行註解後,鼠標移到reverse上的型態提示會同時顯示number|string
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}

//鼠標移到reverse上查看參數說明
console.log(reverse(123));
console.log(reverse('123'));
