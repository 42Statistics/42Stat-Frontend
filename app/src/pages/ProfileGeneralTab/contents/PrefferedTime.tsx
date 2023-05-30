import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { H3Text, Loader, Text, VStack } from '@components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView';
import { DashboardContent } from '@components/templates/Dashboard';
import styled from '@emotion/styled';
import { percentFormatter } from '@utils/formatters/percentFormatter';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';

const GET_PREFERRED_TIME = gql(/* GraphQL */ `
  query getPrefferedTime($login: String!) {
    getPersonGeneralPage(login: $login) {
      logtimeInfo {
        data {
          preferredTime {
            morning
            daytime
            evening
            night
          }
        }
        from
        to
      }
    }
  }
`);

export const PrefferedTime = () => {
  const { username } = useParams() as { username: string };

  const title = '주 접속 시간대';
  const { loading, error, data } = useQuery(GET_PREFERRED_TIME, {
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
  if (!data)
    return (
      <DashboardContent title={title}>
        <ApolloNotFound />
      </DashboardContent>
    );

  const { morning, daytime, evening, night } =
    data.getPersonGeneralPage.logtimeInfo.data.preferredTime;
  const { from, to } = data.getPersonGeneralPage.logtimeInfo;
  const description = `${dayjs(from).format('YYYY년 M월')}`;

  const total = morning + daytime + evening + night;
  const max = Math.max(morning, daytime, evening, night);

  return (
    <DashboardContent title={title} description={description}>
      <VStack w="100%" h="100%">
        <VStack w="80%" h="100%" spacing="2rem">
          <H3Text>
            {prefferedTimeTitle(morning, daytime, evening, night)}
          </H3Text>
          <PrefferedTimeTable>
            <tbody>
              <tr>
                <td>
                  <H3Text>🌞 아침</H3Text>
                </td>
                <td>
                  <TextMax isMax={max === morning}>
                    {percentFormatter(morning, total)}
                  </TextMax>
                </td>
              </tr>
              <tr>
                <td>
                  <H3Text>🌆 낮</H3Text>
                </td>
                <td>
                  <TextMax isMax={max === morning}>
                    {percentFormatter(daytime, total)}
                  </TextMax>
                </td>
              </tr>
              <tr>
                <td>
                  <H3Text>🌃 저녁</H3Text>
                </td>
                <td>
                  <TextMax isMax={max === morning}>
                    {percentFormatter(evening, total)}
                  </TextMax>
                </td>
              </tr>
              <tr>
                <td>
                  <H3Text>🌙 새벽</H3Text>
                </td>
                <td>
                  <TextMax isMax={max === morning}>
                    {percentFormatter(night, total)}
                  </TextMax>
                </td>
              </tr>
            </tbody>
          </PrefferedTimeTable>
        </VStack>
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
