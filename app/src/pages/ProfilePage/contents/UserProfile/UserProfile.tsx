import { gql } from '@/__generated__';
import {
  Avatar,
  HStack,
  Loader,
  VStack,
  WhiteCaptionText,
  WhiteH3BoldText,
  WhiteMediumText,
} from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { getTitleWithLogin } from '@/utils/getTitleWithLogin';
import { AboveTablet, Mobile } from '@/utils/responsive/Device';
import { titleCase } from '@/utils/titleCase';
import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { truncate } from 'lodash-es';

const GET_USER_PROFILE = gql(/* GraphQL */ `
  query GetUserProfile {
    getPersonGeneralPage {
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
  const theme = useTheme();
  const { loading, error, data } = useQuery(GET_USER_PROFILE);

  if (loading) return <Loader />;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

  const { name, login, imgUrl, titles, coalition, grade, level } =
    data.getPersonGeneralPage.userProfile;
  const titleWithLogin = getTitleWithLogin(titles, login);

  return (
    <UserProfileLayout>
      <AboveTablet>
        <HStack h="100%" justify="space-around">
          <Avatar size="6rem" imgUrl={imgUrl} />
          <WhiteH3BoldText>{titleCase(grade)}</WhiteH3BoldText>
          <WhiteH3BoldText>{titleCase(name)}</WhiteH3BoldText>
          <WhiteMediumText>
            {truncate(titleWithLogin, { length: 42 })}
          </WhiteMediumText>
          <HStack align="baseline">
            <WhiteCaptionText>lv.</WhiteCaptionText>
            <WhiteH3BoldText>{level}</WhiteH3BoldText>
          </HStack>
        </HStack>
      </AboveTablet>
      <Mobile>
        <VStack h="100%" justify="space-around">
          <Avatar size="6rem" imgUrl={imgUrl} />
          <WhiteH3BoldText>{titleCase(grade)}</WhiteH3BoldText>
          <WhiteH3BoldText>{titleCase(name)}</WhiteH3BoldText>
          <WhiteMediumText>
            {truncate(titleWithLogin, { length: 42 })}
          </WhiteMediumText>
          <HStack align="baseline">
            <WhiteCaptionText>lv.</WhiteCaptionText>
            <WhiteH3BoldText>{level}</WhiteH3BoldText>
          </HStack>
        </VStack>
      </Mobile>
    </UserProfileLayout>
  );
};

const UserProfileLayout = styled.div`
  height: 100%;
  background-image: url('/gam_cover.jpg'); // FIXME: 임시
  background-size: cover;
`;
