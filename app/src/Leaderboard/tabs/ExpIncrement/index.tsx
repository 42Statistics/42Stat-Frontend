import { useLazyQuery } from '@apollo/client';
import { SegmentedControl, VStack } from '@components/common';
import { Pagination } from '@components/elements/Pagination';
import { gql } from '@shared/__generated__';
import { DateTemplate } from '@shared/__generated__/graphql';
import { useSegmentedControl } from '@shared/utils/hooks/useSegmentedControl';
import { useEffect, useState } from 'react';
import { LeaderboardExpIncrementTabResult } from './LeaderboardExpIncrementTabResult';

const GET_LEADERBOARD_EXP_INCREMENT = gql(/* GraphQL */ `
  query GetLeaderboardExpIncrement(
    $pageSize: Int!
    $pageNumber: Int!
    $dateTemplate: DateTemplate!
  ) {
    getLeaderboardExpIncrement {
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

const LeaderboardExpIncrementTab = () => {
  const SIZE_PER_PAGE = 50;
  const [search, result] = useLazyQuery(GET_LEADERBOARD_EXP_INCREMENT);
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
  ];

  const { controlRef, segments } = useSegmentedControl(options);

  const handleSegmentedControlChange = (value: string) => {
    if (value === 'weekly') {
      setDateTemplate(DateTemplate.CurrWeek);
    } else if (value === 'monthly') {
      setDateTemplate(DateTemplate.CurrMonth);
    }
  };

  useEffect(() => {
    if (result.loading) {
      return;
    }
    setTotalPage(
      result.data?.getLeaderboardExpIncrement.byDateTemplate.data.totalRanking
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

  useEffect(() => {
    setPageNumber(1);
  }, [dateTemplate]);

  return (
    <VStack w="100%" spacing="6rem">
      <SegmentedControl
        callback={handleSegmentedControlChange}
        controlRef={controlRef}
        segments={segments}
      />
      <LeaderboardExpIncrementTabResult result={result} />
      <Pagination
        currPageNumber={pageNumber}
        setPageNumber={setPageNumber}
        totalPageNumber={Math.ceil(totalPage / SIZE_PER_PAGE)}
      />
    </VStack>
  );
};

export default LeaderboardExpIncrementTab;
