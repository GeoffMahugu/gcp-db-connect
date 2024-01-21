const { Client } = require("pg");
require("dotenv").config(); // Load environment variables from .env file

// Create a new PostgreSQL client
const client = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.IP_ADDRESS,
  database: process.env.DB_NAME,
  port: 5432, // PostgreSQL default port
});

async function runQuery() {
  try {
    // Connect to the PostgreSQL database
    await client.connect();

    // Example query
    const result = await client.query("SELECT * FROM your_table_name LIMIT 10");
    console.log("Query result:", result.rows);
  } catch (error) {
    console.error("Error executing query:", error.message);
  } finally {
    // Close the connection
    await client.end();
  }
}

// Run the query function
runQuery();
