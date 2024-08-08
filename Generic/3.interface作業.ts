// 問題1 — 基礎
// 將以下型別的 UserSegment 改寫得「更簡單」，不單單只有一種實作方式。
// 備註：不用想太多，以下型別是「都有關係」的，可以直接用 extends 等方式來作繼承使用。

/* 原始題庫
export interface BasicSegment {
  id: string;
  uri: string;
  page: number;
}

export interface MemberSegment {
  phone: string;
  address: string;
}

// 改寫這個
export interface UserSegment {
  id: string;
  uri: string;
  page: number;
  phone: string;
  address: string;
}

// 改寫完之後變成...
export interface UserSegment {
  //...?
}
  **/

export interface BasicSegment {
  id: string;
  uri: string;
  page: number;
}

export interface MemberSegment {
  phone: string;
  address: string;
}

// 改寫這個
// export interface UserSegment {
//   id: string;
//   uri: string;
//   page: number;
//   phone: string;
//   address: string;
// }

// 改寫完之後變成...
export interface UserSegment extends BasicSegment, MemberSegment {}
