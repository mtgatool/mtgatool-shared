// Should allow binary ops
export const IPC_NONE = 0;
export const IPC_MAIN = 1;
export const IPC_BACKGROUND = 2;
export const IPC_RENDERER = 4;
export const IPC_OVERLAY = 8;
export const IPC_ALL = IPC_BACKGROUND | IPC_RENDERER | IPC_MAIN | IPC_OVERLAY;

// Login states
export const LOGIN_AUTH = 1;
export const LOGIN_WAITING = 2;
export const LOGIN_OK = 3;
export const LOGIN_FAILED = 4;

// Sync states
export const SYNC_IDLE = 1;
export const SYNC_OK = 2;
export const SYNC_CHECK = 3;
export const SYNC_FETCH = 4;
export const SYNC_PUSH = 5;
export const SYNC_ERR = 6;

// Server roles
export const ROLE_USER = 1;
export const ROLE_PATREON = 2;
export const ROLE_DEVELOPER = 4;
export const ROLE_ADMIN = 8;

// Colour indices
export const WHITE = 1;

export const BLUE = 2;
export const BLACK = 3;
export const RED = 4;
export const GREEN = 5;
export const COLORLESS = 6;
export const MULTI = 7;

// Magic constant to represent auth token in form
export const HIDDEN_PW = "********";

export const CounterType: Record<string, string> = {
  "1": "+1/+1",
  "2": "-1/-1",
  "3": "Poison",
  "4": "Wind",
  "5": "Time",
  "6": "Fade",
  "7": "Loyalty",
  "8": "Wish",
  "9": "Age",
  "10": "Aim",
  "11": "Arrow",
  "12": "Arrowhead",
  "13": "Awakening",
  "14": "Blaze",
  "15": "Blood",
  "16": "Bounty",
  "17": "Bribery",
  "18": "Carrion",
  "19": "Charge",
  "20": "Control",
  "21": "Corpse",
  "22": "Credit",
  "23": "Cube",
  "24": "Currency",
  "25": "Death",
  "26": "Delay",
  "27": "Depletion",
  "28": "Despair",
  "29": "Devotion",
  "30": "Divinity",
  "31": "Doom",
  "32": "Dream",
  "33": "Echo",
  "34": "Elixir",
  "35": "Energy",
  "36": "Eon",
  "37": "Eyeball",
  "38": "Fate",
  "39": "Feather",
  "40": "Filibuster",
  "41": "Flame",
  "42": "Flood",
  "43": "Fungus",
  "44": "Fuse",
  "45": "Glyph",
  "46": "Gold",
  "47": "Growth",
  "48": "Hatchling",
  "49": "Healing",
  "50": "Hoofprint",
  "51": "Hourglass",
  "52": "Hunger",
  "53": "Ice",
  "54": "Infection",
  "55": "Intervention",
  "56": "Javelin",
  "57": "Ki",
  "58": "Level",
  "59": "Luck",
  "60": "Magnet",
  "61": "Mannequin",
  "62": "Matrix",
  "63": "May",
  "64": "Mine",
  "65": "Mining",
  "66": "Mire",
  "67": "Muster",
  "68": "Net",
  "69": "Omen",
  "70": "Ore",
  "71": "Page",
  "72": "Pain",
  "73": "Paralyzation",
  "74": "Petal",
  "75": "Petrification",
  "76": "Phylactery",
  "77": "Pin",
  "78": "Plague",
  "79": "Polyp",
  "80": "Pressure",
  "81": "Pupa",
  "82": "Quest",
  "83": "Scream",
  "84": "Scroll",
  "85": "Shell",
  "86": "Shield",
  "87": "Shred",
  "88": "Sleep",
  "89": "Sleight",
  "90": "Slime",
  "91": "Soot",
  "92": "Spell",
  "93": "Spore",
  "94": "Storage",
  "95": "Strife",
  "96": "Study",
  "97": "Theft",
  "98": "Tide",
  "100": "Tower",
  "101": "Training",
  "102": "Trap",
  "103": "Treasure",
  "104": "Verse",
  "105": "Vitality",
  "106": "Wage",
  "107": "Winch",
  "108": "Lore",
  "109": "+1/+2",
  "110": "+0/+1",
  "111": "+0/+2",
  "112": "+1/+0",
  "113": "+2/+2",
  "114": "-0/-1",
  "115": "-0/-2",
  "116": "-1/-0",
  "117": "-2/-1",
  "118": "-2/-2",
  "119": "Manifestation",
  "120": "Gem",
  "121": "Crystal",
  "122": "Isolation",
  "123": "Hour",
  "124": "Unity",
  "125": "Velocity",
  "126": "Brick",
  "127": "Landmark",
  "128": "Prey",
  "129": "Silver",
  "130": "Egg",
  "131": "Hit",
  "132": "PlaceholderCounterType1",
  "133": "PlaceholderCounterType2",
  "134": "PlaceholderCounterType3",
  "135": "PlaceholderCounterType4",
  "136": "PlaceholderCounterType5",
} as const;

export const SuperType: Record<string, string> = {
  "1": "Basic",
  "2": "Legendary",
  "3": "Ongoing",
  "4": "Snow",
  "5": "World",
} as const;

export const ResultCode: Record<string, string> = {
  "0": "",
  "1": "Success",
  "2": "Failure",
  "3": "Creature cannot attack",
  "4": "Attacking costs not paid",
  "5": "Creature cannot block",
  "6": "Blocker cannot block attacker",
  "7": "Damage ordering contains omissions or additions",
  "8": "Damage sources contain omissions",
  "9": "Damage sources contain additions",
  "10":
    "Attempt to assign damage such that non-lethal damage is assigned to anything other than the last recipient in the order",
  "12": "Too many targets selected",
  "13": "Not enough targets selected",
  "14": "Selected target is not valid",
} as const;

export const SubType: Record<string, string> = {
  "1": "Angel",
  "2": "Archer",
  "3": "Archon",
  "4": "Artificer",
  "5": "Assassin",
  "6": "Aura",
  "7": "Basilisk",
  "8": "Bat",
  "9": "Bear",
  "10": "Beast",
  "11": "Berserker",
  "12": "Bird",
  "13": "Boar",
  "14": "Cat",
  "15": "Chandra",
  "16": "Cleric",
  "17": "Construct",
  "18": "Crocodile",
  "19": "Demon",
  "20": "Djinn",
  "21": "Dragon",
  "22": "Drake",
  "23": "Druid",
  "24": "Fish",
  "25": "Elemental",
  "26": "Elephant",
  "27": "Elf",
  "28": "Equipment",
  "29": "Forest",
  "30": "Garruk",
  "31": "Gate",
  "32": "Giant",
  "33": "Gideon",
  "34": "Goblin",
  "35": "Golem",
  "36": "Griffin",
  "37": "Horse",
  "38": "Hound",
  "39": "Human",
  "40": "Hydra",
  "41": "Illusion",
  "42": "Insect",
  "43": "Island",
  "44": "Jace",
  "45": "Knight",
  "46": "Merfolk",
  "47": "Minotaur",
  "48": "Monk",
  "49": "Mountain",
  "50": "Ogre",
  "51": "Ooze",
  "52": "Pegasus",
  "53": "Phoenix",
  "54": "Plains",
  "55": "Rhino",
  "56": "Rogue",
  "57": "Salamander",
  "58": "Scout",
  "59": "Serpent",
  "60": "Shade",
  "61": "Shaman",
  "62": "Siren",
  "63": "Skeleton",
  "64": "Soldier",
  "65": "Sorin",
  "66": "Sphinx",
  "67": "Spider",
  "68": "Spirit",
  "69": "Swamp",
  "70": "Tower",
  "71": "Treefolk",
  "72": "Troll",
  "73": "Urza's",
  "74": "Vampire",
  "75": "Vedalken",
  "76": "Wall",
  "77": "Warrior",
  "78": "Wizard",
  "79": "Wolf",
  "80": "Wurm",
  "81": "Zombie",
  "82": "Mine",
  "83": "Power-Plant",
  "84": "Saproling",
  "85": "Avatar",
  "86": "Sliver",
  "87": "Samurai",
  "88": "Pest",
  "89": "Thalakos",
  "90": "Dauthi",
  "91": "Minion",
  "92": "Advisor",
  "93": "Ajani",
  "94": "Alara",
  "95": "Ally",
  "97": "Antelope",
  "98": "Ape",
  "99": "Arcane",
  "100": "Arkhos",
  "101": "Ashiok",
  "102": "Assembly-Worker",
  "103": "Atog",
  "104": "Aurochs",
  "105": "Azgol",
  "106": "Badger",
  "107": "Barbarian",
  "108": "Beeble",
  "109": "Belenon",
  "110": "Bolas",
  "111": "Bolass",
  "112": "Bringer",
  "113": "Brushwagg",
  "114": "Camel",
  "115": "Carrier",
  "116": "Centaur",
  "117": "Cephalid",
  "118": "Chimera",
  "119": "Cockatrice",
  "120": "Crab",
  "121": "Curse",
  "122": "Cyclops",
  "123": "Desert",
  "124": "Devil",
  "125": "Dominaria",
  "126": "Domri",
  "127": "Dreadnought",
  "128": "Drone",
  "129": "Dryad",
  "130": "Dwarf",
  "131": "Efreet",
  "132": "Elder",
  "133": "Eldrazi",
  "134": "Elk",
  "135": "Elspeth",
  "136": "Equilor",
  "137": "Ergamon",
  "138": "Eye",
  "139": "Fabacin",
  "140": "Faerie",
  "141": "Ferret",
  "142": "Flagbearer",
  "143": "Fortification",
  "144": "Fox",
  "145": "Frog",
  "146": "Fungus",
  "147": "Gargoyle",
  "148": "Gnome",
  "149": "Goat",
  "150": "God",
  "151": "Gorgon",
  "152": "Gremlin",
  "153": "Hag",
  "154": "Harpy",
  "155": "Hellion",
  "156": "Hippo",
  "157": "Hippogriff",
  "158": "Homarid",
  "159": "Homunculus",
  "160": "Horror",
  "161": "Hyena",
  "162": "Imp",
  "163": "Incarnation",
  "164": "Innistrad",
  "165": "Iquatana",
  "166": "Ir",
  "167": "Jellyfish",
  "168": "Juggernaut",
  "169": "Kaldheim",
  "170": "Kamigawa",
  "171": "Karn",
  "172": "Karsus",
  "173": "Kavu",
  "174": "Kephalai",
  "175": "Kirin",
  "176": "Kithkin",
  "177": "Kobold",
  "178": "Kolbahan",
  "179": "Kor",
  "180": "Koth",
  "181": "Kraken",
  "182": "Kyneth",
  "183": "Lair",
  "184": "Lammasu",
  "185": "Leech",
  "186": "Leviathan",
  "187": "Lhurgoyf",
  "188": "Licid",
  "189": "Liliana",
  "190": "Lizard",
  "191": "Locus",
  "192": "Lorwyn",
  "193": "Luvion",
  "194": "Manticore",
  "195": "Masticore",
  "196": "Meditation",
  "197": "Mercadia",
  "198": "Mercenary",
  "199": "Metathran",
  "200": "Mirrodin",
  "201": "Moag",
  "202": "Monger",
  "203": "Mongoose",
  "204": "Mongseng",
  "205": "Moonfolk",
  "206": "Muraganda",
  "207": "Mutant",
  "208": "Myr",
  "209": "Mystic",
  "210": "Nautilus",
  "211": "Nephilim",
  "212": "New",
  "213": "Nightmare",
  "214": "Nightstalker",
  "215": "Ninja",
  "216": "Nissa",
  "217": "Noggle",
  "218": "Nomad",
  "219": "Nymph",
  "220": "Octopus",
  "221": "Orc",
  "222": "Orgg",
  "223": "Ouphe",
  "224": "Ox",
  "225": "Oyster",
  "226": "Phelddagrif",
  "227": "Phyrexia",
  "228": "Pirate",
  "229": "Plant",
  "230": "Praetor",
  "231": "Pyrulea",
  "232": "Rabbit",
  "233": "Rabiah",
  "234": "Ral",
  "235": "Rat",
  "236": "Rath",
  "237": "Ravnica",
  "238": "Realm",
  "239": "Rebel",
  "240": "Regatha",
  "241": "Rigger",
  "242": "Sable",
  "243": "Sarkhan",
  "244": "Satyr",
  "245": "Scarecrow",
  "246": "Scorpion",
  "247": "Segovia",
  "248": "Serras",
  "249": "Shadowmoor",
  "250": "Shandalar",
  "251": "Shapeshifter",
  "252": "Sheep",
  "253": "Shrine",
  "254": "Slith",
  "255": "Slug",
  "256": "Snake",
  "257": "Soltari",
  "258": "Spawn",
  "259": "Specter",
  "260": "Spellshaper",
  "261": "Spike",
  "262": "Sponge",
  "263": "Squid",
  "264": "Squirrel",
  "265": "Starfish",
  "266": "Surrakar",
  "267": "Tamiyo",
  "268": "Tezzeret",
  "269": "Thopter",
  "270": "Thrull",
  "271": "Tibalt",
  "272": "Trap",
  "273": "Turtle",
  "274": "Ulgrotha",
  "275": "Unicorn",
  "276": "Valla",
  "277": "Venser",
  "278": "Viashino",
  "279": "Volver",
  "280": "Vraska",
  "281": "Vryn",
  "282": "Weird",
  "283": "Werewolf",
  "284": "Whale",
  "285": "Wildfire",
  "286": "Wolverine",
  "287": "Wombat",
  "288": "Worm",
  "289": "Wraith",
  "290": "Xenagos",
  "291": "Xerex",
  "292": "Yeti",
  "293": "Zendikar",
  "294": "Zubera",
  "295": "Germ",
  "296": "Contraption",
  "297": "Citizen",
  "298": "Coward",
  "299": "Deserter",
  "300": "Prism",
  "301": "Reflection",
  "302": "Sand",
  "303": "Serf",
  "304": "Dack",
  "305": "Kiora",
  "306": "AllCreatureTypes",
  "307": "Blinkmoth",
  "308": "Camarid",
  "309": "Caribou",
  "310": "Graveborn",
  "311": "Lamia",
  "312": "Orb",
  "313": "Pentavite",
  "314": "Pincher",
  "315": "Splinter",
  "316": "Survivor",
  "317": "Tetravite",
  "318": "Triskelavite",
  "319": "Scion",
  "320": "Processor",
  "321": "Arlinn",
  "322": "Mole",
  "323": "Nahiri",
  "324": "Clue",
  "325": "Teferi",
  "326": "Daretti",
  "327": "Freyalise",
  "328": "Nixilis",
  "329": "Narset",
  "330": "Ugin",
  "331": "Vehicle",
  "332": "Servo",
  "333": "Dovin",
  "334": "Saheeli",
  "335": "Monkey",
  "336": "Aetherborn",
  "337": "Pilot",
  "338": "Jackal",
  "339": "Naga",
  "340": "Cartouche",
  "341": "Samut",
  "342": "Dinosaur",
  "343": "Treasure",
  "344": "Huatli",
  "345": "Angrath",
  "346": "Trilobite",
  "347": "Saga",
  "348": "Jaya",
  "349": "Vivien",
  "350": "Egg",
  "351": "PlaceholderSubType1",
  "352": "PlaceholderSubType2",
  "353": "PlaceholderSubType3",
  "354": "PlaceholderSubType4",
  "355": "PlaceholderSubType5",
} as const;

export const FailureReason: Record<string, string> = {
  "0": "",
  "1": "Request made with out of date game state.",
  "2": "Player has acted out of turn.",
  "3": "Response does not match the pending request.",
  "4": "Attempted to batch actions that must be performed one at at time.",
  "5":
    "Attempted to perform an action not currently on the list of legal actions.",
  "6":
    "An optional field in the message should have been supplied based on the contents of the required fields, but was not.",
  "7": "Selected an option that is not on the list of legal options.",
  "8": "Message contains a bad enum.",
  "9": "Targeted spell or ability does not have sufficient valid targets.",
  "10": "Target specified for out-of-range target index.",
  "11": "Specified target is not on the legal targets list.",
  "12": "Specified mana does not exist.",
  "13": "Specified option selection is not valid.",
  "14": "The message received was not expected by the GRE.",
  "15":
    "Player input is below a specified minimum or above a specified maximum.",
} as const;

export const Phase: Record<string, string> = {
  "0": "",
  "1": "Beginning",
  "2": "1st Main",
  "3": "Combat",
  "4": "2nd Main",
  "5": "Ending",
} as const;

export const MatchState: Record<string, string> = {
  "0": "",
  "1": "Game In Progress",
  "2": "Game Complete, Match In Progress",
  "3": "Match Complete",
  "4": "Sideboarding",
} as const;

export const Step: Record<string, string> = {
  "0": "",
  "1": "Untap",
  "2": "Upkeep",
  "3": "Draw",
  "4": "Begin Combat",
  "5": "Declare Attackers",
  "6": "Declare Blockers",
  "7": "Combat Damage",
  "8": "End Combat",
  "9": "End",
  "10": "Cleanup",
  "11": "First Strike Damage",
} as const;

export const CardType: Record<string, string> = {
  "1": "Artifact",
  "2": "Creature",
  "3": "Enchantment",
  "4": "Instant",
  "5": "Land",
  "6": "Phenomenon",
  "7": "Plane",
  "8": "Planeswalker",
  "9": "Scheme",
  "10": "Sorcery",
  "11": "Tribal",
  "12": "Vanguard",
} as const;

export const Color: Record<string, string> = {
  "1": "White",
  "2": "Blue",
  "3": "Black",
  "4": "Red",
  "5": "Green",
} as const;

export const LANDS_HACK = -100;

export const FACE_NONE = 0;
export const FACE_DFC_BACK = 1;
export const FACE_DFC_FRONT = 2;
export const FACE_SPLIT_FULL = 6;
export const FACE_SPLIT = 5;
export const FACE_ADVENTURE = 7;
export const FACE_ADVENTURE_MAIN = 8;
export const FACE_MODAL_BACK = 9;
export const FACE_MODAL_FRONT = 10;

export const FORMATS: Record<string, string> = {
  Standard: "Standard",
  TraditionalStandard: "Traditional Standard",
  Historic: "Historic",
  TraditionalHistoric: "Traditional Historic",
  Renewal: "Standard 2020",
  Draft: "Draft",
  Sealed: "Sealed",
  Pauper: "Pauper",
  Singleton: "Singleton",
  Cascade: "Cascade",
  MoreBans: "Standard Shakeup",
  Pandemonium: "Pandemonium",
  NoInstants: "No Instants",
  DirectGame: "Direct Game",
  precon: "Preconstructed",
  Ravnica: "Ravnica Block",
  Ixalan: "Ixalan Block",
  GRN: "Ravnica Constructed",
  XLN: "Ixalan Constructed",
};
// TODO use a label handler for PlayerInventory.GetFormats instead of this manual constant
export const STANDARD_CUTOFF_DATE = "2018-10-04"; // day before GRN release

export const COLORS_ALL = ["w", "u", "b", "r", "g", "c", "m"] as const;
export const COLORS_BRIEF = ["w", "u", "b", "r", "g"] as const;
export const COLORS_LONG = [
  "white",
  "blue",
  "black",
  "red",
  "green",
  "colorless",
  "multi",
] as const;
export const RANKS = [
  "Bronze",
  "Silver",
  "Gold",
  "Platinum",
  "Diamond",
  "Mythic",
] as const;
export const OVERLAY_FULL = 0;
export const OVERLAY_LEFT = 1;
export const OVERLAY_ODDS = 2;
export const OVERLAY_SEEN = 3;
export const OVERLAY_LOG = 4;
export const OVERLAY_DRAFT = 5;
export const OVERLAY_DRAFT_BREW = 6;
export const OVERLAY_MIXED = 7;

export const OVERLAY_DRAFT_MODES = [OVERLAY_DRAFT, OVERLAY_DRAFT_BREW];

export const ARENA_MODE_IDLE = 0;
export const ARENA_MODE_MATCH = 1;
export const ARENA_MODE_DRAFT = 2;

export const RATINGS_MTGCSR = 0;
export const RATINGS_LOLA = 1;

export const DRAFT_RANKS = [
  "F",
  "D-",
  "D",
  "D+",
  "C-",
  "C",
  "C+",
  "B-",
  "B",
  "B+",
  "A-",
  "A",
  "A+",
] as const;

export const DRAFT_RANKS_LOLA = [
  "",
  "A+",
  "A",
  "A-",
  "B+",
  "B",
  "B-",
  "C+",
  "C",
  "C-",
  "D+",
  "D",
  "D-",
  "F",
];

export const CARD_TYPE_CODES = [
  "cre",
  "lan",
  "ins",
  "sor",
  "enc",
  "art",
  "pla",
] as const;

export const CARD_SUPERTYPES = [
  "Basic Land",
  "Land",
  "Creature",
  "Artifact",
  "Enchantment",
  "Instant",
  "Sorcery",
  "Planeswalker",
];

export const CARD_TYPES = [
  "Creatures",
  "Lands",
  "Instants",
  "Sorceries",
  "Enchantments",
  "Artifacts",
  "Planeswalkers",
] as const;

export const WILDCARD_RARITIES = [
  "common",
  "uncommon",
  "rare",
  "mythic",
] as const;

export const CARD_RARITIES = [
  "token",
  "common",
  "uncommon",
  "rare",
  "mythic",
  "land",
] as const;

export const MANA_COLORS = [
  "#E7CA8E",
  "#AABEDF",
  "#A18E87",
  "#DD8263",
  "#B7C89E",
  "#E3E3E3",
] as const;

export const MANA: { [key: number]: string } = {
  0: "",
  1: "white",
  2: "blue",
  3: "black",
  4: "red",
  5: "green",
  6: "colorless",
  7: "",
  8: "x",
} as const;

export const RANKS_SORT: Record<string, number> = {
  Begginer: 0,
  Bronze: 1,
  Silver: 2,
  Gold: 3,
  Platinum: 4,
  Diamond: 5,
  Mythic: 6,
} as const;

export const DEFAULT_PACK_SIZE = 14;

export const PACK_SIZES: Record<string, number> = {
  "Ravnica Allegiance": 14,
  "Guilds of Ravnica": 14,
  "Core Set 2020": 15,
} as const;

export const DEFAULT_TILE = 67003;
export const EASING_DEFAULT = "cubicBezier(0.570, 0.165, 0.210, 0.990)";

//export const MAIN_OFFLINE = 1;
//export const MAIN_LOGIN = 2;
export const MAIN_HOME = 3;
export const MAIN_DECKS = 4;
export const MAIN_MATCHES = 5;
export const MAIN_EVENTS = 6;
export const MAIN_EXPLORE = 7;
export const MAIN_ECONOMY = 8;
export const MAIN_COLLECTION = 9;
export const MAIN_SETTINGS = 10;
export const MAIN_TIMELINE = 11;
//export const MAIN_UPDATE = 12;
export const MAIN_CONSTRUCTED = 13;
export const MAIN_LIMITED = 14;

export const SUB_DECK = 1;
export const SUB_MATCH = 2;
export const SUB_DRAFT = 3;

export const SHORTCUT_NAMES: Record<string, string> = {
  shortcut_overlay_1: "Toggle Overlay 1",
  shortcut_overlay_2: "Toggle Overlay 2",
  shortcut_overlay_3: "Toggle Overlay 3",
  shortcut_overlay_4: "Toggle Overlay 4",
  shortcut_overlay_5: "Toggle Overlay 5",
  shortcut_editmode: "Toggle Edit Overlay Positions",
  shortcut_devtools_main: "Toggle Developer Tools (main)",
  shortcut_devtools_overlay: "Toggle Developer Tools (overlays)",
} as const;

export const SETTINGS_BEHAVIOUR = 1;
export const SETTINGS_ARENA_DATA = 2;
export const SETTINGS_OVERLAY = 3;
export const SETTINGS_VISUAL = 4;
export const SETTINGS_SHORTCUTS = 5;
export const SETTINGS_PRIVACY = 6;
export const SETTINGS_ABOUT = 7;
export const SETTINGS_LOGIN = 8;
export const SETTINGS_ADMIN = 9;

// Date constants
export const DATE_LAST_DAY = "Last 24 Hours";

export const DATE_LAST_30 = "Last 30 Days";
export const DATE_SEASON = "Current Season";
export const DATE_ALL_TIME = "All Time";

export const ECONOMY_LIST_MODE = "List View";
export const ECONOMY_TABLE_MODE = "Table View";
export const ECONOMY_TABLE_MODES = [ECONOMY_LIST_MODE, ECONOMY_TABLE_MODE];

export const EVENTS_LIST_MODE = "List View";
export const EVENTS_TABLE_MODE = "Table View";
export const EVENTS_TABLE_MODES = [EVENTS_LIST_MODE, EVENTS_TABLE_MODE];

export const MATCHES_LIST_MODE = "List View";
export const MATCHES_TABLE_MODE = "Table View";
export const MATCHES_TABLE_MODES = [MATCHES_LIST_MODE, MATCHES_TABLE_MODE];

export const DECKS_ART_MODE = "Deck Art View";
const DECKS_LIST_MODE = "List View";
export const DECKS_TABLE_MODE = "Table View";
export const DECKS_TABLE_MODES = [
  DECKS_LIST_MODE,
  DECKS_ART_MODE,
  DECKS_TABLE_MODE,
];

export const COLLECTION_CARD_MODE = "Card View";
