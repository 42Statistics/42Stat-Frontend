import { gql } from '@/__generated__';
import { DateTemplate } from '@/__generated__/graphql';
import { useQuery } from '@apollo/client';
import { H3Text, HStack, Text, VStack } from '@components/common';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { ProgressionBar } from '@components/elements/ProgressionBar';
import { DashboardContent } from '@components/templates/DashboardContent';
import { useTheme } from '@emotion/react';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';

const GET_PREFERRED_TIME_BY_DATE_TEMPLATE_BY_LOGIN = gql(/* GraphQL */ `
  query GetPrefferedTimeByDateTemplateByLogin(
    $login: String!
    $dateTemplate: DateTemplate!
  ) {
    getPersonalGeneral(login: $login) {
      preferredTimeByDateTemplate(dateTemplate: $dateTemplate) {
        data {
          total
          morning
          daytime
          evening
          night
        }
        start
        end
      }
    }
  }
`);

export const PreferredTime = () => {
  const { username } = useParams() as { username: string };

  const title = '주 접속 시간대';
  const theme = useTheme();
  const { loading, error, data } = useQuery(
    GET_PREFERRED_TIME_BY_DATE_TEMPLATE_BY_LOGIN,
    {
      variables: { login: username, dateTemplate: DateTemplate.CurrMonth },
    },
  );
  if (loading) return <DashboardContentLoading title={title} />;
  if (error)
    return <DashboardContentBadRequest title={title} message={error.message} />;
  if (!data) return <DashboardContentNotFound title={title} />;

  const { preferredTimeByDateTemplate } = data.getPersonalGeneral;
  const {
    data: { morning, daytime, evening, night },
    start,
    end,
  } = preferredTimeByDateTemplate;

  const description = `${dayjs(start).format('M월 D일')} ~ ${dayjs(end).format(
    'M월 D일',
  )}`;

  const tableData = [
    {
      time: '아침',
      value: morning,
      hour: Math.floor(morning / 60),
      minute: morning % 60,
    },
    {
      time: '낮',
      value: daytime,
      hour: Math.floor(daytime / 60),
      minute: daytime % 60,
    },
    {
      time: '저녁',
      value: evening,
      hour: Math.floor(evening / 60),
      minute: evening % 60,
    },
    {
      time: '새벽',
      value: night,
      hour: Math.floor(night / 60),
      minute: night % 60,
    },
  ];
  const max = Math.max(morning, daytime, evening, night);

  const getPreferredTimeTitle = (): string => {
    if (max === 0) {
      return '접속 기록이 없어요 😓';
    }
    if (max === morning || morning >= 20 * 60) {
      return '일찍 일어나는 새 🐤';
    }
    if (max === daytime) {
      return '점심 먹고 들어오는 편 👨‍💻';
    }
    if (max === evening) {
      return '저녁보다 코딩이 맛있어요 🍕';
    }
    if (max === night || night >= 20 * 60) {
      return '새벽반 🌙';
    }
    return '';
  };

  return (
    <DashboardContent title={title} description={description}>
      <VStack spacing="4rem">
        <H3Text>{getPreferredTimeTitle()}</H3Text>
        <VStack spacing="1.5rem">
          {tableData.map(({ time, hour, minute, value }) => (
            <HStack key={time} spacing="2rem">
              <HStack w="30px">
                <H3Text>{time}</H3Text>
              </HStack>
              <ProgressionBar rate={hour / 50} />
              <Text
                fontWeight={
                  value === max
                    ? theme.fonts.weight.bold
                    : theme.fonts.weight.regular
                }
              >
                {hour}시간 {minute}분
              </Text>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </DashboardContent>
  );
};
