import { atom } from 'jotai';

type User = {
  id: number;
  login: string;
  imgUrl: string | null | undefined;
  displayname: string;
};

// TODO: User | null 타입
export const userAtom = atom<User>({
  id: 0,
  login: '',
  imgUrl: '',
  displayname: '',
});
