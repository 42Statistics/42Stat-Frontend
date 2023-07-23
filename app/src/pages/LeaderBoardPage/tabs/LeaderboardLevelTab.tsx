import { useSegmentedControl } from '@/hooks/useSegmentedControl';
import { gql } from '@shared/__generated__';
import { DateTemplate } from '@shared/__generated__/graphql';
import { useLazyQuery } from '@apollo/client';
import { SegmentedControl, VStack } from '@components/common';
import { Pagination } from '@components/elements/Pagination';
import { useEffect, useState } from 'react';
import { LeaderboardLevelTabResult } from './LeaderboardLevelTabResult';

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
              ...userPreviewFields
            }
            value
            rank
          }
          totalRanking {
            nodes {
              userPreview {
                ...userPreviewFields
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
    <VStack w="100%" spacing="6rem">
      <SegmentedControl
        callback={() => {
          /* pass */
        }}
        controlRef={controlRef}
        segments={segments}
      />
      <LeaderboardLevelTabResult result={result} />
      <Pagination
        currPageNumber={pageNumber}
        setPageNumber={setPageNumber}
        totalPageNumber={Math.ceil(totalPage / SIZE_PER_PAGE)}
      />
    </VStack>
  );
};
