import { TableState } from "react-table";
import { CardsData } from "../renderer/components/collection/types";
import { DecksData } from "../renderer/components/decks/types";
import { TransactionData } from "../renderer/components/economy/types";
import { EventTableData } from "../renderer/components/events/types";
import { MatchTableData } from "../renderer/components/matches/types";

export interface OverlaySettingsData {
  alpha: number;
  alpha_back: number;
  autosize: boolean;
  bounds: { width: number; height: number; x: number; y: number };
  clock: boolean;
  draw_odds: boolean;
  deck: boolean;
  lands: boolean;
  keyboard_shortcut: boolean;
  mana_curve: boolean;
  mode: number;
  ontop: boolean;
  show: boolean;
  show_always: boolean;
  sideboard: boolean;
  title: boolean;
  top: boolean;
  type_counts: boolean;
}

export type CardQuality = "small" | "normal" | "large";

export interface SettingsData {
  anon_explore: boolean;
  back_color: string;
  back_url: string;
  themeUri: string;
  cards_quality: CardQuality;
  cards_size: number;
  cards_size_hover_card: number;
  close_on_match: boolean;
  close_to_tray: boolean;
  collectionTableState?: TableState<CardsData>;
  collectionQuery: string;
  collectionMode: string;
  decksTableMode: string;
  decksTableState?: TableState<DecksData>;
  economyTableMode: string;
  economyTableState?: TableState<TransactionData>;
  enable_keyboard_shortcuts: boolean;
  eventsTableMode: string;
  eventsTableState?: TableState<EventTableData>;
  export_format: string;
  last_date_filter: string;
  last_open_tab: number;
  settings_overlay_section: number;
  settings_section: number;
  matchesTableMode: string;
  matchesTableState?: TableState<MatchTableData>;
  overlay_back_color: string;
  overlay_ontop: boolean;
  overlay_scale: number;
  overlay_overview: boolean;
  overlayHover: { x: number; y: number };
  primaryMonitorPos: { x: number; y: number };
  overlays: OverlaySettingsData[];
  right_panel_width: number;
  startup: boolean;
  skip_firstpass: boolean;
  sound_priority: boolean;
  sound_priority_volume: number;
  shortcut_editmode: string;
  shortcut_devtools_main: string;
  shortcut_devtools_overlay: string;
  send_data: boolean;
  back_shadow: boolean;
}
