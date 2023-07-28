import { useQuery } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { Coalition } from '@shared/__generated__/graphql';
import coalition_black_cover from '@shared/assets/coalition/cover/coalition-black-cover.jpg';
import coalition_gam_cover from '@shared/assets/coalition/cover/coalition-gam-cover.jpg';
import coalition_gon_cover from '@shared/assets/coalition/cover/coalition-gon-cover.jpg';
import coalition_gray_cover from '@shared/assets/coalition/cover/coalition-gray-cover.png';
import coalition_gun_cover from '@shared/assets/coalition/cover/coalition-gun-cover.jpg';
import coalition_lee_cover from '@shared/assets/coalition/cover/coalition-lee-cover.jpg';

import styled from '@emotion/styled';
import {
  DashboardContentBadRequest,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { ALT } from '@shared/constants/accessibility/ALT';
import {
  Avatar,
  HStack,
  VStack,
  WhiteH3BoldText,
  WhiteMediumText,
  WhiteText,
} from '@shared/ui-kit';
import { mq } from '@shared/utils/facepaint/mq';
import { titleCase } from '@shared/utils/formatters/titleCase';
import { getTitleWithLogin } from '@shared/utils/getTitleWithLogin';
import { Desktop, TabletAndBelow } from '@shared/utils/react-responsive/Device';
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
          ...coalitionFields
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

  if (loading) {
    return <UserProfileLoader />;
  }
  if (error) {
    return <DashboardContentBadRequest message={error.message} />; // TODO: UI
  }
  if (!data) {
    return <DashboardContentNotFound />; // TODO: UI
  }

  const { login, imgUrl, titles, coalition, grade, level, displayname } =
    data.getPersonalGeneral.userProfile;
  const titleWithLogin = getTitleWithLogin(titles, login);

  const getCoalitionBackgroundFallbackUrlById = (id: number) => {
    switch (id) {
      case 85:
        return coalition_gun_cover;
      case 86:
        return coalition_gon_cover;
      case 87:
        return coalition_gam_cover;
      case 88:
        return coalition_lee_cover;
      default:
        return coalition_black_cover;
    }
  };

  const getCoalitionBackgroundUrlByCoalition = (
    coalition?: Coalition | null,
  ) => {
    if (coalition == null || coalition.coverUrl == null) {
      return {
        backgroundUrl: coalition_black_cover,
        backgroundFallbackUrl: coalition_black_cover,
      };
    }
    return {
      backgroundUrl: coalition.coverUrl,
      backgroundFallbackUrl: getCoalitionBackgroundFallbackUrlById(
        coalition.id,
      ),
    };
  };

  const { backgroundUrl, backgroundFallbackUrl } =
    getCoalitionBackgroundUrlByCoalition(coalition);

  return (
    <Layout
      backgroundUrl={backgroundUrl}
      backgroundFallbackUrl={backgroundFallbackUrl}
    >
      <Desktop>
        <HStack h="100%" spacing="4rem">
          <Avatar size="xl" src={imgUrl} alt={ALT.AVATAR_OF(login)} />
          <WhiteH3BoldText>{titleCase(grade)}</WhiteH3BoldText>
          <WhiteH3BoldText>{titleCase(displayname)}</WhiteH3BoldText>
          <WhiteMediumText style={{}}>
            {truncate(titleWithLogin, { length: 52 })}
          </WhiteMediumText>
          <HStack align="baseline">
            <WhiteText>lv.</WhiteText>
            <WhiteH3BoldText>{level.toFixed(2)}</WhiteH3BoldText>
          </HStack>
        </HStack>
      </Desktop>
      <TabletAndBelow>
        <HStack h="100%" spacing="4rem">
          <VStack>
            <Avatar size="2xl" src={imgUrl} alt={ALT.AVATAR_OF(login)} />
          </VStack>
          <VStack w="15rem" spacing="1rem" style={{ textAlign: 'center' }}>
            <WhiteH3BoldText>{titleCase(grade)}</WhiteH3BoldText>
            <WhiteH3BoldText>{titleCase(displayname)}</WhiteH3BoldText>
            <WhiteMediumText>
              {truncate(titleWithLogin, { length: 52 })}
            </WhiteMediumText>
            <HStack align="baseline">
              <WhiteText>lv.</WhiteText>
              <WhiteH3BoldText>{level.toFixed(2)}</WhiteH3BoldText>
            </HStack>
          </VStack>
        </HStack>
      </TabletAndBelow>
    </Layout>
  );
};

type LayoutProps = {
  backgroundUrl: string;
  backgroundFallbackUrl: string;
};

const Layout = styled.div<LayoutProps>`
  background-image: ${({ backgroundUrl, backgroundFallbackUrl }) =>
    `url(${backgroundUrl}), url(${backgroundFallbackUrl})`};
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.radius.md};
  user-select: none;
  width: 100%;

  ${mq({
    height: ['24rem', '24rem', '12rem'],
  })}
`;

const UserProfileLoader = styled.div`
  height: 100%;
  background-image: url(${coalition_gray_cover});
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.radius.md};

  ${mq({
    height: ['24rem', '24rem', '12rem'],
  })}
`;
