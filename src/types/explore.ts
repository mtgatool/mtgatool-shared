import { v2cardsList } from "./deck";

export interface ExploreData {
  _id: string;
  eventId: string;
  name: string;
  mainDeck: v2cardsList;
  sideboard: v2cardsList;
  commander: number[];
  tile: number;
  rank: string[];
  player: string[];
  colors: number[];
  matches: string[];
  date: string;
  gw: number;
  gl: number;
  mw: number;
  ml: number;
  mt: number;
  gt: number;
  mwrate: number;
}