import { Schema, model, PaginateModel } from "mongoose";
import MongoosePaginate from "mongoose-paginate-v2";

import { PlayerInterface } from "app/interfaces";

const PlayerSchema = new Schema({
  name: String,
  position: String,
  nationality: String,
  club: String,
});

PlayerSchema.plugin(MongoosePaginate);

const Player: PaginateModel<PlayerInterface> = model(
  "Player",
  PlayerSchema
) as PaginateModel<PlayerInterface>;

export default Player;
