/* eslint-disable no-use-before-define */
export enum PokemonTypes {
  NORMAL = 'normal',
  FIGHTING = 'fighting',
  FLYING = 'flying',
  POISON = 'poison',
  GROUND = 'ground',
  ROCK = 'rock',
  BUG = 'bug',
  GHOST = 'ghost',
  STEEL = 'steel',
  FIRE = 'fire',
  WATER = 'water',
  GRASS = 'grass',
  ELECTRIC = 'electric',
  PSYCHIC = 'psychic',
  ICE = 'ice',
  DRAGON = 'dragon',
  DARK = 'dark',
  FAIRY = 'fairy',
  UNKNOWN = 'unknown',
  SHADOW = 'shadow',
}

export interface Species {
  name: PokemonTypes;
  url: string;
}

export interface Ability {
  ability: Species;
  isHidden: boolean;
  slot: number;
}
export interface GameIndex {
  gameIndex: number;
  version: Species;
}

export interface VersionGroupDetail {
  levelLearnedAt: number;
  moveLearnMethod: Species;
  versionGroup: Species;
}

export interface Move {
  move: Species;
  versionGroupDetails: VersionGroupDetail[];
}

export interface RedBlue {
  backDefault: string;
  backGray: string;
  backTransparent: string;
  frontDefault: string;
  frontGray: string;
  frontTransparent: string;
}

export interface GenerationI {
  redBlue: RedBlue;
  yellow: RedBlue;
}

export interface GenerationIi {
  crystal: Crystal;
  gold: Gold;
  silver: Gold;
}

export interface Crystal {
  backDefault: string;
  backShiny: string;
  backShinyTransparent: string;
  backTransparent: string;
  frontDefault: string;
  frontShiny: string;
  frontShinyTransparent: string;
  frontTransparent: string;
}

export interface Gold {
  backDefault: string;
  backShiny: string;
  frontDefault: string;
  frontShiny: string;
  frontTransparent?: string;
}

export interface Emerald {
  frontDefault: string;
  frontShiny: string;
}

export interface GenerationIii {
  emerald: Emerald;
  fireredLeafgreen: Gold;
  rubySapphire: Gold;
}

export interface Home {
  frontDefault: string;
  frontFemale: null;
  frontShiny: string;
  frontShinyFemale: null;
}
export interface DreamWorld {
  frontDefault: string;
  frontFemale: null;
}

export interface GenerationVii {
  icons: DreamWorld;
  ultraSunUltraMoon: Home;
}

export interface GenerationViii {
  icons: DreamWorld;
}

export interface OfficialArtwork {
  frontDefault: string;
}

export interface Other {
  dreamWorld: DreamWorld;
  home: Home;
  officialArtwork: OfficialArtwork;
}

export interface Sprites {
  backDefault: string;
  backFemale: null;
  backShiny: string;
  backShinyFemale: null;
  front_default: string;
  frontFemale: null;
  frontShiny: string;
  frontShinyFemale: null;
  other?: Other;
  versions?: Versions;
  animated?: Sprites;
}

export interface GenerationV {
  blackWhite: Sprites;
}

export interface GenerationIv {
  diamondPearl: Sprites;
  heartgoldSoulsilver: Sprites;
  platinum: Sprites;
}

export interface Versions {
  generationI: GenerationI;
  generationIi: GenerationIi;
  generationIii: GenerationIii;
  generationIv: GenerationIv;
  generationV: GenerationV;
  generationVi: { [key: string]: Home };
  generationVii: GenerationVii;
  generationViii: GenerationViii;
}

export interface Stat {
  baseStat: number;
  effort: number;
  stat: Species;
}

export interface Type {
  slot: number;
  type: Species;
}
export interface Pokemon {
  abilities: Ability[];
  baseExperience: number;
  forms: Species[];
  gameIndices: GameIndex[];
  height: number;
  heldItems: any[];
  id: number;
  isDefault: boolean;
  locationAreaEncounters: string;
  moves: Move[];
  name: string;
  order: number;
  pastTypes: any[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}
