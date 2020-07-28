import _ from "lodash";
import { Metadata, DbCardData, CardSet } from "../types/metadata";

export class DatabaseClass {
  private static instance: DatabaseClass;
  public metadata: Metadata | undefined;

  constructor() {
    this.setDatabase = this.setDatabase.bind(this);
    this.setDatabaseUnsafely = this.setDatabaseUnsafely.bind(this);
    this.card = this.card.bind(this);
    this.ability = this.ability.bind(this);
    this.eventName = this.eventName.bind(this);
  }

  static getInstance(): DatabaseClass {
    if (!DatabaseClass.instance) {
      DatabaseClass.instance = new DatabaseClass();
    }

    return DatabaseClass.instance;
  }

  setDatabase(arg: string): void {
    try {
      this.metadata = JSON.parse(arg);
    } catch (e) {
      console.log("Error parsing metadata", e);
    }
  }

  setDatabaseUnsafely(arg: Metadata): void {
    try {
      this.metadata = arg;
    } catch (e) {
      console.log("Error assigning metadata", e);
    }
  }

  card(grpId: number): DbCardData | undefined {
    return this.metadata && this.metadata.cards
      ? this.metadata.cards[grpId]
      : undefined;
  }

  cardByName(name: string): DbCardData | undefined {
    if (this.metadata && this.metadata.cards) {
      const keys = Object.keys(this.metadata.cards);
      for (let index = 0; index < keys.length; index++) {
        const card = this.metadata.cards[parseInt(keys[index])];
        if (card.name == name) {
          return card;
        }
      }
    }
    return undefined;
  }

  cardFromArt(artId: number | string): DbCardData | undefined {
    const numArtId = typeof artId === "number" ? artId : parseInt(artId);
    if (this.metadata && this.metadata.cards) {
      const keys = Object.keys(this.metadata.cards);
      for (let index = 0; index < keys.length; index++) {
        const card = this.metadata.cards[parseInt(keys[index])];
        if (card.artid == numArtId) {
          return card;
        }
      }
    }

    return undefined;
  }

  ability(abId: number): string | undefined {
    return this.metadata && this.metadata.abilities
      ? this.metadata.abilities[abId]
      : undefined;
  }

  get abilities(): { [id: number]: string } {
    return this.metadata ? this.metadata.abilities : {};
  }

  get archetypes(): Metadata["archetypes"] {
    return this.metadata ? this.metadata.archetypes : [];
  }

  get cards(): { [id: number]: DbCardData } {
    return this.metadata !== undefined ? this.metadata.cards : {};
  }

  get cardList(): DbCardData[] {
    return this.cards ? Object.values(this.cards) : ([] as DbCardData[]);
  }

  get events(): { [id: string]: string } {
    return this.metadata ? this.metadata.events : {};
  }

  get eventIds(): string[] {
    return this.metadata ? Object.keys(this.metadata.events) : ([] as string[]);
  }

  get eventList(): string[] {
    return this.metadata
      ? Object.values(this.metadata.events)
      : ([] as string[]);
  }

  get events_format(): { [id: string]: string } {
    return this.metadata ? this.metadata.events_format : {};
  }

  get limited_ranked_events(): string[] {
    return this.metadata ? this.metadata.limited_ranked_events : [];
  }

  get standard_ranked_events(): string[] {
    return this.metadata ? this.metadata.standard_ranked_events : [];
  }

  get single_match_events(): string[] {
    return this.metadata ? this.metadata.single_match_events : [];
  }

  get sets(): { [id: string]: CardSet } {
    if (!this.metadata) {
      return {};
    }

    return _.pickBy(
      this.metadata.sets,
      (set: CardSet, setName: string) => set && setName && set.code
    );
  }

  get sortedSetCodes(): string[] {
    const setCodes = Object.keys(this.sets);
    setCodes.sort(
      (a, b) =>
        new Date(this.sets[b].release).getTime() -
        new Date(this.sets[a].release).getTime()
    );
    return setCodes;
  }

  get version(): number {
    return this.metadata ? parseInt(this.metadata.version) : 0;
  }

  get lang(): string {
    return this.metadata ? this.metadata.language : "en";
  }

  event(id: string): string | undefined {
    return this.metadata?.events[id];
  }

  eventName(evid: string): string {
    return this.metadata?.events[evid] ? this.metadata.events[evid] : evid;
  }
}

export default DatabaseClass.getInstance();
