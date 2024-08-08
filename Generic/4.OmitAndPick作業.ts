// 問題2 — 進階
// 可用 Pick 或 Omit 的方式實作，改寫 GuestSegment 這個型別，透過「搭配組合」 BasicSegment 和 MemberSegment 的型別試試看。
/* 原始題庫
export interface BasicSegment {
    id: string;
    uri: string;
    page: number;
  }
  
  export interface MemberSegment {
    phone: string;
    address: string;
    user_type: string;
  }
  
  // 改寫這個
  export interface GuestSegment {
    id: string;
    uri: string;
    user_type: string;
  }
  
  // 改寫之後變成...
  export interface GuestSegment {
    //...
  }
*/

export interface BasicSegment {
  id: string;
  uri: string;
  page: number;
}

export interface MemberSegment {
  phone: string;
  address: string;
  user_type: string;
}

// 改寫這個
// export interface GuestSegment {
//   id: string;
//   uri: string;
//   user_type: string;
// }

// 改寫之後變成...
export interface GuestSegment
  extends Omit<BasicSegment, 'page'>,
    Pick<MemberSegment, 'user_type'> {
  //...
}

const a: GuestSegment = {} as GuestSegment;
