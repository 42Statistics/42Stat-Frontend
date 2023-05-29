import { atomWithStorage } from 'jotai/utils';

// export const needFtOAuthAtom = atom(false);
// FIXME: 테스트용으로만 사용. true/false를 localStorage에 저장하면 안됨.
export const needFtOAuthAtom = atomWithStorage('needFtOAuth', false);
