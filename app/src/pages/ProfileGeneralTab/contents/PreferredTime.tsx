import { gql } from '@/__generated__';
import { DateTemplate } from '@/__generated__/graphql';
import { useQuery } from '@apollo/client';
import { H3Text, HStack, Loader, Text, VStack } from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView/Error';
import { ProgressionBar } from '@components/elements/ProgressionBar';
import { DashboardContent } from '@components/templates/DashboardContent';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';

const GET_PREFERRED_TIME_BY_DATE_TEMPLATE = gql(/* GraphQL */ `
  query getPrefferedTime($login: String!, $dateTemplate: DateTemplate!) {
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
  const {
    loading,
    error,
    data: queryData,
  } = useQuery(GET_PREFERRED_TIME_BY_DATE_TEMPLATE, {
    variables: { login: username, dateTemplate: DateTemplate.CurrMonth },
  });
  if (loading)
    return (
      <DashboardContent title={title}>
        <Loader />
      </DashboardContent>
    );
  if (error)
    return (
      <DashboardContent title={title}>
        <ApolloBadRequest msg={error.message} />
      </DashboardContent>
    );
  if (!queryData)
    return (
      <DashboardContent title={title}>
        <ApolloNotFound />
      </DashboardContent>
    );

  const { preferredTimeByDateTemplate } = queryData.getPersonalGeneral;
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

  const getPreferredTimeTitle = (): string => {
    const max = Math.max(morning, daytime, evening, night);

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
      <VStack w="100%" h="100%" spacing="4rem">
        <H3Text>{getPreferredTimeTitle()}</H3Text>
        <VStack spacing="1.5rem">
          {tableData.map(({ time, hour, minute }) => (
            <HStack key={time} spacing="2rem">
              <HStack w="30px">
                <H3Text>{time}</H3Text>
              </HStack>
              <ProgressionBar rate={hour / 50} />
              <Text>
                {hour}시간 {minute}분
              </Text>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </DashboardContent>
  );
};
