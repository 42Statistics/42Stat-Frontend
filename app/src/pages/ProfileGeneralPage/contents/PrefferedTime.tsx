import { gql } from '@/__generated__';
import { HStack, Spinner, Text, VStack } from '@/components/common';
import { useQuery } from '@apollo/client';
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
const getPercent = (child: number, parent: number): string => {
  return Math.round((child / parent) * 1000) / 10 + '%';
};
export const PrefferedTime = () => {
  const { loading, error, data } = useQuery(GET_PREFERRED_TIME);

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
    <HStack spacing="4rem">
      <HStack spacing="2rem">
        <VStack>
          <StyledTextTime>아침</StyledTextTime>
          <StyledTextTime>저녁</StyledTextTime>
        </VStack>
        <VStack>
          <StyledTextValue isMax={max === morning}>
            {getPercent(morning, total)}
          </StyledTextValue>
          <StyledTextValue isMax={max === evening}>
            {getPercent(evening, total)}
          </StyledTextValue>
        </VStack>
      </HStack>
      <HStack spacing="2rem">
        <VStack>
          <StyledTextTime>낮</StyledTextTime>
          <StyledTextTime>새벽</StyledTextTime>
        </VStack>
        <VStack>
          <StyledTextValue isMax={max === daytime}>
            {getPercent(daytime, total)}
          </StyledTextValue>
          <StyledTextValue isMax={max === night}>
            {getPercent(night, total)}
          </StyledTextValue>
        </VStack>
      </HStack>
    </HStack>
  );
};

const StyledTextTime = styled(Text)`
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`;

const StyledTextValue = styled(Text)<{ isMax: boolean }>`
  color: ${({ theme, isMax }) =>
    isMax ? theme.colors.secondary.default : 'black'};
`;
