import Deck from "../deck";
import calculateDeviation from "./calculateDeviation";
import database from "../database";
import { Metadata } from "../../types";

export default function getBestArchetype(
  deck: Deck,
  archetypes: Metadata["archetypes"]
): string {
  let bestMatch = "-";
  if (deck.getMainboard().get().length === 0) return bestMatch;

  // Calculate worst possible deviation for this deck
  let mainDeviations: number[] = [];

  deck
    .getMainboard()
    .get()
    .forEach((card) => {
      const deviation = card.quantity;
      mainDeviations.push(deviation * deviation);
    });
  let lowestDeviation = calculateDeviation(mainDeviations);
  const highest = lowestDeviation; //err..

  archetypes.forEach((arch) => {
    mainDeviations = [];
    deck
      .getMainboard()
      .get()
      .forEach((card) => {
        const cardData = database.card(card.id);
        if (!cardData) return;
        //let q = card.quantity;
        const name = cardData.name;
        const archMain = arch.average.mainDeck;
        const deviation = 1 - (archMain[name] ? 1 : 0); // archMain[name] ? archMain[name] : 0 // for full data
        mainDeviations.push(deviation * deviation);
      });
    const finalDeviation = calculateDeviation(mainDeviations);

    if (finalDeviation < lowestDeviation) {
      lowestDeviation = finalDeviation;
      bestMatch = arch.name;
    }
  });

  if (lowestDeviation > highest * 0.5) {
    return "Unknown";
  }

  return bestMatch;
}
