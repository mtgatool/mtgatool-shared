/* eslint-env jest */

import Deck from "../../deck";
import database from "../../database";
import compareCards from "../compareCards";
import { v2cardsList } from "../../../types/deck";
import loadDbFromCache from "../loadDbFromCache";

loadDbFromCache();

describe("deck", () => {
  describe("constructor", () => {
    it("stores original order", () => {
      const decks = [
        new Deck(
          {},
          [66091, 66089, 66091, 66091, 67224],
          [66091, 66089, 67224, 66091, 66091]
        ),
        new Deck({
          mainDeck: [
            {
              id: 66091,
              quantity: 1,
            },
            {
              id: 66089,
              quantity: 1,
            },
            {
              id: 66091,
              quantity: 2,
            },
            {
              id: 67224,
              quantity: 1,
            },
          ],
          sideboard: [
            {
              id: 66091,
              quantity: 1,
            },
            {
              id: 66089,
              quantity: 1,
            },
            {
              id: 67224,
              quantity: 1,
            },
            {
              id: 66091,
              quantity: 2,
            },
          ],
        }),
        new Deck(
          {},
          [66091, 66089, 67224, 66091, 66091],
          [66091, 66089, 66091, 66091, 67224],
          [66091, 66089, 66091, 66091, 67224],
          [66091, 66089, 67224, 66091, 66091]
        ),
        new Deck({
          mainDeck: [
            {
              id: 66091,
              quantity: 1,
            },
            {
              id: 66089,
              quantity: 1,
            },
            {
              id: 67224,
              quantity: 1,
            },
            {
              id: 66091,
              quantity: 2,
            },
          ],
          sideboard: [
            {
              id: 66091,
              quantity: 1,
            },
            {
              id: 66089,
              quantity: 1,
            },
            {
              id: 66091,
              quantity: 2,
            },
            {
              id: 67224,
              quantity: 1,
            },
          ],
          arenaMain: [
            {
              id: 66091,
              quantity: 1,
            },
            {
              id: 66089,
              quantity: 1,
            },
            {
              id: 66091,
              quantity: 2,
            },
            {
              id: 67224,
              quantity: 1,
            },
          ],
          arenaSide: [
            {
              id: 66091,
              quantity: 1,
            },
            {
              id: 66089,
              quantity: 1,
            },
            {
              id: 67224,
              quantity: 1,
            },
            {
              id: 66091,
              quantity: 2,
            },
          ],
        }),
      ];
      decks.forEach((deck) => {
        const saved = deck.getSave(true);
        expect(saved.arenaMain).toEqual([
          {
            id: 66091,
            quantity: 1,
          },
          {
            id: 66089,
            quantity: 1,
          },
          {
            id: 66091,
            quantity: 2,
          },
          {
            id: 67224,
            quantity: 1,
          },
        ]);
        expect(saved.arenaSide).toEqual([
          {
            id: 66091,
            quantity: 1,
          },
          {
            id: 66089,
            quantity: 1,
          },
          {
            id: 67224,
            quantity: 1,
          },
          {
            id: 66091,
            quantity: 2,
          },
        ]);
      });
    });

    describe("original order", () => {
      function savedOrder(mainboard: number[]): Readonly<v2cardsList> {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return new Deck({}, mainboard).getSave(true).arenaMain!;
      }

      it("merges adjacent duplicates", () => {
        expect(savedOrder([66091, 66091, 66091])).toEqual([
          {
            id: 66091,
            quantity: 3,
          },
        ]);
      });

      it("does not merge non-adjacent duplicates", () => {
        expect(savedOrder([66091, 66089, 66091])).toEqual([
          {
            id: 66091,
            quantity: 1,
          },
          {
            id: 66089,
            quantity: 1,
          },
          {
            id: 66091,
            quantity: 1,
          },
        ]);
      });

      it("does not merge by name", () => {
        // 66091 = Opt (Ixalan), 67224 = Opt (Dominaria)
        expect(database.card(66091)?.name).toEqual(database.card(67224)?.name);
        expect(savedOrder([66091, 67224])).toEqual([
          {
            id: 66091,
            quantity: 1,
          },
          {
            id: 67224,
            quantity: 1,
          },
        ]);
      });
    });
  });

  describe("sort", () => {
    it("does not affect original order", () => {
      // Any meaningful sort order will take the non-adjacent duplicates and put
      // them together, guaranteeing a change.
      const deck = new Deck({}, [66091, 66089, 66091], [66089, 66091, 66089]);
      deck.sortMainboard(compareCards);
      deck.sortSideboard(compareCards);
      const saved = deck.getSave(true);
      expect(saved.arenaMain).toEqual([
        {
          id: 66091,
          quantity: 1,
        },
        {
          id: 66089,
          quantity: 1,
        },
        {
          id: 66091,
          quantity: 1,
        },
      ]);
      expect(saved.arenaSide).toEqual([
        {
          id: 66089,
          quantity: 1,
        },
        {
          id: 66091,
          quantity: 1,
        },
        {
          id: 66089,
          quantity: 1,
        },
      ]);
    });
  });

  describe("clone", () => {
    it("preserves original logged order", () => {
      const deck = new Deck(
        {},
        [66091, 66089, 67224, 66091, 66091],
        [66091, 66089, 66091, 66091, 67224],
        [66091, 66089, 66091, 66091, 67224],
        [66091, 66089, 67224, 66091, 66091]
      );
      deck.sortMainboard(compareCards);
      deck.sortSideboard(compareCards);
      const saved = deck.clone().getSave(true);
      expect(saved.arenaMain).toEqual([
        {
          id: 66091,
          quantity: 1,
        },
        {
          id: 66089,
          quantity: 1,
        },
        {
          id: 66091,
          quantity: 2,
        },
        {
          id: 67224,
          quantity: 1,
        },
      ]);
      expect(saved.arenaSide).toEqual([
        {
          id: 66091,
          quantity: 1,
        },
        {
          id: 66089,
          quantity: 1,
        },
        {
          id: 67224,
          quantity: 1,
        },
        {
          id: 66091,
          quantity: 2,
        },
      ]);
    });
  });

  describe("getSave", () => {
    it("includes logged order when requested", () => {
      const deck = new Deck(
        {},
        [66091, 66089, 66091, 66091, 67224],
        [66091, 66089, 67224, 66091, 66091]
      );
      const save = deck.getSave(true);
      expect(save).toHaveProperty("arenaMain", [
        {
          id: 66091,
          quantity: 1,
        },
        {
          id: 66089,
          quantity: 1,
        },
        {
          id: 66091,
          quantity: 2,
        },
        {
          id: 67224,
          quantity: 1,
        },
      ]);
      expect(save).toHaveProperty("arenaSide", [
        {
          id: 66091,
          quantity: 1,
        },
        {
          id: 66089,
          quantity: 1,
        },
        {
          id: 67224,
          quantity: 1,
        },
        {
          id: 66091,
          quantity: 2,
        },
      ]);
    });

    it("omits logged order when not requested", () => {
      const deck = new Deck(
        {},
        [66091, 66089, 66091, 66091, 67224],
        [66091, 66089, 67224, 66091, 66091]
      );
      const save = deck.getSave();
      expect(save).not.toHaveProperty("arenaMain");
      expect(save).not.toHaveProperty("arenaSide");
    });

    it("returns a copy", () => {
      const deck = new Deck({}, [66091]);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      deck.getSave(true).arenaMain![0].quantity++;
      expect(deck.getSave(true).arenaMain).toEqual([
        { id: 66091, quantity: 1 },
      ]);
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
