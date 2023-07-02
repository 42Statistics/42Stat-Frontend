import { gql } from '@/__generated__';
import { DateTemplate } from '@/__generated__/graphql';
import { useLazyQuery } from '@apollo/client';
import { HStack, SegmentedControl, VStack } from '@components/common';
import { useSegmentedControl } from '@utils/useSegmentedControl';
import { useEffect, useState } from 'react';
import { LeaderboardLevelTabResult } from './LeaderboardLevelTabResult';
import { LeaderboardPageButtonList } from './LeaderboardPageButtonList';

const GET_LEADERBOARD_LEVEL = gql(/* GraphQL */ `
  query GetLeaderboardLevel(
    $pageSize: Int!
    $pageNumber: Int!
    $dateTemplate: DateTemplate!
  ) {
    getLeaderboardLevel {
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

export const LeaderboardLevelTab = () => {
  const SIZE_PER_PAGE = 50;
  const [search, result] = useLazyQuery(GET_LEADERBOARD_LEVEL);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [dateTemplate, setDateTemplate] = useState<DateTemplate>(
    DateTemplate.Total,
  );
  const options = [
    {
      label: '누적',
      value: 'total',
    },
  ];
  const { controlRef, segments } = useSegmentedControl(options);

  useEffect(() => {
    if (result.loading) {
      return;
    }
    setTotalPage(
      result.data?.getLeaderboardLevel.byDateTemplate.data.totalRanking
        .totalCount ?? 0,
    );
  }, [result]);

  useEffect(() => {
    search({
      variables: {
        pageSize: SIZE_PER_PAGE,
        pageNumber,
        dateTemplate,
      },
    });
    setPageNumber(pageNumber);
  }, [dateTemplate, search, pageNumber]);

  return (
    <VStack w="100%" spacing="4rem">
      <HStack w="100%">
        <SegmentedControl
          callback={() => {
            /* pass */
          }}
          controlRef={controlRef}
          segments={segments}
        />
      </HStack>
      <LeaderboardLevelTabResult result={result} />
      <LeaderboardPageButtonList
        currPageNumber={pageNumber}
        setPageNumber={setPageNumber}
        totalPageNumber={Math.ceil(totalPage / SIZE_PER_PAGE)}
      />
    </VStack>
  );
};
