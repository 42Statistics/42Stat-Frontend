import { Leaderboard } from '@/Leaderboard/components/Leaderboard';
import { LeaderboardResultSkeleton } from '@/Leaderboard/components/skeletons/LeaderboardResultSkeleton';
import { QUERY_KEY } from '@/Leaderboard/constants/QUERY_KEY';
import { parseDateTemplate } from '@/Leaderboard/utils/parseDateTemplate';
import { stringifyDateTemplate } from '@/Leaderboard/utils/stringifyDateTemplate';
import { useQuery } from '@apollo/client';
import { Footer } from '@core/components/Footer';
import { gql } from '@shared/__generated__';
import { DateTemplate } from '@shared/__generated__/graphql';
import { FullPageApolloErrorView } from '@shared/components/ApolloError/FullPageApolloErrorView';
import { Pagination } from '@shared/components/Pagination';
import { Seo } from '@shared/components/Seo';
import { useSegmentedControl } from '@shared/hooks/useSegmentedControl';
import { DeferredComponent, SegmentedControl, VStack } from '@shared/ui-kit';
import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

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

const LeaderboardCoalitionScorePage = () => {
  const SIZE_PER_PAGE = 50;
  const device = useDeviceType();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dateTemplate = parseDateTemplate(
    searchParams.get(QUERY_KEY.DATE),
    DateTemplate.CurrWeek,
  );
  const pageNumber = Number(searchParams.get(QUERY_KEY.PAGE) ?? '1');
  const { loading, error, data } = useQuery(GET_LEADERBOARD_COALITION_SCORE, {
    variables: {
      pageSize: SIZE_PER_PAGE,
      pageNumber,
      dateTemplate,
    },
  });

  const options = [
    {
      label: '주간',
      value: DateTemplate.CurrWeek,
    },
    {
      label: '월간',
      value: DateTemplate.CurrMonth,
    },
    {
      label: '누적',
      value: DateTemplate.Total,
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
        [QUERY_KEY.DATE]: stringifyDateTemplate(dateTemplate),
      })}`,
    });
  };

  const handlePageNumberChange = (pageNumber: number) => {
    navigate({
      search: `?${createSearchParams({
        [QUERY_KEY.DATE]: stringifyDateTemplate(dateTemplate),
        [QUERY_KEY.PAGE]: String(pageNumber),
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
    return <FullPageApolloErrorView message={error.message} />;
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
  } = data.getLeaderboardScore.byDateTemplate;

  return (
    <>
      <Seo title="랭킹 › 코알리숑 스코어" />
      <VStack w="100%" spacing="6rem">
        <SegmentedControl
          index={segmentIndex}
          onIndexChange={handleSegmentedControlChange}
          controlRef={controlRef}
          segments={segments}
        />
        <Leaderboard
          me={me}
          list={nodes}
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

export default LeaderboardCoalitionScorePage;
