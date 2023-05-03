import { gql } from '@/__generated__';
import {
  Avatar,
  HStack,
  PrimaryText,
  StyledInfoTable,
  Text,
  VStack,
} from '@/components/common';
// import { CoalitionMark } from '@/components/elements/CoalitionMark';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { LevelBar } from '@/components/elements/LevelBar';
import {
  dDayFormatter,
  dateFormatter,
  numberWithUnitFormatter,
} from '@/utils/formatters';
import { getDayDiff } from '@/utils/getDayDiff';
import { getTitleWithLogin } from '@/utils/getTitleWithLogin';
import { titleCase } from '@/utils/titleCase';
import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
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
        pooledAt
        blackholedAt
        wallet
        correctionPoint
        scoreInfo {
          value
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

  if (loading) return <></>;
  if (error) return <ApolloBadRequest msg={error.message} />;
  if (!data) return <ApolloNotFound />;

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
  const dayDiffPooledAtFromNow = getDayDiff(new Date(pooledAt), new Date());
  const dayDiffBlackHoledAtFromNow = blackholedAt
    ? getDayDiff(new Date(), new Date(blackholedAt))
    : 0;
  const levelDecimalPart = level % 1;

  return (
    <HStack w="100%" h="100%" spacing="2.5vw">
      <Avatar size="16rem" imgUrl={imgUrl} />
      <VStack align="start" spacing="1rem">
        <VStack align="inherit">
          <Text
            color={theme.colors.primary.default}
            fontSize={theme.fonts.size.h3}
            fontWeight={theme.fonts.weight.bold}
          >
            {titleCase(grade)}
          </Text>
          <HStack spacing="2rem">
            <Text
              fontSize={theme.fonts.size.h1}
              fontWeight={theme.fonts.weight.bold}
            >
              {titleCase(name)}
            </Text>
            {/* <CoalitionMark coalition={coalition} width="24px" /> */}
          </HStack>
        </VStack>
        <HStack>
          <Text color={theme.colors.mono.gray[300]}>
            {truncate(titleWithLogin, { length: 42 })}
          </Text>
        </HStack>
        <HStack spacing="1rem">
          <HStack align="baseline">
            <Text
              color={theme.colors.mono.gray[300]}
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
      <StyledInfoTable>
        <tbody>
          <tr>
            <td>본과정 시작일</td>
            <td>
              <HStack spacing="1rem">
                {dateFormatter(pooledAt, 'lg')}
                <Text color={theme.colors.primary.default}>{`(${dDayFormatter(
                  dayDiffPooledAtFromNow,
                )})`}</Text>
              </HStack>
            </td>
          </tr>
          <tr>
            <td>블랙홀</td>
            <td>
              {blackholedAt == null ? (
                '-'
              ) : (
                <HStack spacing="1rem">
                  {dateFormatter(blackholedAt, 'lg')}
                  <Text
                    fontSize={theme.fonts.size.h3}
                    color={theme.colors.primary.default}
                  >
                    {`(${dDayFormatter(dayDiffBlackHoledAtFromNow)})`}
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
                <Text>{numberWithUnitFormatter(scoreInfo.value, 'P')}</Text>
                <HStack spacing="0.5rem">
                  <Text>(</Text>
                  {/* <CoalitionMark width="14px" coalition={coalition} /> */}
                  <Text>
                    {`${scoreInfo.rankInCoalition.toLocaleString()}위 / 전체 ${scoreInfo.rankInTotal.toLocaleString()}위)`}
                  </Text>
                </HStack>
              </HStack>
            </td>
          </tr>
        </tbody>
      </StyledInfoTable>
    </HStack>
  );
};
