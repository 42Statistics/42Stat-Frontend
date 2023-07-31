import {
  parseDateTemplate,
  stringifyDateTemplate,
} from '@/Leaderboard/utils/parseDateTemplate';
import {
  parsePageNumber,
  stringifyPageNumber,
} from '@/Leaderboard/utils/parsePageNumber';
import { useLazyQuery } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { DateTemplate } from '@shared/__generated__/graphql';
import { Pagination } from '@shared/components/Pagination';
import { useSegmentedControl } from '@shared/hooks/useSegmentedControl';
import { SegmentedControl, VStack } from '@shared/ui-kit';
import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LeaderboardCoalitionScoreTabResult } from './LeaderboardCoalitionScoreTabResult';

const GET_LEADERBOARD_COALITION_SCORE = gql(/* GraphQL */ `
  query GetLeaderboardCoalitionScore(
    $pageSize: Int!
    $pageNumber: Int!
    $dateTemplate: DateTemplate!
  ) {
    getLeaderboardScore {
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

const LeaderboardCoalitionScoreTab = () => {
  const SIZE_PER_PAGE = 50;
  const device = useDeviceType();
  const [search, result] = useLazyQuery(GET_LEADERBOARD_COALITION_SCORE);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [dateTemplate, setDateTemplate] = useState<DateTemplate>(
    parseDateTemplate(searchParams.get('dateTemplate'), DateTemplate.CurrWeek),
  );
  const [pageNumber, setPageNumber] = useState<number>(
    parsePageNumber(searchParams.get('pageNumber')),
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
      result.data?.getLeaderboardScore.byDateTemplate.data.totalRanking
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
    setSearchParams({
      dateTemplate: stringifyDateTemplate(dateTemplate),
      pageNumber: stringifyPageNumber(pageNumber),
    });
  }, [dateTemplate, search, pageNumber, setSearchParams]);

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
      <LeaderboardCoalitionScoreTabResult result={result} />
      <Pagination
        currPageNumber={pageNumber}
        setPageNumber={setPageNumber}
        totalPageNumber={Math.ceil(totalPage / SIZE_PER_PAGE)}
        pagePerRow={device === 'mobile' ? 5 : 10}
      />
    </VStack>
  );
};

export default LeaderboardCoalitionScoreTab;
