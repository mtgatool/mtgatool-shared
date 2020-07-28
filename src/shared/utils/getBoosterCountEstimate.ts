import { WILDCARD_RARITIES } from "../constants";
import { MissingWildcards } from "../../../types/deck";

export default function getBoosterCountEstimate(
  neededWildcards: MissingWildcards
): number {
  let boosterCost = 0;
  const boosterEstimates = {
    common: 3.36,
    uncommon: 2.6,
    rare: 5.72,
    mythic: 13.24,
  };

  WILDCARD_RARITIES.map((rarity) => {
    const needed = neededWildcards[rarity] || 0;
    const missing = Math.max(0, needed);
    boosterCost = Math.max(boosterCost, boosterEstimates[rarity] * missing);
  });

  return Math.round(boosterCost);
}
