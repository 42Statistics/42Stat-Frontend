import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useAtomValue } from 'jotai';

import { gql } from '@shared/__generated__';
import { userAtom } from '@shared/atoms/userAtom';
import {
  Avatar,
  Body1MediumText,
  CaptionText,
  HStack,
  Loader,
  VStack,
} from '@shared/ui-kit';
import { ApolloErrorView } from '@shared/components/ApolloError/ApolloErrorView';
import { ApolloNotFoundView } from '@shared/components/ApolloError/ApolloNotFoundView';
import { ALT } from '@shared/constants/accessibility';
import { MyFollow } from '@shared/__generated__/graphql';
import { numberFormatter } from '@shared/utils/formatters/numberFormatter';
import { ROUTES } from '@shared/constants/routes';

export const GET_FOLLOW_LIST = gql(/* GraphQL */ `
  query getFollowList($id: Int!, $pageSize: Int!, $pageNumber: Int!) {
    getFollowingPaginated(
      targetId: $id
      pageSize: $pageSize
      pageNumber: $pageNumber
    ) {
      nodes {
        isFollowing
        userPreview {
          id
          login
          imgUrl
        }
        followAt
      }
      totalCount
      pageSize
      pageNumber
    }
    getFollowerPaginated(
      targetId: $id
      pageSize: $pageSize
      pageNumber: $pageNumber
    ) {
      nodes {
        isFollowing
        userPreview {
          id
          login
          imgUrl
        }
        followAt
      }
      totalCount
      pageSize
      pageNumber
    }
  }
`);

export const MyFollowCard = () => {
  const { login, id } = useAtomValue(userAtom);
  const { data, loading, error } = useQuery(GET_FOLLOW_LIST, {
    variables: { id, pageSize: 5, pageNumber: 1 },
    fetchPolicy: 'no-cache',
  });
  const theme = useTheme();

  if (loading) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }
  if (error) {
    return (
      <Layout>
        <ApolloErrorView />
      </Layout>
    );
  }
  if (!data) {
    return (
      <Layout>
        <ApolloNotFoundView />
      </Layout>
    );
  }

  const followerList: MyFollow[] = data.getFollowerPaginated.nodes;
  const followerTotalCount = data.getFollowerPaginated.totalCount;
  const followingList: MyFollow[] = data.getFollowingPaginated.nodes;
  const followingTotalCount = data.getFollowingPaginated.totalCount;

  return (
    <Layout>
      <HStack w="100%" h="100%" spacing="1rem" justify="start">
        <Body1MediumText>
          팔로잉 ({numberFormatter(followingTotalCount)})
        </Body1MediumText>
        <Link to={ROUTES.PROFILE_FOLLOWING_OF(login)}>
          <CaptionText>모두 보기</CaptionText>
        </Link>
      </HStack>
      <HStack w="100%" h="100%" justify="start" spacing="0.6rem">
        {followingList.map(({ userPreview: { login, imgUrl } }) => {
          return (
            <Avatar
              key={login}
              name={login}
              src={imgUrl}
              alt={ALT.AVATAR_OF(login)}
              radius={theme.radius.md}
            />
          );
        })}
      </HStack>
      <HStack w="100%" h="100%" spacing="1rem" justify="start">
        <Body1MediumText>
          팔로워 ({numberFormatter(followerTotalCount)})
        </Body1MediumText>
        <Link to={ROUTES.PROFILE_FOLLOWERS_OF(login)}>
          <CaptionText>모두 보기</CaptionText>
        </Link>
      </HStack>
      <HStack w="100%" h="100%" justify="start" spacing="0.6rem">
        {followerList.map(({ userPreview: { login, imgUrl } }) => {
          return (
            <Avatar
              key={login}
              name={login}
              src={imgUrl}
              alt={ALT.AVATAR_OF(login)}
              radius={theme.radius.md}
            />
          );
        })}
      </HStack>
    </Layout>
  );
};

const Layout = styled(VStack)`
  border-sizing: border-box;
  height: 24rem;
  width: 100%;
  gap: 1rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background.box.default};
  border-radius: ${({ theme }) => theme.radius.md};
`;
