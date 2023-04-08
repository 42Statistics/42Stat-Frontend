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
  imageUrl:
    'https://cdn.dribbble.com/userupload/5582356/file/original-ebc7c427f84325a866843597d70229ad.jpg?compress=1&resize=2048x1536',
  title: 'Philantropist yopark',
});
