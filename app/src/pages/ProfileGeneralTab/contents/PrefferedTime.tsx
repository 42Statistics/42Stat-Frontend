import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { H3Text, Loader, Text, VStack } from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView';
import { DashboardContent } from '@components/templates/DashboardContent';
import styled from '@emotion/styled';
import { percentFormatter } from '@utils/formatters/percentFormatter';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';

const GET_PREFERRED_TIME = gql(/* GraphQL */ `
  query getPrefferedTime($login: String!) {
    getPersonalGeneralPage(login: $login) {
      preferredTimeByDateTemplate(dateTemplate: CURR_MONTH) {
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

export const PrefferedTime = () => {
  const { username } = useParams() as { username: string };

  const title = '주 접속 시간대';
  const {
    loading,
    error,
    data: queryData,
  } = useQuery(GET_PREFERRED_TIME, {
    variables: { login: username },
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

  const { preferredTimeByDateTemplate } = queryData.getPersonalGeneralPage;
  const { data, start, end } = preferredTimeByDateTemplate;
  const { total, morning, daytime, evening, night } = data;

  const description = `${dayjs(start).format('YYYY년 M월')}`;

  const tabelData = [
    {
      time: '아침',
      value: morning,
    },
    {
      time: '낮',
      value: daytime,
    },
    {
      time: '저녁',
      value: evening,
    },
    {
      time: '새벽',
      value: night,
    },
  ];

  const max = Math.max(morning, daytime, evening, night);

  if (total === 0) {
    return (
      <DashboardContent title={title} description={description}>
        <VStack w="100%" h="100%">
          <VStack w="80%" h="100%" spacing="2rem">
            <H3Text>출석 기록이 없어요 😓</H3Text>
          </VStack>
        </VStack>
      </DashboardContent>
    );
  }

  return (
    <DashboardContent title={title} description={description}>
      <VStack w="100%" h="100%" spacing="2rem">
        <H3Text>{prefferedTimeTitle(morning, daytime, evening, night)}</H3Text>
        <PrefferedTimeTable>
          <tbody>
            {tabelData.map(({ time, value }) => (
              <tr key={time}>
                <td>
                  <H3Text>{time}</H3Text>
                </td>
                <td>
                  <TextMax isMax={max === value}>
                    {percentFormatter(value, total)}
                  </TextMax>
                </td>
              </tr>
            ))}
          </tbody>
        </PrefferedTimeTable>
      </VStack>
    </DashboardContent>
  );
};

const TextMax = styled(Text)<{ isMax: boolean }>`
  font-size: ${({ theme }) => theme.fonts.size.h3};
  color: ${({ theme, isMax }) =>
    isMax ? theme.colors.accent.default : theme.colors.mono.black};
`;

const PrefferedTimeTable = styled.table`
  width: 100%;
  text-align: center;

  td {
    padding: 0.6rem;
    vertical-align: middle;
  }
`;

const prefferedTimeTitle = (
  morning: number,
  daytime: number,
  evening: number,
  night: number,
): string => {
  const max = Math.max(morning, daytime, evening, night);
  if (max === morning) {
    return '일찍 일어나는 새 🐤';
  }
  if (max === daytime) {
    return '점심 먹고 출근하는 편 👨‍💻';
  }
  if (max === evening) {
    return '저녁보다 코딩이 맛있어요 🍕';
  }
  if (max === night) {
    return '새벽반 🌙';
  }
  throw Error('prefferedTimeTitle error');
};

// type TimeBarProps = {
//   hour: number;
// };

// const TimeBar = ({ hour }: TimeBarProps) => {
//   return (
//     <TimeBarBackground>
//       <TimeBarInner hour={hour} />
//     </TimeBarBackground>
//   );
// };

// const TimeBarBackground = styled.div`
//   width: 100%;
//   height: 1rem;
//   background-color: #e5e5e5;
//   border-radius: 0.5rem;
// `;

// const TimeBarInner = styled.div<TimeBarProps>`
//   width: ${({ hour }) => (hour / 200) * 100}%;
//   height: 1rem;
//   background-color: ${({ theme }) => theme.colors.accent.default};
//   border-radius: 0.5rem 0 0 0.5rem;
// `;
