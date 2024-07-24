export default {};
class EmailService {
  sendNotification(info: string): void {
    console.log(`Email: ${info}`);
  }
}

class MessageService {
  sendNotification(info: string): void {
    console.log(`Message: ${info}`);
  }
}

class NotificationService {
  static main(): void {
    const ns = new NotificationService();
    ns.sendNotification('email', 'hello');
    ns.sendNotification('message', 'hello');
  }

  sendNotification(serviceType: string, info: string): void {
    if (serviceType === 'email') {
      this.sendEmail(info);
    } else if (serviceType === 'message') {
      this.sendMessage(info);
    }
    // 假設我們要新增一個通知方式，就必須修改這個方法
    // 這樣就改動到原本的程式碼，違反了開放封閉原則
  }

  private sendEmail(info: string): void {
    const es = new EmailService();
    es.sendNotification(info);
  }

  private sendMessage(info: string): void {
    const ms = new MessageService();
    ms.sendNotification(info);
  }
}

// To run the main function
NotificationService.main();
