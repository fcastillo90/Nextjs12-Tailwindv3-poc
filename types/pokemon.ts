/* eslint-disable no-shadow */
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
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shinyFemale: null;
}
export interface DreamWorld {
  front_default: string;
  front_female: null;
}

export interface GenerationVii {
  icons: DreamWorld;
  ultra_sun_ultra_moon: Home;
}

export interface GenerationViii {
  icons: DreamWorld;
}

export interface OfficialArtwork {
  front_default: string;
}

export interface Other {
  dream_world: DreamWorld;
  home: Home;
  official_artwork: OfficialArtwork;
}

export interface Sprites {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
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
  base_stat: number;
  effort: number;
  stat: Species;
}

export interface Type {
  slot: number;
  type: Species;
}
export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: Species[];
  game_indices: GameIndex[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: any[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface PokemonOverviewData {
  name: string;
  url: string;
}

export interface PokemonList {
  count: number;
  next: string;
  previous: string;
  results: PokemonOverviewData[]
}
export interface Evolution {
  baby_trigger_item: null;
  chain: Chain;
  id: number;
}

export interface Chain {
  evolution_details: EvolutionDetail[];
  evolves_to: Chain[];
  is_baby: boolean;
  species: PokemonOverviewData;
}

export interface EvolutionDetail {
  gender: null;
  held_item: null;
  item: null;
  known_move: null;
  known_move_type: null;
  location: null;
  min_affection: null;
  min_beauty: null;
  min_happiness: null;
  min_level: number;
  needs_overworld_rain: boolean;
  party_species: null;
  party_type: null;
  relative_physical_stats: null;
  time_of_day: string;
  trade_species: null;
  trigger: PokemonOverviewData;
  turn_upside_down: boolean;
}
