import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "java_students",
  password: "1111",
  port: 5432,
});

export default pool;
