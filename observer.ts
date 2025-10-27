class OrderService {
  createOrder() {
    console.log("Order created.");

    // Gửi thông báo trực tiếp
    this.sendEmail();
    this.sendSMS();
    this.writeLog();
  }

  sendEmail() { console.log("Email sent."); }
  sendSMS() { console.log("SMS sent."); }
  writeLog() { console.log("Order logged."); }
}

const orderService = new OrderService();
orderService.createOrder();
