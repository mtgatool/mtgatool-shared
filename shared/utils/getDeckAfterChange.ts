import { DeckChange } from "../../types/Deck";
import Deck from "../deck";

export default function getDeckAfterChange(change: DeckChange): Deck {
  const decklist = new Deck({}, change.previousMain, change.previousSide);
  // Calculate new deck hash based on the changes
  change.changesMain.map((change) => {
    const q = parseInt(change.quantity + "") || 0;
    if (q < 0) {
      decklist.getMainboard().remove(change.id, Math.abs(q));
    } else {
      decklist.getMainboard().add(change.id, q);
    }
  });
  change.changesSide.map((change) => {
    const q = parseInt(change.quantity + "") || 0;
    if (q < 0) {
      decklist.getSideboard().remove(change.id, Math.abs(q));
    } else {
      decklist.getSideboard().add(change.id, q);
    }
  });
  decklist.getMainboard().removeZeros(true);
  decklist.getMainboard().removeDuplicates(true);
  decklist.getSideboard().removeZeros(true);
  decklist.getSideboard().removeDuplicates(true);
  return decklist;
}
