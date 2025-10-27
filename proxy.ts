const original = { name: 'jeff' };

const reactive = new Proxy(original, {
  get(target, key) {
    console.log('Tracking: ', key);
    return target[key];
  },
  set(target, key, value) {
    console.log('updating UI...');
    return Reflect.set(target, key, value);
  },
});

// Tạo một đại diện (proxy) cho một object khác, để kiểm soát truy cập hoặc thêm hành vi trước/sau khi gọi object gốc.

reactive.name;
// Console: Tracking: name
// Return: 'jeff'

reactive.name = 'bob';
// Console: updating UI...
// Value of original.name is now 'bob'
