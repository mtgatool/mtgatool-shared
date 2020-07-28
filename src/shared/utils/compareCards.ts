import { CardObject } from "../../../types/deck";
import database from "../database";
import getCardTypeSort from "./getCardTypeSort";

export default function compareCards(a: CardObject, b: CardObject): number {
  // Yeah this is lazy.. I know
  const aObj = database.card(a.id);
  const bObj = database.card(b.id);

  if (!aObj) return 1;
  if (!bObj) return -1;

  const _as = getCardTypeSort(aObj.type);
  const _bs = getCardTypeSort(bObj.type);

  // Order by type?
  if (_as < _bs) {
    return -1;
  }
  if (_as > _bs) {
    return 1;
  }

  // by cmc
  if (aObj.cmc < bObj.cmc) {
    return -1;
  }
  if (aObj.cmc > bObj.cmc) {
    return 1;
  }

  // then by name
  if (aObj.name < bObj.name) {
    return -1;
  }
  if (aObj.name > bObj.name) {
    return 1;
  }

  return 0;
}
