import { InternalDeck } from "./deck";

export interface DeckLink {
  best: {
    name: string;
    dev: number;
    high: number;
  };
  colors: number[];
  match: string;
  name: string;
  owner: string;
  wr: number;
  wrt: number;
  tile: number;
  rank: string;
  tier: number;
  percentile: number;
  leaderboardPlace: number;
}

export interface Archetype {
  best_deck: InternalDeck & {
    owner: string;
    ok: boolean;
    user?: string;
    error?: string;
  };
  best_deck_wr: number;
  best_deck_wrt: number;
  colors: number[];
  decks: DeckLink[];
  loss: number;
  name: string;
  share: string;
  tile: number;
  total: number;
  win: number;
  winrate: string;
}

export interface MetagameData {
  _id: string;
  format: string;
  date: string;
  date_start: string;
  days: number;
  meta: Archetype[];
}
