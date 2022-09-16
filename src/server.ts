import app from "./app";
import knex from "./knex";

const HOST = "0.0.0.0";
const PORT = process.env.PORT || 8000;

// server initiation

async function startServer() {
  // always run latest migrations
  await knex.migrate.latest();

  app.listen(Number(PORT), HOST, () => console.log(`Serving on: ${PORT}`));

  return app;
}

startServer().finally();
