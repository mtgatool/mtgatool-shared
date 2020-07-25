import { Chances } from "./Chances";
import Deck from "../shared/deck";
import {
  GameObject,
  ZoneType,
  ZoneData,
  PlayerData,
  Result,
} from "./greInterpreter";
import {
  GREToClientMessage,
  AnnotationInfo,
  TurnInfo,
  GameInfo,
} from "../assets/proto/GreTypes";
import { InternalDeck } from "./Deck";

export interface MatchPlayer {
  seat: number;
  deck: Deck;
  cards: number[];
  originalDeck: Deck;
  commanderGrpIds: number[];
  name: string;
  life: number;
  turn: number;
  id: string;
  rank: string;
  tier: number;
  percentile: number;
  leaderboardPlace: number;
}

export interface CardCast {
  grpId: number;
  turn: number;
  player: number;
}

export interface PriorityTimers {
  last: number;
  timers: number[];
}

export interface MatchData {
  zones: { [key: string]: ZoneType };
  player: MatchPlayer;
  opponent: MatchPlayer;
  players: { [key: number]: PlayerData };
  bestOf: number;
  game: number;
  beginTime: Date;
  gameStage: string;
  playerCardsLeft: Deck;
  annotations: AnnotationInfo[];
  processedAnnotations: number[];
  gameObjs: { [key: number]: GameObject };
  turnInfo: TurnInfo;
  priorityTimers: PriorityTimers;
  currentPriority: number;
  cardsCast: CardCast[];
  latestMessage: number;
  msgId: number;
  GREtoClient: GREToClientMessage[];
  cardTypesByZone: ZoneData;
  playerCardsUsed: number[];
  oppCardsUsed: number[];
  gameInfo: GameInfo;
  results: Result[];
  onThePlay: number;
  matchId: string;
  matchTime: number;
  playerChances: Chances;
  playerCardsOdds: Chances;
  oppCards: Deck;
  eventId: string;
  InternalEventName?: string;
  oppArchetype: string;
}

export interface DeckChanges {
  added: number[];
  removed: number[];
}

export interface MatchGameStats {
  time: number;
  winner: number;
  win: boolean;
  shuffledOrder: number[];
  handsDrawn: number[][];
  handLands: number[];
  cardsCast: CardCast[];
  deckSize: number;
  landsInDeck: number;
  multiCardPositions: {
    [pos: string]: {
      [grpId: string]: number[];
    };
  };
  librarySize: number;
  landsInLibrary: number;
  libraryLands: number[];
  sideboardChanges: DeckChanges;
  deck: InternalDeck;
  cardsSeen: number[];
  onThePlay: number;
}
