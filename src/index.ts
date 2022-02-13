import App from "./app";
import DB from "./db";
import { getInfoFromApiFIFA } from "app/script";

async function main(): Promise<void> {
  const app = new App(4000);
  await app.listen();
  await DB;
  await getInfoFromApiFIFA();
}

if (require.main === module) {
  main();
}
