import dotenv from "dotenv";
dotenv.config({ path: ".env" });

export default {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  AUTHENTICATE_TOKEN: process.env.AUTHORIZATION_TOKEN,
};
