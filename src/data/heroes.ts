import { HeroRoster } from "../types";

export const heroes: HeroRoster = {
  alleyCat: {
    name: "alleyCat",
    classes: { lycanthrope: true, rogue: true, wild: true },
    stats: { AGI: 8, CON: 7, MAG: 7, MRL: 6, PER: 8, STR: 5 },
    xp: 8,
    startSkills: { claws: true, lycanthropy: true },
    suggestedSkills: { sneakAttack: true, gourmet: true },
    in: "adventurer"
  },
  angelOfDeath: {
    name: "angelOfDeath",
    classes: { human: true, rogue: true, scholar: true },
    stats: { AGI: 8, CON: 6, MAG: 7, MRL: 7, PER: 8, STR: 6 },
    xp: 6,
    startSkills: { sneakAttack: true },
    suggestedSkills: { exploit: true, findWeakness: true },
    in: "promo"
  },
  banishedSorcerer: {
    name: "banishedSorcerer",
    classes: { reptilian: true, scholar: true, wild: true },
    stats: { AGI: 7, CON: 6, MAG: 9, MRL: 6, PER: 8, STR: 6 },
    xp: 10,
    startSkills: { meditation: true },
    suggestedSkills: { magicMissile: true, mysticShield: true },
    in: "adventurer"
  },
  bloodsportBrawler: {
    name: "bloodsportBrawler",
    classes: { human: true, fighter: true, performer: true },
    stats: { AGI: 8, CON: 9, MAG: 5, MRL: 8, PER: 6, STR: 9 },
    xp: 4,
    startSkills: { foeKiller: true },
    suggestedSkills: { ferociousCharge: true, rage: true },
    in: "base"
  },
  bogConjurer: {
    name: "bogConjurer",
    classes: { human: true, warlock: true, wild: true },
    stats: { AGI: 7, CON: 8, MAG: 9, MRL: 6, PER: 7, STR: 8 },
    xp: 10,
    startSkills: { sixthSense: true },
    suggestedSkills: { mendWounds: true, rebuke: true },
    in: "base"
  },
  carnivalDrifter: {
    name: "carnivalDrifter",
    classes: { human: true, performer: true, rogue: true },
    stats: { AGI: 8, CON: 6, MAG: 8, MRL: 6, PER: 7, STR: 6 },
    xp: 10,
    startSkills: { performance: true },
    suggestedSkills: { blackMarket: true, streetwise: true },
    in: "adventurer"
  },
  charlatanMagician: {
    name: "charlatanMagician",
    classes: { human: true, performer: true, wizard: true },
    stats: { AGI: 8, CON: 6, MAG: 8, MRL: 6, PER: 7, STR: 6 },
    xp: 2,
    startSkills: { illusoryDouble: true, performance: true },
    suggestedSkills: { misdirection: true, mistForm: true },
    in: "psychos"
  },
  cloakedKiller: {
    name: "cloakedKiller",
    classes: { reptilian: true, hunter: true, scholar: true },
    stats: { AGI: 8, CON: 7, MAG: 7, MRL: 5, PER: 8, STR: 6 },
    xp: 2,
    startSkills: { claws: true, lurker: true },
    suggestedSkills: { combatReflexes: true, misdirection: true },
    in: "psychos"
  },
  corpseBurner: {
    name: "corpseBurner",
    classes: { human: true, puritan: true, rogue: true },
    stats: { AGI: 7, CON: 8, MAG: 5, MRL: 8, PER: 7, STR: 8 },
    xp: 10,
    startSkills: { burly: true },
    suggestedSkills: { blackMarket: true, shrugOffPain: true },
    in: "base"
  },
  dishonoredKnight: {
    name: "dishonoredKnight",
    classes: { human: true, fighter: true, militant: true },
    stats: { AGI: 7, CON: 8, MAG: 6, MRL: 9, PER: 6, STR: 9 },
    xp: 4,
    startSkills: { provoke: true },
    suggestedSkills: { rage: true, shrugOffPain: true },
    in: "adventurer"
  },
  fishyConfectioner: {
    name: "fishyConfectioner",
    classes: { fishoid: true, merchant: true, wild: true },
    stats: { AGI: 7, CON: 7, MAG: 7, MRL: 6, PER: 7, STR: 7 },
    xp: 6,
    startSkills: { blackMarket: true },
    suggestedSkills: { looter: true, gourmet: true },
    in: "psychos"
  },
  fugitiveFop: {
    name: "fugitiveFop",
    classes: { human: true, merchant: true, scholar: true },
    stats: { AGI: 8, CON: 6, MAG: 7, MRL: 8, PER: 8, STR: 6 },
    xp: 3,
    startSkills: { dilettante: true },
    suggestedSkills: { performance: true, transmute: true },
    in: "meanStreets"
  },
  hermitAscetic: {
    name: "hermitAscetic",
    classes: { human: true, warlock: true, wizard: true },
    stats: { AGI: 7, CON: 8, MAG: 9, MRL: 6, PER: 7, STR: 7 },
    xp: 3,
    startSkills: { repulsion: true, transcendence: true },
    suggestedSkills: { dopesmoker: true, levitate: true },
    in: "psychos"
  },
  highwayRobber: {
    name: "highwayRobber",
    classes: { human: true, rogue: true, hunter: true },
    stats: { AGI: 8, CON: 7, MAG: 7, MRL: 6, PER: 8, STR: 6 },
    xp: 5,
    startSkills: { looter: true },
    suggestedSkills: { blackMarket: true, track: true },
    in: "psychos"
  },
  hinterlander: {
    name: "hinterlander",
    classes: { human: true, hunter: true, wild: true },
    stats: { AGI: 8, CON: 8, MAG: 7, MRL: 6, PER: 9, STR: 7 },
    xp: 4,
    startSkills: { fieldcraft: true },
    suggestedSkills: { gourmet: true, immunity: true },
    in: "base"
  },
  infamousButcher: {
    name: "infamousButcher",
    classes: { human: true, merchant: true, rogue: true },
    stats: { AGI: 8, CON: 8, MAG: 5, MRL: 6, PER: 6, STR: 8 },
    xp: 8,
    startSkills: { gourmet: true },
    suggestedSkills: { ferociousCharge: true, immunity: true },
    in: "promo"
  },
  jackSlasher: {
    name: "jackSlasher",
    classes: { human: true, hunter: true, wild: true },
    stats: { AGI: 8, CON: 7, MAG: 7, MRL: 5, PER: 6, STR: 7 },
    xp: 10,
    startSkills: { bloodlust: true },
    suggestedSkills: { backstab: true, fieldcraft: true },
    in: "adventurer"
  },
  mendicantMonk: {
    name: "mendicantMonk",
    classes: { human: true, puritan: true, rogue: true },
    stats: { AGI: 7, CON: 9, MAG: 6, MRL: 9, PER: 5, STR: 8 },
    xp: 6,
    startSkills: { shrugOffPain: true },
    suggestedSkills: { forlornHope: true, rage: true },
    in: "meanStreets"
  },
  mercenaryAlchemist: {
    name: "mercenaryAlchemist",
    classes: { human: true, militant: true, scholar: true },
    stats: { AGI: 7, CON: 7, MAG: 8, MRL: 7, PER: 8, STR: 6 },
    xp: 6,
    startSkills: { alchemy: true },
    suggestedSkills: { findWeakness: true, transmute: true },
    in: "base"
  },
  naughtyNaturalist: {
    name: "naughtyNaturalist",
    classes: { human: true, scholar: true, wild: true },
    stats: { AGI: 7, CON: 7, MAG: 7, MRL: 7, PER: 8, STR: 6 },
    xp: 6,
    startSkills: { findWeakness: true },
    suggestedSkills: { gourmet: true, track: true },
    in: "psychos"
  },
  riverPirate: {
    name: "riverPirate",
    classes: { human: true, merchant: true, rogue: true },
    stats: { AGI: 8, CON: 8, MAG: 6, MRL: 6, PER: 8, STR: 8 },
    xp: 2,
    startSkills: { riverRat: true },
    suggestedSkills: { blackMarket: true, looter: true },
    in: "adventurer"
  },
  sharpshooter: {
    name: "sharpshooter",
    classes: { human: true, hunter: true, militant: true },
    stats: { AGI: 8, CON: 8, MAG: 6, MRL: 7, PER: 8, STR: 7 },
    xp: 3,
    startSkills: { deadEyeShot: true },
    suggestedSkills: { findWeakness: true, martialDiscipline: true },
    in: "psychos"
  },
  sicklySoldier: {
    name: "sicklySoldier",
    classes: { human: true, militant: true, rogue: true },
    stats: { AGI: 7, CON: 6, MAG: 5, MRL: 8, PER: 7, STR: 8 },
    xp: 10,
    startSkills: { polearmDiscipline: true },
    suggestedSkills: { ferociousCharge: true, provoke: true },
    in: "meanStreets"
  },
  soldierOfFortune: {
    name: "soldierOfFortune",
    classes: { human: true, fighter: true, militant: true },
    stats: { AGI: 7, CON: 9, MAG: 5, MRL: 8, PER: 7, STR: 8 },
    xp: 6,
    startSkills: { martialDiscipline: true },
    suggestedSkills: { burly: true, shieldwall: true },
    in: "adventurer"
  },
  solitarySwordsman: {
    name: "solitarySwordsman",
    classes: { human: true, fighter: true, rogue: true },
    stats: { AGI: 8, CON: 7, MAG: 6, MRL: 7, PER: 7, STR: 8 },
    xp: 6,
    startSkills: { counter: true },
    suggestedSkills: { findWeakness: true, provoke: true },
    in: "psychos"
  },
  unlicensedSurgeon: {
    name: "unlicensedSurgeon",
    classes: { human: true, rogue: true, scholar: true },
    stats: { AGI: 8, CON: 7, MAG: 7, MRL: 8, PER: 7, STR: 6 },
    xp: 8,
    startSkills: { bleeding: true },
    suggestedSkills: { alchemy: true, mendWounds: true },
    in: "meanStreets"
  },
  verminHunter: {
    name: "verminHunter",
    classes: { human: true, hunter: true, rogue: true },
    stats: { AGI: 8, CON: 6, MAG: 7, MRL: 6, PER: 8, STR: 6 },
    xp: 8,
    startSkills: { combatReflexes: true },
    suggestedSkills: { backstab: true, exterminator: true },
    in: "base"
  },
  voidWitch: {
    name: "voidWitch",
    classes: { human: true, warlock: true, wizard: true },
    stats: { AGI: 8, CON: 5, MAG: 9, MRL: 6, PER: 8, STR: 5 },
    xp: 8,
    startSkills: { voidwalker: true },
    suggestedSkills: { decay: true, mysticShield: true },
    in: "base"
  },
  wastelander: {
    name: "wastelander",
    classes: { human: true, fighter: true, wild: true },
    stats: { AGI: 7, CON: 9, MAG: 5, MRL: 6, PER: 8, STR: 9 },
    xp: 6,
    startSkills: { immunity: true },
    suggestedSkills: { gourmet: true, burly: true },
    in: "adventurer"
  },
  witchSmeller: {
    name: "witchSmeller",
    classes: { human: true, hunter: true, puritan: true },
    stats: { AGI: 8, CON: 7, MAG: 7, MRL: 9, PER: 8, STR: 6 },
    xp: 2,
    startSkills: { intimidate: true },
    suggestedSkills: { inquisitor: true, warding: true },
    in: "base"
  }
};
