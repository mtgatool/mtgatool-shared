/* eslint-disable @typescript-eslint/ban-types */
import { InternalDeck } from "./Deck";
import { Result, GameObject } from "./greInterpreter";
import { MatchGameStats, PriorityTimers, CardCast } from "./currentMatch";
import {
  PlayerInfo,
  TurnInfo,
  GameInfo,
  GREToClientMessage,
  AnnotationInfo,
  ZoneInfo,
  Phase,
} from "./GreTypes";
import { Chances } from "./Chances";
import Deck from "../shared/deck";

export interface Heat {
  seat: number;
  value: number;
  turn: number | undefined;
  phase: Phase;
}

export interface MatchState {
  matchId: string;
  eventId: string;
  onThePlay: number;
  msgId: number;
  playerSeat: number;
  oppSeat: number;
  opponent: InternalPlayer;
  gameWinner: number;
  statsHeatMap: Heat[];
  totalTurns: number;
  playerStats: {
    lifeGained: number;
    lifeLost: number;
    manaUsed: number;
    damage: Record<string, number>;
    lifeTotals: number[];
  };
  oppStats: {
    lifeGained: number;
    lifeLost: number;
    manaUsed: number;
    damage: Record<string, number>;
    lifeTotals: number[];
  };
  // Decks
  currentDeck: Deck;
  originalDeck: Deck;
  cardsLeft: Deck;
  cardsFromSideboard: number[];
  cardsBottom: number[];
  // Info
  player: InternalPlayer;
  players: PlayerInfo[];
  turnInfo: TurnInfo;
  gameInfo: GameInfo;
  // Time stuff
  beginTime: Date;
  priorityTimers: PriorityTimers;
  currentPriority: number;
  // Zones, objects, annotations, ids tracking
  GREtoClient: GREToClientMessage[];
  zones: Record<number, ZoneInfo>;
  annotations: Record<number, AnnotationInfo>;
  processedAnnotations: number[];
  gameObjects: Record<number, GameObject>;
  initialLibraryInstanceIds: number[];
  instanceToCardIdMap: Record<number, number>;
  idChanges: Record<number, number>;
  cardsCast: CardCast[];
  handsDrawn: number[][];
  matchGameStats: MatchGameStats[];
  cardsOdds: Chances;
}

interface ReservedPlayer {
  userId: string;
  playerName: string;
  systemSeatId: number;
  teamId: number;
  connectionInfo: {
    connectionState: string;
  };
  courseId: string;
}

interface RoomPlayer {
  userId: string;
  systemSeatId: number;
}

export interface MatchGameRoomStateChange {
  transactionId: string;
  timestamp: string;
  players: RoomPlayer[];
  matchGameRoomStateChangedEvent: {
    gameRoomInfo: MatchGameRoom;
  };
}

type MatchGameRoom =
  | MatchGameRoomStateTypePlaying
  | MatchGameRoomStateTypeMatchCompleted;

interface GameRoomInfo {
  stateType: string;
}

interface MatchGameRoomStateTypePlaying extends GameRoomInfo {
  stateType: "MatchGameRoomStateType_Playing";
  gameRoomConfig: {
    eventId: string;
    reservedPlayers: ReservedPlayer[];
    matchId: string;
    matchConfig: {};
    greConfig: {
      gameStateRedactorConfiguration: {
        enableRedaction: boolean;
        enableForceDiff: boolean;
      };
      clipsConfiguration: {};
      checkpointConfiguration: {};
    };
    greHostLoggerLevel: string;
    joinRoomTimeoutSecs: number;
    playerDisconnectTimeoutSecs: number;
  };
}

interface MatchGameRoomStateTypeMatchCompleted extends GameRoomInfo {
  stateType: "MatchGameRoomStateType_MatchCompleted";
  gameRoomConfig: {
    eventId: string;
    matchId: string;
  };
  finalMatchResult: {
    matchId: string;
    matchCompletedReason: string;
    resultList: Result[];
  };
}

export interface InternalPlayer {
  userid: string;
  win: number;
  step?: number;
  seat: number;
  tier: number;
  name: string;
  rank: string;
  percentile?: number;
  leaderboardPlace?: number;
  commanderGrpIds: any;
  companionGRPId: number;
  cardsUsed: number[];
}

export interface InternalMatch {
  draws: number;
  arenaId: string;
  playerDeck: InternalDeck;
  oppDeck: InternalDeck;
  tags: any;
  date: string;
  lastPushedDate: string;
  onThePlay: number;
  eventId: string;
  bestOf: number;
  postStats: {
    statsHeatMap: MatchState["statsHeatMap"];
    totalTurns: MatchState["totalTurns"];
    playerStats: MatchState["playerStats"];
    oppStats: MatchState["oppStats"];
  };
  gameStats: MatchGameStats[];
  toolVersion: number;
  toolRunFromSource: boolean;
  id: string;
  duration: number;
  player: InternalPlayer;
  opponent: InternalPlayer;
  archived?: boolean;
  playerDeckHash?: string;
  jumpstartTheme?: string;
  type: "match";
}
