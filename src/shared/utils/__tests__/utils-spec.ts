/* eslint-env jest */
import database from "../../database";
import getEventPrettyName from "../getEventPrettyName";
import { cardHasType, cardType } from "../cardTypes";
import getSetCodeInEventId from "../getSetInEventId";
import loadDbFromCache from "../loadDbFromCache";

loadDbFromCache();

describe("utils", () => {
  it("Set codes are detected preperly", () => {
    expect(getSetCodeInEventId("Ladder")).toBeUndefined();
    expect(getSetCodeInEventId("Historic_Shakeup_20200606")).toBeUndefined();
    expect(getSetCodeInEventId("TestName_WithIkoInIt")).toBeUndefined();
    expect(getSetCodeInEventId("Sealed_DAR_20190304")).toBe("DAR");
    expect(getSetCodeInEventId("QuickDraft_GRN_20190412")).toBe("GRN");
    expect(getSetCodeInEventId("PremierDraft_IKO_20200416")).toBe("IKO");
    expect(getSetCodeInEventId("CompDraft_WAR_20190425")).toBe("WAR");
  });

  it("Card types are detected preperly", () => {
    const phSwamp = database.card(72578);
    if (phSwamp) {
      expect(cardType(phSwamp)).toBe("Basic Land");
      expect(cardHasType(phSwamp, "basic land")).toBeTruthy();
      expect(cardHasType(phSwamp, "Basic Land")).toBeTruthy();
      expect(cardHasType(phSwamp, "Land")).toBeTruthy();
    }
    const ornithopter = database.card(32951);
    if (ornithopter) {
      expect(cardType(ornithopter)).toBe("Creature");
      expect(cardHasType(ornithopter, "Artifact")).toBeTruthy();
      expect(cardHasType(ornithopter, "Creature")).toBeTruthy();
    }
  });

  it("Pretty event names are guessed properly", () => {
    expect(getEventPrettyName("Ladder")).toBe("Standard Ranked");
    expect(getEventPrettyName("Historic_Ladder")).toBe("Historic Ranked");

    expect(getEventPrettyName("PremierDraft_M21_20200625")).toBe(
      "Premier Draft M21"
    );
    expect(getEventPrettyName("QuickDraft_GRN_20190412")).toBe(
      "Quick Draft GRN"
    );
    expect(getEventPrettyName("CompDraft_WAR_20190425")).toBe(
      "Competitive Draft WAR"
    );
    expect(getEventPrettyName("Historic_Shakeup_20200606")).toBe(
      "Historic Shakeup (June 2020)"
    );
    expect(getEventPrettyName("Play_Brawl")).toBe("Play Brawl");
    expect(getEventPrettyName("Constructed_Event_2020")).toBe("Standard Event");
    expect(getEventPrettyName("Traditional_Cons_Event_2020")).toBe(
      "Traditional Standard Event"
    );

    expect(getEventPrettyName("Pauper_20190315")).toBe("Pauper (March 2019)");
  });
});
