import Deck from "../deck";
import { JumpstartThemes } from "../../types/jumpstart";

function isDeckOf(deckString: string, cards: string[]): boolean {
  let ret = false;
  cards.forEach((name) => {
    if (deckString.indexOf(name) !== -1) ret = true;
  });
  return ret;
}

export const themeCards: Record<JumpstartThemes, string[]> = {
  Basri: ["Basri Ket", "Basri's Lieutenant"],
  Unicorns: ["Blessed Sanctuary", "Emiel the Blessed"],
  Teferi: ["Teferi, Master of Time", "Teferi's Ageless Insight"],
  Mill: ["Bruvac the Grandiloquent"],
  Liliana: ["Liliana, Waker of the Dead", "Liliana's Standard Bearer"],
  Phyrexian: ["Sheoldred, Whispering One", "Carnifex Demon"],
  Chandra: ["Chandra, Heart of Fire", "Chandra's Incinerator"],
  Seismic: ["Grim Lavamancer", "Magmaquake"],
  Garruk: ["Garruk, Unleashed", "Garruk's Harbinger"],
  Walls: ["Assault Formation", "Towering Titan"],
  Rainbow: ["Chamber Sentry", "Maelstrom Archangel"],
  Angels: [
    "Angelic Arbiter",
    "Baneslayer Angel",
    "Linvala, Keeper of Silence",
    "Serra’s Guardian",
  ],
  Dogs: ["Isamaru, Hound of Konda", "Pack Leader"],
  Enchanted: [
    "Ajani's Chosen",
    "Celestial Mantle",
    "Kor Spiritdancer",
    "Archon of Sun’s Grace",
  ],
  Pirates: ["Corsair Captain"],
  Spirits: ["Rattlechains", "Shacklegeist"],
  "Under the Sea": ["Pursued Whale", "Whelming Wave"],
  Discarding: ["Liliana's Reaver", "Nyxathid", "Tinybones", "Trinket Thief"],
  Rogues: ["Gonti, Lord of Luxury", "Thieves' Guild Enforcer"],
  Witchcraft: ["Bogbrew Witch", "Witch of the Moors"],
  Dragons: [
    "Gadrak, the Crown-Scourge",
    "Lathliss, Dragon Queen",
    "Terror of the Peaks",
  ],
  Lightning: ["Ball Lightning", "Lightning Phoenix", "Lightning Serpent"],
  Minotaurs: ["Rageblood Shaman", "Sethron, Hurloon General"],
  Cats: ["Feline Sovereign", "Lurking Predators"],
  Elves: ["Allosaurus Shepherd", "Craterhoof Behemoth", "Elvish Archdruid"],
  Lands: ["Oracle of Mul Daya", "Ulvenwald Hydra"],
  Doctor: [
    "Cradle of Vitality",
    "Path of Bravery",
    "Rhox Faithmender",
    "Speaker of the Heavens",
  ],
  "Feathered Friends": [
    "Angel of the Dire Hour",
    "Archon of Justice",
    "Archon of Redemption",
    "Steel-Plume Marshal",
  ],
  "Heavily Armored": [
    "Cathars' Crusade",
    "Duelist's Heritage",
    "High Sentinels of Arashin",
    "Mikaeus, the Lunarch",
  ],
  Legion: [
    "Blessed Sanctuary",
    "Glorious Anthem",
    "Mentor of the Meek",
    "Lena, Selfless Champion",
  ],
  "Above the Clouds": [
    "Inniaz, the Gale Force",
    "Kira, Great Glass-Spinner",
    "Serendib Efreet",
    "Windreader Sphinx",
  ],
  Archaeology: [
    "Scarecrone",
    "Scholar of the Lost Trove",
    "Sharding Sphinx",
    "Vedalken Archmage",
  ],
  "Well-Read": [
    "Mystic Archaeologist",
    "Ormos, Archive Keeper",
    "Read the Runes",
    "Rhystic Study",
    "Gadwick, the Wizened",
    "Teferi’s Ageless Insight",
  ],
  Wizards: [
    "Barrin, Tolarian Archmage",
    "Talrand, Sky Summoner",
    "Riptide Laboratory",
  ],
  Minions: ["Kels, Fight Fixer", "Ghoulcaller Gisa", "Phyrexian Tower"],
  Reanimated: [
    "Gravewaker",
    "Reanimate",
    "Rise of the Dark Realms",
    "Scourge of Nel Toth",
    "Doomed Necromancer",
    "Woe Strider",
  ],
  Spooky: ["Black Market", "Harvester of Souls", "Languish", "Ogre Slumlord"],
  Vampires: [
    "Drana, Liberator of Malakir",
    "Exquisite Blood",
    "Sangromancer",
    "Vito, Thorn of the Dusk Rose",
  ],
  Devilish: [
    "Brash Taunter",
    "Hellrider",
    "Sin Prodder",
    "Zurzoth, Chaos Rider",
  ],
  Goblins: [
    "Goblin Chieftain",
    "Goblin Goon",
    "Krenko, Mob Boss",
    "Muxus, Goblin Grandee",
  ],
  Smashing: [
    "Etali, Primal Storm",
    "Hamletback Goliath",
    "Sarkhan's Unsealing",
    "Volcanic Salvo",
  ],
  Spellcasting: [
    "Charmbreaker Devils",
    "Double Vision",
    "Dualcaster Mage",
    "Immolating Gyre",
  ],
  Dinosaurs: [
    "Ghalta, Primal Hunger",
    "Primal Might",
    "Rampaging Brontodon",
    "Selvala, Heart of the Wilds",
  ],
  "Plus One": [
    "Branching Evolution",
    "Champion of Lambholt",
    "Primeval Bounty",
    "Rishkar, Peema Renegade",
  ],
  Predatory: [
    "Momentous Fall",
    "Neyith of the Dire Hunt",
    "Ravenous Baloth, Thragtusk",
  ],
  "Tree-Hugging": [
    "Jolrael, Mwonvuli Recluse",
    "Primordial Sage",
    "Soul of the Harvest",
    "Verdant Embrace",
  ],
};

export default function getJumpstartThemes(deck: Deck): JumpstartThemes[] {
  deck.getMainboard().removeDuplicates(true);
  deck.getSideboard().removeDuplicates(true);
  deck.getMainboard().removeZeros(true);
  deck.getSideboard().removeZeros(true);
  const deckString = deck.getExportArena();

  const themes: JumpstartThemes[] = [];

  Object.keys(themeCards).forEach((key) => {
    const theme = key as JumpstartThemes;
    if (isDeckOf(deckString, themeCards[theme])) themes.push(theme);
  });

  return themes.sort();
}
