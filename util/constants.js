export const IS_DEV_MODE = process.env.NODE_ENV === "development";
export const IS_PROD_MODE = process.env.NODE_ENV === "production";

export const IS_CLIENT = typeof window !== "undefined";
