import mongoose from "mongoose";

import keys from "app/keys";

const connect = mongoose
  .connect(keys.MONGO_URI as string)
  .then(() => console.log("DB is connected"))
  .catch((error) => console.error(error));

export default connect;
