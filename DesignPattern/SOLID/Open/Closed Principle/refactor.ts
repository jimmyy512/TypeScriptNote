export default {};

interface NotificationService {
  sendNotification(info: string): void;
}

class EmailService implements NotificationService {
  sendNotification(info: string): void {
    console.log(`Email: ${info}`);
  }
}

class MessageService implements NotificationService {
  sendNotification(info: string): void {
    console.log(`Message: ${info}`);
  }
}

class WechatService implements NotificationService {
  sendNotification(info: string): void {
    console.log(`Wechat: ${info}`);
  }
}

class NotificationService2 {
  static main(): void {
    const ns = new NotificationService2();
    ns.sendNotification(new EmailService(), 'hello');
    ns.sendNotification(new MessageService(), 'hello');
    ns.sendNotification(new WechatService(), 'hello');
  }

  // 開放封閉原則,依賴 NotificationService 介面,而不是實際的類別,這樣就不用修改原本的程式碼
  sendNotification(ns: NotificationService, info: string): void {
    ns.sendNotification(info);
  }
}

// To run the main function
NotificationService2.main();
