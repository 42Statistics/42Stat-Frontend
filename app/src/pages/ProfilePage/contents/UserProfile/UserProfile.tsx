import { gql } from '@/__generated__';
import {
  Avatar,
  HStack,
  Loader,
  VStack,
  WhiteBoldText,
  WhiteCaptionText,
  WhiteH1BoldText,
  WhiteH3BoldText,
  WhiteMediumText,
  WhiteText,
} from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { userAtom } from '@/utils/atoms/userAtom';
import { getTitleWithLogin } from '@/utils/getTitleWithLogin';
import { BelowTablet, Desktop } from '@/utils/responsive/Device';
import { titleCase } from '@/utils/titleCase';
import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { useAtomValue } from 'jotai';
import { truncate } from 'lodash-es';
import { useParams } from 'react-router-dom';

const GET_USER_PROFILE = gql(/* GraphQL */ `
  query GetUserProfile($uid: Int!) {
    getPersonGeneralPage(uid: $uid) {
      userProfile {
        id
        login
        grade
        name
        coalition {
          id
          name
          slug
          imageUrl
          coverUrl
          color
          score
          userId
        }
        imgUrl
        titles {
          id
          name
          isSelected
        }
        level
      }
    }
  }
`);

export const UserProfile = () => {
  const { username } = useParams() as { username: string }; // FIXME: Type Assertion
  const user = useAtomValue(userAtom);

  // FIXME: user.id가 아니라 user.login으로 검색할 수 있도록 요청해야 함
  const { loading, error, data } = useQuery(GET_USER_PROFILE, {
    variables: { uid: username === 'me' ? user.id : 110650 },
  });

  if (loading) return <Loader />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { name, login, imgUrl, titles, coalition, grade, level } =
    data.getPersonGeneralPage.userProfile;
  const titleWithLogin = getTitleWithLogin(titles, login);

  return (
    <UserProfileLayout backgroundUrl={coalition?.coverUrl}>
      <Desktop>
        <HStack h="100%" spacing="4rem">
          <Avatar size="6rem" imgUrl={imgUrl} />
          <WhiteH3BoldText>{titleCase(grade)}</WhiteH3BoldText>
          <WhiteH3BoldText>{titleCase(name)}</WhiteH3BoldText>
          <WhiteMediumText>
            {truncate(titleWithLogin, { length: 52 })}
          </WhiteMediumText>
          <HStack align="baseline">
            <WhiteText>lv.</WhiteText>
            <WhiteH3BoldText>{level}</WhiteH3BoldText>
          </HStack>
        </HStack>
      </Desktop>
      <BelowTablet>
        <VStack h="100%" spacing="2rem">
          <Avatar size="6rem" imgUrl={imgUrl} />
          <VStack>
            <WhiteBoldText>{titleCase(grade)}</WhiteBoldText>
            <WhiteH1BoldText>{titleCase(name)}</WhiteH1BoldText>
          </VStack>
          <WhiteMediumText>
            {truncate(titleWithLogin, { length: 42 })}
          </WhiteMediumText>
          <HStack align="baseline">
            <WhiteCaptionText>lv.</WhiteCaptionText>
            <WhiteH3BoldText>{level}</WhiteH3BoldText>
          </HStack>
        </VStack>
      </BelowTablet>
    </UserProfileLayout>
  );
};

const UserProfileLayout = styled.div<{ backgroundUrl?: string | null }>`
  height: 100%;
  background-image: ${({ backgroundUrl }) =>
    backgroundUrl != null
      ? `url(${backgroundUrl})`
      : 'black'}; // TODO: fallback 시 기존에 있는 코알리숑 background로 대체
  background-size: cover;
  background-position: center;
  border-radius: 2rem; // FIXME: 왜 background-image 있는 쪽에도 border-radius를 줘야 하지?
`;
