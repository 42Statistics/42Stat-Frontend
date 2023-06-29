import { atomWithStorage } from 'jotai/utils';

// export const isAuthenticatedAtom = atom(false);
// FIXME: 테스트용으로만 사용. true/false를 localStorage에 저장하면 안됨.
export const isAuthenticatedAtom = atomWithStorage('isAuthenticated', false);
