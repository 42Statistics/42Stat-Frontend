import { Leaderboard } from '@/Leaderboard/components/Leaderboard';
import { LeaderboardResultSkeleton } from '@/Leaderboard/components/skeletons/LeaderboardResultSkeleton';
import { LEADERBOARD_PARAM_KEYS } from '@/Leaderboard/constants/urlParams';
import { parseDateTemplate } from '@/Leaderboard/utils/parseDateTemplate';
import { stringifyDateTemplate } from '@/Leaderboard/utils/stringifyDateTemplate';
import { useQuery } from '@apollo/client';
import { Footer } from '@core/components/Footer';
import { gql } from '@shared/__generated__';
import { DateTemplate } from '@shared/__generated__/graphql';
import { FullPageApolloErrorView } from '@shared/components/ApolloError/FullPageApolloErrorView';
import { Pagination } from '@shared/components/Pagination';
import { Seo } from '@shared/components/Seo';
import { DeferredComponent, VStack } from '@shared/ui-kit';
import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

const GET_LEADERBOARD_COMMENT = gql(/* GraphQL */ `
  query GetLeaderboardComment(
    $pageSize: Int!
    $pageNumber: Int!
    $dateTemplate: DateTemplate!
  ) {
    getLeaderboardComment {
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

const LeaderboardCommentPage = () => {
  const SIZE_PER_PAGE = 50;
  const device = useDeviceType();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dateTemplate = parseDateTemplate(
    searchParams.get(LEADERBOARD_PARAM_KEYS.DATE),
    DateTemplate.Total,
  );
  const pageNumber = Number(
    searchParams.get(LEADERBOARD_PARAM_KEYS.PAGE) ?? '1',
  );
  const { loading, error, data } = useQuery(GET_LEADERBOARD_COMMENT, {
    variables: {
      pageSize: SIZE_PER_PAGE,
      pageNumber,
      dateTemplate,
    },
  });

  const handlePageNumberChange = (pageNumber: number) => {
    navigate({
      search: `?${createSearchParams({
        [LEADERBOARD_PARAM_KEYS.DATE]: stringifyDateTemplate(dateTemplate),
        [LEADERBOARD_PARAM_KEYS.PAGE]: String(pageNumber),
      })}`,
    });
  };

  if (loading) {
    return (
      <DeferredComponent>
        <LeaderboardResultSkeleton />
      </DeferredComponent>
    );
  }
  if (error) {
    return (
      <DeferredComponent>
        <FullPageApolloErrorView message={error.message} />
      </DeferredComponent>
    );
  }
  if (!data) {
    return (
      <DeferredComponent>
        <LeaderboardResultSkeleton />
      </DeferredComponent>
    );
  }

  const {
    data: {
      me,
      totalRanking: { nodes, totalCount },
    },
    start,
    end,
  } = data.getLeaderboardComment.byDateTemplate;
  const unit = '자';

  return (
    <>
      <Seo title="랭킹 › 코멘트 길이" />
      <VStack w="100%" spacing="6rem">
        <Leaderboard
          me={me}
          list={nodes}
          unit={unit}
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

export default LeaderboardCommentPage;