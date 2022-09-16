// env variables

export const env = new Proxy(process.env, {
  get: (envObj, prop) => {
    if (!(prop in envObj)) {
      throw new Error(`Environment variable ${String(prop)} not defined`);
    }

    return envObj[String(prop)];
  },
}) as { [envKey: string]: string };

export const isPrd = process.env.ENVIRONMENT === "prd";
export const isStg = process.env.ENVIRONMENT === "staging";
export const isDev = process.env.ENVIRONMENT === "develop";
export const isLocal = process.env.ENVIRONMENT === "local";
export const isTest = process.env.NODE_ENV === "test";
