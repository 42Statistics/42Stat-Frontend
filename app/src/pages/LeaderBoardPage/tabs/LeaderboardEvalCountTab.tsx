import { gql } from '@/__generated__';
import { DateTemplate } from '@/__generated__/graphql';
import { useLazyQuery } from '@apollo/client';
import { HStack, SegmentedControl, VStack } from '@components/common';
import { useSegmentedControl } from '@/hooks/useSegmentedControl';
import { useEffect, useState } from 'react';
import { LeaderboardEvalCountTabResult } from './LeaderboardEvalCountTabResult';
import { LeaderboardPageButtonList } from './LeaderboardPageButtonList';

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
  const SIZE_PER_PAGE = 50;
  const [search, result] = useLazyQuery(GET_LEADERBOARD_EVAL_COUNT);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
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

  const handleSegmentedControlChange = (value: string) => {
    if (value === 'weekly') {
      setDateTemplate(DateTemplate.CurrWeek);
    } else if (value === 'monthly') {
      setDateTemplate(DateTemplate.CurrMonth);
    } else if (value === 'total') {
      setDateTemplate(DateTemplate.Total);
    }
  };

  useEffect(() => {
    if (result.loading) {
      return;
    }
    setTotalPage(
      result.data?.getLeaderboardEvalCount.byDateTemplate.data.totalRanking
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
  }, [dateTemplate, pageNumber, search]);

  return (
    <VStack w="100%" spacing="4rem">
      <HStack w="100%">
        <SegmentedControl
          callback={handleSegmentedControlChange}
          controlRef={controlRef}
          segments={segments}
        />
      </HStack>
      <LeaderboardEvalCountTabResult result={result} />
      <LeaderboardPageButtonList
        currPageNumber={pageNumber}
        setPageNumber={setPageNumber}
        totalPageNumber={Math.ceil(totalPage / SIZE_PER_PAGE)}
      />
    </VStack>
  );
};
