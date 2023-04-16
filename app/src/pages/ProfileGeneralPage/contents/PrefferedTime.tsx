import { gql } from '@/__generated__';
import { Spinner, Text, VStack } from '@/components/common';
import { percentFormatter } from '@/utils/formatters/percentFormatter';
import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

const GET_PREFERRED_TIME = gql(/* GraphQL */ `
  query getPrefferedTime {
    getPersonGeneralPage {
      logtimeInfo {
        preferredTime {
          morning
          daytime
          evening
          night
        }
      }
    }
  }
`);

export const PrefferedTime = () => {
  const { loading, error, data } = useQuery(GET_PREFERRED_TIME);
  const theme = useTheme();

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }
  const { morning, daytime, evening, night } =
    data.getPersonGeneralPage.logtimeInfo.preferredTime;
  const total = morning + daytime + evening + night;
  const max = Math.max(morning, daytime, evening, night);

  return (
    <VStack w="100%" h="100%">
      <VStack w="70%" h="100%" spacing="2rem">
        <Text fontSize={theme.fonts.size.h3}>
          {prefferedTimeTitle(morning, daytime, evening, night)}
        </Text>
        <PrefferedTimeTable>
          <tbody>
            <tr>
              <td>🌞 아침</td>
              <td>
                <TextMax isMax={max === morning}>
                  {percentFormatter(morning, total)}
                </TextMax>
              </td>
            </tr>
            <tr>
              <td>🌆 낮</td>
              <td>
                <TextMax isMax={max === morning}>
                  {percentFormatter(daytime, total)}
                </TextMax>
              </td>
            </tr>
            <tr>
              <td>🌃 저녁</td>
              <td>
                <TextMax isMax={max === morning}>
                  {percentFormatter(evening, total)}
                </TextMax>
              </td>
            </tr>
            <tr>
              <td>🌙 새벽</td>
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
  );
};

const TextMax = styled(Text)<{ isMax: boolean }>`
  font-size: ${({ theme }) => theme.fonts.size.h3};
  color: ${({ theme, isMax }) =>
    isMax ? theme.colors.secondary.default : theme.colors.mono.black};
`;

const PrefferedTimeTable = styled.table`
  width: 100%;
  font-size: ${({ theme }) => theme.fonts.size.h3};
  margin-top: 1rem;

  td:nth-of-type(2) {
    text-align: right;
  }

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
//   background-color: ${({ theme }) => theme.colors.secondary.default};
//   border-radius: 0.5rem 0 0 0.5rem;
// `;
