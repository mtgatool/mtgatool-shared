import db from "../database";
import Deck from "../deck";
import { CardObject } from "../../types/deck";

interface RaritiesCount {
  c: number;
  u: number;
  r: number;
  m: number;
}

export default function getDeckRaritiesCount(deck: Deck): RaritiesCount {
  const rarities: RaritiesCount = { c: 0, u: 0, r: 0, m: 0 };
  const cards = [...deck.getMainboard().get(), ...deck.getSideboard().get()];
  cards.forEach(function (c: CardObject) {
    const quantity = c.quantity;
    const card = db.card(c.id);
    if (quantity > 0 && card) {
      if (card.Rarity == "common") rarities.c += quantity;
      else if (card.Rarity == "uncommon") rarities.u += quantity;
      else if (card.Rarity == "rare") rarities.r += quantity;
      else if (card.Rarity == "mythic") rarities.m += quantity;
    }
  });

  return rarities;
}
