import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import {
  Avatar,
  HStack,
  VStack,
  WhiteBoldText,
  WhiteCaptionText,
  WhiteH1BoldText,
  WhiteH3BoldText,
  WhiteMediumText,
  WhiteText,
} from '@components/common';
import {
  DashboardContentBadRequest,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import styled from '@emotion/styled';
import { getTitleWithLogin } from '@utils/getTitleWithLogin';
import { Desktop, TabletAndBelow } from '@utils/responsive/Device';
import { titleCase } from '@utils/titleCase';
import { truncate } from 'lodash-es';
import { useParams } from 'react-router-dom';

export const GET_USER_PROFILE_BY_LOGIN = gql(/* GraphQL */ `
  query GetUserProfileByLogin($login: String!) {
    getPersonalGeneral(login: $login) {
      userProfile {
        id
        login
        imgUrl
        grade
        displayname
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
        titles {
          titleId
          name
          selected
          createdAt
          updatedAt
        }
        level
      }
    }
  }
`);

export const UserProfile = () => {
  const { username } = useParams() as { username: string };

  const { loading, error, data } = useQuery(GET_USER_PROFILE_BY_LOGIN, {
    variables: { login: username },
  });

  if (loading) return <UserProfileLoader />;
  if (error) return <DashboardContentBadRequest message={error.message} />; // TODO: UI
  if (!data) return <DashboardContentNotFound />; // TODO: UI

  const { id, login, imgUrl, titles, coalition, grade, level, displayname } =
    data.getPersonalGeneral.userProfile;
  const titleWithLogin = getTitleWithLogin(titles, login);

  return (
    <Layout backgroundUrl={coalition.coverUrl}>
      <Desktop>
        <HStack h="100%" spacing="4rem">
          <Avatar size="xl" src={imgUrl} />
          <WhiteH3BoldText>{titleCase(grade)}</WhiteH3BoldText>
          <WhiteH3BoldText>{titleCase(displayname)}</WhiteH3BoldText>
          <WhiteMediumText>
            {truncate(titleWithLogin, { length: 52 })}
          </WhiteMediumText>
          <HStack align="baseline">
            <WhiteText>lv.</WhiteText>
            <WhiteH3BoldText>{level.toFixed(2)}</WhiteH3BoldText>
          </HStack>
        </HStack>
      </Desktop>
      <TabletAndBelow>
        <VStack h="100%" spacing="2rem">
          <Avatar size="xl" src={imgUrl} />
          <VStack>
            <WhiteBoldText>{titleCase(grade)}</WhiteBoldText>
            <WhiteH1BoldText>{titleCase(displayname)}</WhiteH1BoldText>
          </VStack>
          <WhiteMediumText>
            {truncate(titleWithLogin, { length: 42 })}
          </WhiteMediumText>
          <HStack align="baseline">
            <WhiteCaptionText>lv.</WhiteCaptionText>
            <WhiteH3BoldText>{level.toFixed(2)}</WhiteH3BoldText>
          </HStack>
        </VStack>
      </TabletAndBelow>
    </Layout>
  );
};

type LayoutProps = {
  backgroundUrl?: string | null;
};

const Layout = styled.div<LayoutProps>`
  height: 100%;
  background-image: ${({ backgroundUrl }) =>
    backgroundUrl != null
      ? `url(${backgroundUrl})`
      : 'black'}; // TODO: fallback 시 기존에 있는 코알리숑 background로 대체
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.radius.sm};
  user-select: none;
`;

// TODO: Loader가 아니라 Skeleton으로 이동. 여러 타입의 Skeleton을 적용시킬 수 있도록 변경해야 함
const UserProfileLoader = () => {
  return <UserProfileLoaderLayout />;
};

const UserProfileLoaderLayout = styled.div`
  height: 100%;
  background-image: url('/coalition-mono.png');
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.radius.sm};
`;
