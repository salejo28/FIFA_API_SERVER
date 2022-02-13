import { Document } from "mongoose";

export interface PlayerInterface extends Document {
  _id?: string;
  name: string;
  position: string;
  nationality: string;
  club: string;
}

export interface PageInterface {
  _id?: string;
  page: number;
  count: number;
  players: string[];
}

interface NationInterface {
  abbrName: string;
  id: number;
  imgUrl: string;
  name: string;
}

interface ClubInterface {
  abbrName: string;
  id: number;
  imgUrl: string;
  name: string;
}

export interface PlayerResponseInterface {
  name: string;
  commonName: string;
  firstName: string;
  lastName: string;
  nation: NationInterface;
  club: ClubInterface;
  baseId: number;
  position: string;
}

export interface PlayerTempInterface extends PlayerInterface {
  idFifa?: number;
}

export interface Hash {
  [key: number]: boolean;
}
