export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BACKEND_BASE_URL: string;
      MONGOOSE_URL: string;
      NEXT_PUBLIC_SECRET_KEY: string;
      NEXT_PUBLIC_PROJECT_ID: string;
      MONGO_DATA_SOURCE: string;
      MONGO_DATABASE: string;
      MONGO_API_KEY: string;
      PROJECT_NAME: string;
      MONGO_DATA_API_BASE_URL: string;
      ENV: "test" | "dev" | "prod";
    }
  }
}
