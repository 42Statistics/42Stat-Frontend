import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { truncate } from 'lodash-es';
import { useContext } from 'react';

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import type { Coalition } from '@shared/__generated__/graphql';
import coalition_black_cover from '@shared/assets/coalition/cover/coalition-black-cover.jpg';
import coalition_gam_cover from '@shared/assets/coalition/cover/coalition-gam-cover.jpg';
import coalition_gon_cover from '@shared/assets/coalition/cover/coalition-gon-cover.jpg';
import coalition_gun_cover from '@shared/assets/coalition/cover/coalition-gun-cover.jpg';
import coalition_lee_cover from '@shared/assets/coalition/cover/coalition-lee-cover.jpg';
import { ALT } from '@shared/constants/accessibility';
import {
  Avatar,
  H3BoldText,
  HStack,
  MediumText,
  Text,
  VStack,
} from '@shared/ui-kit';
import { titleCase } from '@shared/utils/formatters/titleCase';
import { getTitleWithLogin } from '@shared/utils/getTitleWithLogin';
import { Desktop, TabletAndBelow } from '@shared/utils/react-responsive/Device';

export const UserProfile = () => {
  const theme = useTheme();
  const userProfile = useContext(UserProfileContext);

  const { login, imgUrl, titles, coalition, grade, level, displayname } =
    userProfile;
  const titleWithLogin = getTitleWithLogin(titles, login);

  const { backgroundUrl, backgroundFallbackUrl } =
    getCoalitionBackgroundUrlByCoalition(coalition);

  return (
    <Layout
      backgroundUrl={backgroundUrl}
      backgroundFallbackUrl={backgroundFallbackUrl}
    >
      <Desktop>
        <HStack h="100%" spacing="4rem">
          <Avatar /* name 속성을 빼면 사진 로딩 실패시 marvin이 됩니다. */
            size="xl"
            src={imgUrl}
            alt={ALT.AVATAR_OF(login)}
          />
          <H3BoldText color={theme.colors.mono.absolute.white}>
            {titleCase(grade)}
          </H3BoldText>
          <H3BoldText color={theme.colors.mono.absolute.white}>
            {titleCase(displayname)}
          </H3BoldText>
          <MediumText color={theme.colors.mono.absolute.white}>
            {truncate(titleWithLogin, { length: 52 })}
          </MediumText>
          <HStack align="baseline">
            <Text color={theme.colors.mono.absolute.white}>lv.</Text>
            <H3BoldText color={theme.colors.mono.absolute.white}>
              {level.toFixed(2)}
            </H3BoldText>
          </HStack>
        </HStack>
      </Desktop>
      <TabletAndBelow>
        <HStack h="100%" spacing="4rem">
          <VStack>
            <Avatar /* name 속성을 빼면 사진 로딩 실패시 marvin이 됩니다. */
              size="2xl"
              src={imgUrl}
              alt={ALT.AVATAR_OF(login)}
            />
          </VStack>
          <VStack w="15rem" spacing="1rem" style={{ textAlign: 'center' }}>
            <H3BoldText color={theme.colors.mono.absolute.white}>
              {titleCase(grade)}
            </H3BoldText>
            <H3BoldText color={theme.colors.mono.absolute.white}>
              {titleCase(displayname)}
            </H3BoldText>
            <MediumText color={theme.colors.mono.absolute.white}>
              {truncate(titleWithLogin, { length: 52 })}
            </MediumText>
            <HStack align="baseline">
              <Text color={theme.colors.mono.absolute.white}>lv.</Text>
              <H3BoldText color={theme.colors.mono.absolute.white}>
                {level.toFixed(2)}
              </H3BoldText>
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
  min-height: 102px;
  transition: all 0.2s;

  padding: 2rem 0;
`;

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

const getCoalitionBackgroundUrlByCoalition = (coalition?: Coalition | null) => {
  if (coalition == null || coalition.coverUrl == null) {
    return {
      backgroundUrl: coalition_black_cover,
      backgroundFallbackUrl: coalition_black_cover,
    };
  }
  return {
    backgroundUrl: coalition.coverUrl,
    backgroundFallbackUrl: getCoalitionBackgroundFallbackUrlById(coalition.id),
  };
};
