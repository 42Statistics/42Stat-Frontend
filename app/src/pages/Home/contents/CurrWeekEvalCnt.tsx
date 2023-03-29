import { gql } from '@/__generated__';
import { HStack, Text } from '@/components/common';
import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import { BsTriangleFill } from 'react-icons/bs';
const GET_CURR_WEEK_EVAL_CNT = gql(/* GraphQL */ `
  query GetCurrWeekEvalCnt {
    getHomePage {
      currWeekEvalCnt
      lastWeekEvalCnt
    }
  }
`);

export const CurrWeekEvalCnt = () => {
  const { loading, error, data } = useQuery(GET_CURR_WEEK_EVAL_CNT);
  const theme = useTheme();
  if (loading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  if (!data) {
    return <h1>user not found</h1>;
  }

  const { currWeekEvalCnt, lastWeekEvalCnt } = data.getHomePage;
  const diff = currWeekEvalCnt - lastWeekEvalCnt;
  return (
    <>
      <HStack spacing="0.5rem">
        <Text style={{ marginRight: '1rem' }}>{currWeekEvalCnt}</Text>
        {diff >= 0 ? (
          <BsTriangleFill color={theme.colors.secondary.default} />
        ) : (
          <BsTriangleFill
            color={theme.colors.third.default}
            style={{ transform: 'rotate(180deg)' }}
          />
        )}

        <Text
          color={
            diff >= 0
              ? theme.colors.secondary.default
              : theme.colors.third.default
          }
        >
          {Math.abs(diff)}
        </Text>
      </HStack>
    </>
  );
};
