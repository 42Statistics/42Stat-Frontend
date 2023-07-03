export type PokemonStoreItem = {
  name: string;
  korean: string;
};

type PokemonStore = PokemonStoreItem[][];

export const POKEMON: PokemonStore = [
  [
    {
      name: 'pikachu',
      korean: '피카츄',
    },
    {
      name: 'squirtle',
      korean: '꼬부기',
    },
    {
      name: 'abra',
      korean: '캐이시',
    },
    {
      name: 'mew',
      korean: '뮤',
    },
  ],
  [
    {
      name: 'bulbasaur',
      korean: '이상해씨',
    },
    {
      name: 'charmander',
      korean: '파이리',
    },
    {
      name: 'dratini',
      korean: '미뇽',
    },
    {
      name: 'lugia',
      korean: '루기아',
    },
  ],
  [
    {
      name: 'machop',
      korean: '알통몬',
    },
    {
      name: 'oddish',
      korean: '뚜벅쵸',
    },
    {
      name: 'ditto',
      korean: '메타몽',
    },
    {
      name: 'kyogre',
      korean: '가이오가',
    },
  ],
  [
    {
      name: 'steelix',
      korean: '강철톤',
    },
    {
      name: 'lucario',
      korean: '루카리오',
    },
    {
      name: 'dragonite',
      korean: '망나뇽',
    },
    {
      name: 'arceus',
      korean: '아르세우스',
    },
  ],
];
