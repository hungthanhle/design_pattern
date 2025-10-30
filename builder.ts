class User {
  constructor(
    public firstName?: string,
    public lastName?: string,
    public age?: number,
    public email?: string,
    public isActive: boolean = true,
    public isAdmin: boolean = false,
    public phone?: string | null,
    public role?: string
  ) {}
}

class UserBuilder {
  private user: User;

  constructor() {
    this.user = new User();
  }

  setName(first: string, last: string) {
    this.user.firstName = first;
    this.user.lastName = last;
    return this; // cho phép chainable
  }

  setAge(age: number) {
    this.user.age = age;
    return this;
  }

  setEmail(email: string) {
    this.user.email = email;
    return this;
  }

  setPhone(phone: string) {
    this.user.phone = phone;
    return this;
  }

  setRole(role: string) {
    this.user.role = role;
    return this;
  }

  setAdmin(isAdmin: boolean = true) {
    this.user.isAdmin = isAdmin;
    return this;
  }

  deactivate() {
    this.user.isActive = false;
    return this;
  }

  build() {
    // (Tuỳ chọn) Kiểm tra dữ liệu trước khi trả về
    if (!this.user.firstName || !this.user.lastName) {
      throw new Error("User must have a name");
    }
    return this.user;
  }
}


const user = new UserBuilder()
  .setName("John", "Doe")
  .setAge(25)
  .setEmail("john@example.com")
  .setRole("admin")
  .build();
