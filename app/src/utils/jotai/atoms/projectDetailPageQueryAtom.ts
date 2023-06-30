import { GetProjectInfoByProjectNameQuery } from '@/__generated__/graphql';
import { ApolloError } from '@apollo/client';
import { atom } from 'jotai';

type ProjectDetailPageQuery = {
  loading: boolean;
  error: ApolloError | undefined;
  data: GetProjectInfoByProjectNameQuery | undefined;
};

export const projectDetailPageQueryAtom = atom<ProjectDetailPageQuery>({
  loading: true,
  error: undefined,
  data: undefined,
});
