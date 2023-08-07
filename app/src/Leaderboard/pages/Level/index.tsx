import { QUERY_STRING_KEY } from '@/Leaderboard/constants/QUERY_STRING_KEY';
import { parseDateTemplate } from '@/Leaderboard/utils/parseDateTemplate';
import { useLazyQuery } from '@apollo/client';
import { Footer } from '@core/components/Footer';
import { gql } from '@shared/__generated__';
import { DateTemplate } from '@shared/__generated__/graphql';
import { Pagination } from '@shared/components/Pagination';
import { Seo } from '@shared/components/Seo';
import { VStack } from '@shared/ui-kit';
import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';
import { useEffect, useState } from 'react';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { LeaderboardLevelPageResult } from './LeaderboardLevelPageResult';

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

const LeaderboardLevelPage = () => {
  const SIZE_PER_PAGE = 50;
  const device = useDeviceType();
  const navigate = useNavigate();
  const [search, result] = useLazyQuery(GET_LEADERBOARD_LEVEL);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [searchParams] = useSearchParams();
  const dateTemplate = parseDateTemplate(
    searchParams.get(QUERY_STRING_KEY.DATE_TEMPLATE),
    DateTemplate.Total,
  );
  const pageNumber = Number(
    searchParams.get(QUERY_STRING_KEY.PAGE_NUMBER) ?? '1',
  );

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
  }, [dateTemplate, search, pageNumber]);

  return (
    <>
      <Seo title="랭킹 › 레벨" />
      <VStack w="100%" spacing="6rem">
        <LeaderboardLevelPageResult result={result} />
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

export default LeaderboardLevelPage;
