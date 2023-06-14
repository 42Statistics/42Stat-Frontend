import { gql } from '@/__generated__';
import { useLazyQuery } from '@apollo/client';
import { HStack, SegmentedControl, Spacer, VStack } from '@components/common';
import { PageBtnList } from '@components/elements/PageBtnList';
import { useSegmentedControl } from '@utils/useSegmentedControl';
import { useEffect, useState } from 'react';
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
  const SIZE_PER_PAGE = 50;
  const [search, result] = useLazyQuery(GET_LEADERBOARD_LEVEL);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);

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
      result.data?.getLeaderboardLevel.total.totalRanking.totalCount ?? 0,
    );
  }, [result]);

  useEffect(() => {
    search({
      variables: {
        pageSize: SIZE_PER_PAGE,
        pageNumber,
      },
    });
    setPageNumber(pageNumber);
  }, [search, pageNumber]);

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
      <PageBtnList
        currPageNumber={pageNumber}
        setPageNumber={setPageNumber}
        totalPageNumber={Math.ceil(totalPage / SIZE_PER_PAGE)}
      />
    </VStack>
  );
};
