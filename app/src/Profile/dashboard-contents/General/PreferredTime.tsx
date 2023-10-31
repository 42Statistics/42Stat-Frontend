import { useQuery } from '@apollo/client';
import { sum } from 'lodash-es';
import { useContext } from 'react';

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { gql } from '@shared/__generated__';
import { DateTemplate } from '@shared/__generated__/graphql';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { ProgressionBar } from '@shared/components/ProgressionBar';
import { TextMax } from '@shared/components/TextMax';
import { H3MediumText, HStack, Text, VStack } from '@shared/ui-kit';
import { getStartEndDateString } from '@shared/utils/getStartEndDateString';

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
  const { login } = useContext(UserProfileContext);

  const title = '주 접속 시간대';
  const { loading, error, data } = useQuery(
    GET_PREFERRED_TIME_BY_DATE_TEMPLATE_BY_LOGIN,
    {
      variables: { login, dateTemplate: DateTemplate.CurrMonth },
    },
  );

  if (loading) {
    return <DashboardContentLoading title={title} />;
  }
  if (error) {
    return <DashboardContentBadRequest title={title} message={error.message} />;
  }
  if (!data) {
    return <DashboardContentNotFound title={title} />;
  }

  const { preferredTimeByDateTemplate } = data.getPersonalGeneral;
  const {
    data: { morning, daytime, evening, night },
    start,
    end,
  } = preferredTimeByDateTemplate;

  const description = getStartEndDateString(
    new Date(start),
    new Date(end),
    'M월 D일',
  );

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
  const minuteMax = Math.max(morning, daytime, evening, night);
  const minuteSum = sum([morning, daytime, evening, night]);

  const getPreferredTimeTitle = (): string => {
    if (minuteMax === 0) {
      return '접속 기록이 없어요 😓';
    }
    if (minuteSum >= 200 * 60) {
      return '출석왕 🏆';
    }
    if (minuteMax === morning || morning >= 20 * 60) {
      return '일찍 일어나는 새 🐤';
    }
    if (minuteMax === daytime) {
      return '점심 먹고 들어오는 편 👨‍💻';
    }
    if (minuteMax === evening) {
      return '저녁보다 코딩이 맛있어요 🍕';
    }
    if (minuteMax === night || night >= 20 * 60) {
      return '새벽반 🌙';
    }
    return '';
  };

  return (
    <DashboardContent title={title} description={description}>
      <VStack spacing="4rem">
        <H3MediumText>{getPreferredTimeTitle()}</H3MediumText>
        <VStack spacing="1.5rem">
          {tableData.map(({ time, hour, minute, value }) => (
            <HStack key={time} spacing="2rem">
              <HStack w="30px">
                <Text>{time}</Text>
              </HStack>
              <ProgressionBar rate={hour / 50} />
              <TextMax isMax={value !== 0 && minuteMax === value}>
                {hour}시간 {minute}분
              </TextMax>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </DashboardContent>
  );
};
