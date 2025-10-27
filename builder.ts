class User {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public email: string,
    public isActive: boolean,
    public isAdmin: boolean,
    public phone: string | null,
    public role: string
  ) {}
}

const user = new User("John", "Doe", 25, "john@example.com", true, false, null, "admin");
