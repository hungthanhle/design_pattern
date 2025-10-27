class Logger {
  log(message: string) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }
}

const logger1 = new Logger();
const logger2 = new Logger();

logger1.log("Server started");
logger2.log("Database connected");

console.log("Cùng instance?", logger1 === logger2); // ❌ false
