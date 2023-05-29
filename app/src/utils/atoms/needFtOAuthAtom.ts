import { atomWithLocalStorage } from './atomWithLocalStorage';

// export const needFtOAuthAtom = atom(false);
// FIXME: 테스트용으로만 사용. true/false를 localStorage에 저장하면 안됨.
export const needFtOAuthAtom = atomWithLocalStorage('needFtOAuth', null);
