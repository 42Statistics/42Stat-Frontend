import { atom } from 'jotai';

type User = {
  id: number;
  login: string;
  name: string;
  imgUrl: string;
  title: string;
};

// TODO: 초기값 바르게 설정
export const userAtom = atom<User>({
  id: 1,
  login: 'yopark',
  name: 'yongjun Park',
  imgUrl:
    'https://cdn.intra.42.fr/users/0d34125b0e84b97d0b63dba4a78c094b/yopark.jpg',
  title: 'Philantropist yopark',
});
