import { Leaderboard } from '@/Leaderboard/components/Leaderboard';
import { LeaderboardResultSkeleton } from '@/Leaderboard/components/skeletons/LeaderboardResultSkeleton';
import { QUERY_STRING_KEY } from '@/Leaderboard/constants/QUERY_STRING_KEY';
import { parseDateTemplate } from '@/Leaderboard/utils/parseDateTemplate';
import { useQuery } from '@apollo/client';
import { Footer } from '@core/components/Footer';
import { gql } from '@shared/__generated__';
import { DateTemplate } from '@shared/__generated__/graphql';
import { FullPageApolloErrorView } from '@shared/components/ApolloError/FullPageApolloErrorView';
import { Pagination } from '@shared/components/Pagination';
import { Seo } from '@shared/components/Seo';
import { VStack } from '@shared/ui-kit';
import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

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
  const [searchParams] = useSearchParams();
  const dateTemplate = parseDateTemplate(
    searchParams.get(QUERY_STRING_KEY.DATE_TEMPLATE),
    DateTemplate.Total,
  );
  const pageNumber = Number(
    searchParams.get(QUERY_STRING_KEY.PAGE_NUMBER) ?? '1',
  );
  const { loading, error, data } = useQuery(GET_LEADERBOARD_LEVEL, {
    variables: {
      pageSize: SIZE_PER_PAGE,
      pageNumber,
      dateTemplate,
    },
  });

  const handlePageNumberChange = (pageNumber: number) => {
    navigate({
      search: `?${createSearchParams({
        [QUERY_STRING_KEY.DATE_TEMPLATE]: dateTemplate,
        [QUERY_STRING_KEY.PAGE_NUMBER]: String(pageNumber),
      })}`,
    });
  };

  if (loading) {
    return <LeaderboardResultSkeleton />;
  }
  if (error) {
    return <FullPageApolloErrorView message={error.message} />;
  }
  if (!data) {
    return <LeaderboardResultSkeleton />;
  }

  const {
    data: {
      me,
      totalRanking: { nodes, totalCount },
    },
    start,
    end,
  } = data.getLeaderboardLevel.byDateTemplate;
  return (
    <>
      <Seo title="랭킹 › 레벨" />
      <VStack w="100%" spacing="6rem">
        <Leaderboard
          me={me}
          list={nodes}
          fixedNumber={2}
          start={new Date(start)}
          end={new Date(end)}
        />
        <Pagination
          currPageNumber={pageNumber}
          onPageNumberChange={handlePageNumberChange}
          totalPageNumber={Math.ceil(totalCount / SIZE_PER_PAGE)}
          pagePerRow={device === 'mobile' ? 5 : 10}
        />
      </VStack>
      <Footer />
    </>
  );
};

export default LeaderboardLevelPage;
