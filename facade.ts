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

class UserFacade {
  constructor(
    private readonly userService: UserService,
    private readonly emailService: EmailService,
    private readonly analyticsService: AnalyticsService,
  ) {}

  async registerUser(name: string, email: string) {
    const user = this.userService.createUser(name, email);
    this.emailService.sendWelcomeEmail(email);
    this.analyticsService.recordEvent('USER_REGISTERED', user);
    return user;
  }
}

class UserController {
  constructor(
    private readonly userFacade: UserFacade
  ) {}

  @Post()
  async createUser(@Body() body: { name: string; email: string }) {
    return this.userFacade.registerUser(body.name, body.email);
  }
}
