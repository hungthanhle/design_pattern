class Logger {
  private static instance: Logger;

  private constructor() {}

  static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(message: string) {
    this.logs.push(message);
    console.log(`[${new Date().toISOString()}] ${message}`);
  }


  private logs: string[] = [];
  getLogs() {
    return this.logs;
  }
}

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log("Server started");
logger2.log("Database connected");

console.log("Cùng instance?", logger1 === logger2); // ✅ true
console.log("Tất cả logs:", logger1.getLogs());
