import { atom } from 'jotai';

type User = {
  id: number;
  login: string;
  name: string;
  imageUrl: string;
  title: string;
};

// TODO: 초기값 바르게 설정
export const userAtom = atom<User>({
  id: 1,
  login: 'yopark',
  name: 'yongjun Park',
  imageUrl: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
  title: 'Philantropist yopark',
});
