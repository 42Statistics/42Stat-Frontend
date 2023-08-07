import { QUERY_STRING_KEY } from '@/Leaderboard/constants/QUERY_STRING_KEY';
import { parseDateTemplate } from '@/Leaderboard/utils/parseDateTemplate';
import { useLazyQuery } from '@apollo/client';
import { Footer } from '@core/components/Footer';
import { gql } from '@shared/__generated__';
import { DateTemplate } from '@shared/__generated__/graphql';
import { Pagination } from '@shared/components/Pagination';
import { Seo } from '@shared/components/Seo';
import { useSegmentedControl } from '@shared/hooks/useSegmentedControl';
import { SegmentedControl, VStack } from '@shared/ui-kit';
import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';
import { useEffect, useState } from 'react';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { LeaderboardExpIncrementPageResult } from './LeaderboardExpIncrementPageResult';

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

const LeaderboardExpIncrementPage = () => {
  const SIZE_PER_PAGE = 50;
  const device = useDeviceType();
  const navigate = useNavigate();
  const [search, result] = useLazyQuery(GET_LEADERBOARD_EXP_INCREMENT);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [searchParams] = useSearchParams();
  const dateTemplate = parseDateTemplate(
    searchParams.get(QUERY_STRING_KEY.DATE_TEMPLATE),
    DateTemplate.CurrWeek,
  );
  const pageNumber = Number(
    searchParams.get(QUERY_STRING_KEY.PAGE_NUMBER) ?? '1',
  );

  const options = [
    {
      label: '주간',
      value: DateTemplate.CurrWeek,
    },
    {
      label: '월간',
      value: DateTemplate.CurrMonth,
    },
  ];

  const { controlRef, segments } = useSegmentedControl(options);
  const segmentIndex = options.findIndex(
    (option) => option.value === dateTemplate,
  );

  const handleSegmentedControlChange = (index: number) => {
    const dateTemplate = options[index].value;
    navigate({
      search: `?${createSearchParams({
        [QUERY_STRING_KEY.DATE_TEMPLATE]: dateTemplate,
      })}`,
    });
  };

  const handlePageNumberChange = (pageNumber: number) => {
    navigate({
      search: `?${createSearchParams({
        [QUERY_STRING_KEY.DATE_TEMPLATE]: dateTemplate,
        [QUERY_STRING_KEY.PAGE_NUMBER]: String(pageNumber),
      })}`,
    });
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
  }, [dateTemplate, search, pageNumber]);

  return (
    <>
      <Seo title="랭킹 › 경험치 증가량" />
      <VStack w="100%" spacing="6rem">
        <SegmentedControl
          index={segmentIndex}
          onIndexChange={handleSegmentedControlChange}
          controlRef={controlRef}
          segments={segments}
        />
        <LeaderboardExpIncrementPageResult result={result} />
        <Pagination
          currPageNumber={pageNumber}
          onPageNumberChange={handlePageNumberChange}
          totalPageNumber={Math.ceil(totalPage / SIZE_PER_PAGE)}
          pagePerRow={device === 'mobile' ? 5 : 10}
        />
      </VStack>
      <Footer />
    </>
  );
};
export default LeaderboardExpIncrementPage;
