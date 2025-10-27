class EventManager {
  constructor() {
    this.listeners = {};
  }

  subscribe(event, listener) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(listener);
  }

  notify(event, data) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(listener => listener(data));
    }
  }
}

// Tạo publisher
class OrderService {
  constructor(eventManager) {
    this.eventManager = eventManager;
  }

  createOrder() {
    console.log("Order created.");
    this.eventManager.notify("orderCreated", { id: 1 });
  }
}

// Đăng ký observer
const events = new EventManager();
// Có thể thêm hoặc gỡ listener mà không sửa OrderService.
// Dễ mở rộng, test và tái sử dụng.
events.subscribe("orderCreated", data => console.log("Send Email:", data));
events.subscribe("orderCreated", data => console.log("Send SMS:", data));

const orderService = new OrderService(events);
orderService.createOrder();

/*
Là mẫu Publish–Subscribe:
Có Subject (chủ thể) — người phát sự kiện.
Có Observers (người quan sát) — tự động được thông báo khi có thay đổi.
*/
