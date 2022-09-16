module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "postgres",
      password: "postgres",
      user: "postgres",
    },
    migrations: {
      directory: "src/migrations",
      extension: "ts",
    },
  },
};
