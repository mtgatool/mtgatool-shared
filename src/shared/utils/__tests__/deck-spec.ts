/* eslint-env jest */

import Deck from "../../deck";
import loadDbFromCache from "../loadDbFromCache";

loadDbFromCache();

describe("deck", () => {
  describe("constructor", () => {});

  describe("sort", () => {});

  describe("clone", () => {});

  describe("getSave", () => {
    it("returns a copy", () => {
      const deck = new Deck({}, [66091]);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      deck.getSave().arenaMain![0].quantity++;
      expect(deck.getSave().arenaMain).toEqual([{ id: 66091, quantity: 1 }]);
    });
  });

  describe("hashing", () => {
    it("returns proper hash", () => {
      const mainA = [
        69235,
        70640,
        70640,
        70640,
        73132,
        73132,
        69235,
        70262,
        70262,
        68570,
        70262,
        70390,
      ];
      const mainB = [
        73132,
        69235,
        70262,
        70262,
        69235,
        70640,
        70640,
        70262,
        70640,
        73132,
        70390,
      ];
      const side = [68576, 70267, 70267, 68576, 68576];
      const hashTestA = new Deck({}, mainA, side);
      const hashTestB = new Deck({}, mainB, side);
      hashTestB.getMainboard().add(68570, 1, true);

      // These test could fail if database-spec fails
      expect(hashTestA.getUniqueString(true)).toBe(
        "70640,3,70262,3,68570,1,69235,2,70390,1,73132,2,68576,3,70267,2,"
      );
      expect(hashTestA.getHash(true)).toBe(
        "74a5ff0c98dbafb8f3f75302bf48d59ecdad1acc"
      );
      expect(hashTestB.getHash(true)).toBe(
        "74a5ff0c98dbafb8f3f75302bf48d59ecdad1acc"
      );
    });
  });
});
