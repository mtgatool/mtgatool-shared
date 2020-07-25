import _ from "lodash";
import { Metadata, DbCardData, CardSet } from "../types/metadata";

class Database {
  private static instance: Database;
  public metadata: Metadata | undefined;

  constructor() {
    this.setDatabase = this.setDatabase.bind(this);
    this.card = this.card.bind(this);
    this.ability = this.ability.bind(this);
    this.eventName = this.eventName.bind(this);
  }

  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }

    return Database.instance;
  }

  setDatabase(arg: string): void {
    try {
      this.metadata = JSON.parse(arg);
    } catch (e) {
      console.log("Error parsing metadata", e);
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

  ability(abId: number): string | undefined {
    return this.metadata && this.metadata.abilities
      ? this.metadata.abilities[abId]
      : undefined;
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

  get version(): number {
    return this.metadata ? this.metadata.version : 0;
  }

  event(id: string): string | undefined {
    return this.metadata?.events[id];
  }

  eventName(evid: string): string {
    return this.metadata?.events[evid] ? this.metadata.events[evid] : evid;
  }
}

export default Database.getInstance();
