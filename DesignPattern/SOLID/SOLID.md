# 物件導向五大原則

- 單一職責原則（Single Responsibility Principle, SRP）:  
  一個類別應該只有一個變更的理由。也就是說，一個類別應該僅有一個職責。

- 開放封閉原則（Open/Closed Principle, OCP）：  
  軟體實體（類別、模組、函式等）應該可以擴展，但不可修改。也就是說，應該可以在不修改現有代碼的情況下擴展其行為。

- 里氏替換原則（Liskov Substitution Principle, LSP）：  
  子類別應該可以替換其基類別，而不會導致程式錯誤。這意味著子類別應該可以被視為其基類別的一種，而不改變程序的行為。

- 介面隔離原則（Interface Segregation Principle, ISP）：  
  不應該強迫客戶依賴於他們不使用的方法。也就是說，應該將大的、臃腫的介面拆分成更小的、專門的介面，讓類別只需要實現它們實際需要的介面。

- 依賴反轉原則（Dependency Inversion Principle, DIP）：  
  高階模組不應該依賴於低階模組，兩者都應該依賴於抽象。抽象不應該依賴於具體，具體應該依賴於抽象。
