export default {};
// 範例1
/**
 * @Partial <T> 透過Partial包裝的參數,所有key值會變成可選狀態(option)
 * @使用時機 當你在更新一筆紀錄的時候，假如有三個欄位，而你只想更新一個欄位，
 * 那麼你就可以使用 Partial 作為 req 的標示。
 */
export function example1() {
  interface MyData {
    Name: string;
    Age: number;
    Sex: string;
    Salary: number;
  }

  const myData: MyData = {
    Name: 'jim',
    Age: 20,
    Sex: 'boy',
    Salary: 100,
  };

  function updateMyData(newMyData: Partial<MyData>) {
    if (newMyData.Name) {
      myData.Name = newMyData.Name;
    }
    if (newMyData.Age) {
      myData.Age = newMyData.Age;
    }
  }

  updateMyData({
    Name: 'Kano',
    Age: 100,
  });
  console.log('example1', myData);
}

// 範例2
/**
 * @Required <T> Required 會要求所有Key都傳入,儘管原始數據是缺省參數
 */
export function example2() {
  interface Props {
    a?: number;
    b?: string;
  }

  // 出錯,
  // const obj2: Required<Props> = { a: 5 };
  const objSuccess: Required<Props> = { a: 10, b: '20' };
}

// 範例3
// --------------------------------------------------------------------------------
/**
 * @Pick <Type, Keys> ：從物件中挑出特定屬性及其型別，變成新的物件型別
 */
export function example3() {
  type Todo = {
    title: string;
    description: string;
    completed: boolean;
  };

  //只挑選 title和completed 所以TodoPreview只能使用這兩個key
  type TodoPreview = Pick<Todo, 'title' | 'completed'>;

  const test: TodoPreview = {
    title: 'this is title',
    completed: false,
  };

  console.log(`example2:${test.title} complete:${test.completed}`);
}

// 範例4
/**
 * @Omit <Type, Keys>：從物件中排除特定屬性及其型別，變成新的物件型別
 **/
export function example4() {
  type Todo = {
    title: string;
    description: string;
    completed: boolean;
  };

  type TodoPreview = Omit<Todo, 'title' | 'completed'>;
  const test: TodoPreview = {
    // 錯誤 Omit已經排除了title key
    // title:"123"
    description: 'this is title',
  };
  console.log(`example3: ${test.description}`);
}

example1();
example2();
example3();
example4();
