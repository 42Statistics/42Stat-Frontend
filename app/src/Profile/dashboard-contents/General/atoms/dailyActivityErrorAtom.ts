import { ApolloError } from '@apollo/client';
import { atom } from 'jotai';

export const dailyActivityErrorAtom = atom<ApolloError | undefined>(undefined);
