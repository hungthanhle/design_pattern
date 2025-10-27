class UserService {
  createUser(name: string, email: string) {
    console.log(`User ${name} created with email ${email}`);
    return { id: Date.now(), name, email };
  }
}

class EmailService {
  sendWelcomeEmail(email: string) {
    console.log(`Welcome email sent to ${email}`);
  }
}

class AnalyticsService {
  recordEvent(event: string, data: any) {
    console.log(`Event: ${event}`, data);
  }
}

class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly emailService: EmailService,
    private readonly analyticsService: AnalyticsService,
  ) {}

  @Post()
  async createUser(@Body() body: { name: string; email: string }) {
    // Tự gọi từng service một
    const user = this.userService.createUser(body.name, body.email);

    this.emailService.sendWelcomeEmail(body.email);

    this.analyticsService.recordEvent('USER_REGISTERED', user);

    return user;
  }
}
