module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/src/generated/",
    "/src/repositories/Repository.ts",
    "/src/helpers/*",
    "/src/knex.ts",
    "/src/migrations/",
    "/tests/",
  ],
  coverageReporters: ["json-summary", "lcov", "text"],
  coverageThreshold: {
    global: {
      branches: 10,
      functions: 10,
      lines: 10,
      statements: 10,
    },
  },
  globals: {
    "ts-jest": {
      diagnostics: false,
      isolatedModules: true,
    },
  },
  modulePaths: ["<rootDir>/src/"],
  setupFiles: ["dotenv/config"],
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/tests/setup.ts"],
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.test.ts?(x)"],
};
