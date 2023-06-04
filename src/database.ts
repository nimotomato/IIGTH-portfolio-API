import pg from "pg";
import "dotenv/config.js";

const { Pool } = pg;

interface EnvironmentVariables {
    USERNAME: string;
    PASSWORD: string;
    HOST: string;
    PORT?: number;
    DATABASE: string;
    SSL: boolean | undefined;
  }
  
  const env: EnvironmentVariables = {
    USERNAME: process.env.USERNAME!,
    PASSWORD: process.env.PASSWORD!,
    HOST: process.env.HOST!,
    PORT: process.env.PORT ? parseInt(process.env.PORT) : undefined,
    DATABASE: process.env.DATABASE!,
    SSL: process.env.SSL === "true" ? true : undefined,
  };
  
  const pool = new Pool({
    user: env.USERNAME,
    password: env.PASSWORD,
    host: env.HOST,
    port: env.PORT,
    database: env.DATABASE,
    ssl: env.SSL,
  });

export default pool;