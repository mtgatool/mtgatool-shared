import _ from "lodash";
import { DbCardData } from "../../types/metadata";
import { CARD_SUPERTYPES } from "../constants";

export function cardHasType(card: DbCardData, type: string): boolean {
  if (!_.has(card, "type"))
    throw new Error("The specified card object does not have a type property");
  return card.type.toLowerCase().includes(type.toLowerCase() + " ");
}

export const cardType = (card: DbCardData): string => {
  const result = CARD_SUPERTYPES.find((ct) => cardHasType(card, ct));
  if (!result) throw new Error("Card type could not be determined");
  return result;
};
