import { gql } from '@/__generated__';
import { DateTemplate } from '@/__generated__/graphql';
import { useLazyQuery } from '@apollo/client';
import { HStack, SegmentedControl, Spacer, VStack } from '@components/common';
import { useSegmentedControl } from '@utils/useSegmentedControl';
import { useEffect, useState } from 'react';
import { LeaderboardEvalCountTabResult } from './LeaderboardEvalCountTabResult';

const GET_LEADERBOARD_EVAL_COUNT = gql(/* GraphQL */ `
  query GetLeaderboardEvalCount(
    $pageSize: Int!
    $pageNumber: Int!
    $dateTemplate: DateTemplate!
  ) {
    getLeaderboardEvalCount {
      byDateTemplate(
        pageSize: $pageSize
        pageNumber: $pageNumber
        dateTemplate: $dateTemplate
      ) {
        data {
          me {
            userPreview {
              id
              login
              imgUrl
            }
            value
            rank
          }
          totalRanking {
            nodes {
              userPreview {
                id
                login
                imgUrl
              }
              value
              rank
            }
            totalCount
            pageSize
            pageNumber
          }
        }
        start
        end
      }
    }
  }
`);

export const LeaderboardEvalCountTab = () => {
  const [search, result] = useLazyQuery(GET_LEADERBOARD_EVAL_COUNT);
  const [dateTemplate, setDateTemplate] = useState<DateTemplate>(
    DateTemplate.CurrWeek,
  );

  const options = [
    {
      label: '주간',
      value: 'weekly',
    },
    {
      label: '월간',
      value: 'monthly',
    },
    {
      label: '누적',
      value: 'total',
    },
  ];
  const { controlRef, segments } = useSegmentedControl(options);

  useEffect(() => {
    search({
      variables: {
        pageSize: 50,
        pageNumber: 1,
        dateTemplate,
      },
    });
  }, [dateTemplate, search]);

  const handleSegmentedControlChange = (value: string) => {
    if (value === 'weekly') {
      setDateTemplate(DateTemplate.CurrWeek);
    } else if (value === 'monthly') {
      setDateTemplate(DateTemplate.CurrMonth);
    } else if (value === 'total') {
      /* FIXME: DateTemplate.Total 지원되면 수정 */
    }
  };

  return (
    <VStack w="100%" spacing="2rem">
      <HStack w="100%">
        <SegmentedControl
          callback={handleSegmentedControlChange}
          controlRef={controlRef}
          segments={segments}
        />
        <Spacer />
      </HStack>
      <LeaderboardEvalCountTabResult result={result} />
    </VStack>
  );
};
