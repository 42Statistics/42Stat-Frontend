import { gql } from '@/__generated__';
import { useLazyQuery } from '@apollo/client';
import { HStack, SegmentedControl, Spacer, VStack } from '@components/common';
import { useSegmentedControl } from '@utils/useSegmentedControl';
import { useEffect } from 'react';
import { LeaderboardLevelTabResult } from './LeaderboardLevelTabResult';

const GET_LEADERBOARD_LEVEL = gql(/* GraphQL */ `
  query GetLeaderboardLevel($pageSize: Int!, $pageNumber: Int!) {
    getLeaderboardLevel {
      total(pageSize: $pageSize, pageNumber: $pageNumber) {
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
    }
  }
`);

export const LeaderboardLevelTab = () => {
  const [search, result] = useLazyQuery(GET_LEADERBOARD_LEVEL);

  const options = [
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
      },
    });
  }, [search]);

  return (
    <VStack w="100%" spacing="2rem">
      <HStack w="100%">
        <SegmentedControl
          callback={() => {
            /* pass */
          }}
          controlRef={controlRef}
          segments={segments}
        />
        <Spacer />
      </HStack>
      <LeaderboardLevelTabResult result={result} />
    </VStack>
  );
};
