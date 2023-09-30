declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: 'test' | 'production';
        ENVIRONMENT: string;
        DB_HOST: string;
        DB_USERNAME: string;
        DB_PASSWORD: string;
        DB_DATABASE: string;
        DB_PORT: string;
        DB_LOGGING: string;
        PORT: string;
        JWT_SECRET: string;
        SMTP_SERVICE: string;
        SMTP_PORT: string;
        SMTP_SECURE: string;
        SMTP_HOST: string;
        SMTP_AUTH_METHOD: string;
        EMAIL_USER: string;
        EMAIL_PASSWORD: string;
      }
    }
  }
  