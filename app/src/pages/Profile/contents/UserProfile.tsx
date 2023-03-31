import {
  Avatar,
  HStack,
  PrimaryText,
  Spinner,
  Text,
  VStack,
} from '@/components/common';
import { LevelBar } from '@/components/elements/LevelBar';
import { getTitleWithLogin } from '@/utils/getTitleWithLogin';
import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

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
        }
        imgUrl
        titles {
          id
          name
          isSelected
        }
        level
        pooledAt
        blackholedAt
        wallet
        correctionPoint
        scoreInfo {
          current
          rankInCoalition
          rankInTotal
        }
        levelRank
      }
    }
  }
`);

export const UserProfile = () => {
  const theme = useTheme();
  const { loading, error, data } = useQuery(GET_USER_PROFILE);

  if (loading) return <Spinner />;

  if (error) {
    return <h1>{error.message}</h1>;
  }

  if (!data) {
    return <h1>user not found</h1>;
  }
  const {
    name,
    login,
    imgUrl,
    titles,
    coalition,
    level,
    levelRank,
    pooledAt,
    blackholedAt,
    wallet,
    correctionPoint,
    scoreInfo,
  } = data.getPersonGeneralPage.userProfile;
  const titleWithLogin = getTitleWithLogin(titles, login);
  const [levelIntegerPart, levelDecimalPart] = [Math.floor(level), level % 1];

  return (
    <HStack spacing="10rem">
      <HStack spacing="8rem">
        <Avatar size="18rem" src={imgUrl} />
        <VStack align="start" spacing="1rem">
          <VStack align="inherit">
            <Text
              color={theme.colors.third.default}
              fontSize={theme.fonts.size.h2}
              fontWeight={theme.fonts.weight.bold}
            >
              멤버
            </Text>
            <Text
              fontSize={theme.fonts.size.h1}
              fontWeight={theme.fonts.weight.bold}
            >
              {name}
            </Text>
          </VStack>
          <HStack>
            <Text
              color={theme.colors.mono.gray.default}
              fontSize={theme.fonts.size.h3}
            >
              {titleWithLogin}
            </Text>
            <Text>{coalition?.name}</Text>
          </HStack>
          <HStack spacing="1rem">
            <HStack align="baseline">
              <Text
                fontSize={theme.fonts.size.h2}
                fontWeight={theme.fonts.weight.bold}
              >
                {levelIntegerPart}
              </Text>
              <Text
                color={theme.colors.mono.gray.default}
                fontSize={theme.fonts.size.caption}
              >
                레벨
              </Text>
            </HStack>
            <LevelBar rate={levelDecimalPart} />
            <HStack align="baseline">
              <PrimaryText
                fontSize={theme.fonts.size.h3}
                fontWeight={theme.fonts.weight.medium}
              >
                {levelRank}
              </PrimaryText>
              <PrimaryText fontSize={theme.fonts.size.caption}>위</PrimaryText>
            </HStack>
          </HStack>
        </VStack>
      </HStack>
      <StyledTable>
        <tbody>
          <tr>
            <td>본과정 시작일</td>
            <td>{pooledAt}</td>
          </tr>
          <tr>
            <td>블랙홀</td>
            <td>{blackholedAt}</td>
          </tr>
          <tr>
            <td>보유 월렛</td>
            <td>{wallet.toLocaleString()}₳</td>
          </tr>
          <tr>
            <td>보유 평가 포인트</td>
            <td>{correctionPoint.toLocaleString()}개</td>
          </tr>
          <tr>
            <td>코알리숑 스코어</td>
            <td>{`${scoreInfo.current.toLocaleString()} (${scoreInfo.rankInCoalition.toLocaleString()}위 / 전체 ${scoreInfo.rankInTotal.toLocaleString()}위)`}</td>
          </tr>
        </tbody>
      </StyledTable>
    </HStack>
  );
};

const StyledTable = styled.table`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.size.h3};

  th,
  td {
    padding: 0.8rem 2rem;
  }

  td:first-of-type {
    color: ${({ theme }) => theme.colors.primary.default};
    font-weight: ${({ theme }) => theme.fonts.weight.medium};
  }
`;
