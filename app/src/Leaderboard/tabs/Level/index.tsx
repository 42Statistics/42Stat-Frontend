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

const LeaderboardLevelTab = () => {
  const SIZE_PER_PAGE = 50;
  const device = useDeviceType();
  const [search, result] = useLazyQuery(GET_LEADERBOARD_LEVEL);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [dateTemplate] = useState<DateTemplate>(
    parseDateTemplate(searchParams.get('dateTemplate'), DateTemplate.Total),
  );
  const [pageNumber, setPageNumber] = useState<number>(
    parsePageNumber(searchParams.get('pageNumber')),
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
        pagePerRow={device === 'mobile' ? 5 : 10}
      />
    </VStack>
  );
};

export default LeaderboardLevelTab;
