import { gql } from '@/__generated__';
import {
  Avatar,
  HStack,
  PrimaryText,
  Spinner,
  StyledInfoTable,
  Text,
  VStack,
} from '@/components/common';
import { LevelBar } from '@/components/elements/LevelBar';
import { getDayDiff } from '@/utils/getDayDiff';
import { getDateTime } from '@/utils/getTimeNow';
import { getTitleWithLogin } from '@/utils/getTitleWithLogin';
import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import { truncate } from 'lodash';
import { CoalitionMark } from './CoalitionMark';

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
    grade,
    level,
    levelRank,
    pooledAt,
    blackholedAt,
    wallet,
    correctionPoint,
    scoreInfo,
  } = data.getPersonGeneralPage.userProfile;
  const titleWithLogin = getTitleWithLogin(titles, login);
  const {
    year: pooledYear,
    month: pooledMonth,
    day: pooledDay,
  } = getDateTime(pooledAt);
  const {
    year: blackHoleYear,
    month: blackHoleMonth,
    day: blackHoleDay,
  } = getDateTime(blackholedAt);
  const dayDiffPool = getDayDiff(pooledAt);
  const dayDiffBlack = getDayDiff(blackholedAt);
  const levelDecimalPart = level % 1;

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
              {grade}
            </Text>
            <HStack spacing="2rem">
              <Text
                fontSize={theme.fonts.size.h1}
                fontWeight={theme.fonts.weight.bold}
              >
                {name}
              </Text>
              <CoalitionMark coalition={coalition} />
            </HStack>
          </VStack>
          <HStack>
            <Text color={theme.colors.mono.gray.default}>
              {truncate(titleWithLogin, { length: 42 })}
            </Text>
          </HStack>
          <HStack spacing="1rem">
            <HStack align="baseline">
              <Text
                color={theme.colors.mono.gray.default}
                fontSize={theme.fonts.size.caption}
              >
                lv.
              </Text>
              <Text
                fontSize={theme.fonts.size.h2}
                fontWeight={theme.fonts.weight.bold}
              >
                {level}
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
      <StyledInfoTable>
        <tbody>
          <tr>
            <td>본과정 시작일</td>
            <td>
              <HStack spacing="1rem">
                {pooledYear + '.' + pooledMonth + '.' + pooledDay}
                <Text
                  fontSize={theme.fonts.size.h3}
                  color={theme.colors.primary.default}
                >{`(D+${dayDiffPool})`}</Text>
              </HStack>
            </td>
          </tr>
          <tr>
            <td>블랙홀</td>
            <td>
              {blackholedAt === null ? (
                '-'
              ) : (
                <HStack spacing="1rem">
                  {blackHoleYear + '.' + blackHoleMonth + '.' + blackHoleDay}
                  <Text
                    fontSize={theme.fonts.size.h3}
                    color={theme.colors.primary.default}
                  >
                    {`(D${dayDiffBlack})`}
                  </Text>
                </HStack>
              )}
            </td>
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
            <td>
              <HStack spacing="1rem">
                <Text
                  color={theme.colors.primary.default}
                  fontSize={theme.fonts.size.h3}
                >
                  {scoreInfo.current.toLocaleString()}
                </Text>
                {`(${scoreInfo.rankInCoalition.toLocaleString()}위 / 전체 ${scoreInfo.rankInTotal.toLocaleString()}위)`}
              </HStack>
            </td>
          </tr>
        </tbody>
      </StyledInfoTable>
    </HStack>
  );
};
