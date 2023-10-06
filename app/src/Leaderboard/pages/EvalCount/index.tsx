import { useQuery } from '@apollo/client';
import { useAtomValue } from 'jotai';
import { useSearchParams } from 'react-router-dom';

import { leaderboardArgsAtom } from '@/Leaderboard/atoms/leaderboardArgsAtom';
import { Leaderboard } from '@/Leaderboard/components/Leaderboard';
import { LeaderboardHeader } from '@/Leaderboard/components/Leaderboard/LeaderboardHeader';
import { LeaderboardResultSkeleton } from '@/Leaderboard/components/skeletons/LeaderboardResultSkeleton';
import {
  LEADERBOARD_DEFAULT_OPTIONS,
  SIZE_PER_PAGE,
} from '@/Leaderboard/constants/defaultOptions';
import { LEADERBOARD_PARAM_KEYS } from '@/Leaderboard/constants/paramKeys';
import { Footer } from '@core/components/Footer';
import { FullPageApolloErrorView } from '@shared/components/ApolloError/FullPageApolloErrorView';
import { Pagination } from '@shared/components/Pagination';
import { Seo } from '@shared/components/Seo';
import { DeferredComponent, SegmentedControl, VStack } from '@shared/ui-kit';
import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';

import { useLeaderboardEvalCountSegmentedControl } from './hooks/useLeaderboardEvalCountSegmentedControl';
import { GET_LEADERBOARD_EVAL_COUNT } from './queries/getLeaderboardEvalCount';

export default function LeaderboardEvalCountPage() {
  const device = useDeviceType();
  const [_, setSearchParams] = useSearchParams();
  const { DATE, PAGE, PROMO } = LEADERBOARD_PARAM_KEYS;

  const leaderboardArgs = useAtomValue(leaderboardArgsAtom);

  if (leaderboardArgs === null) {
    throw new Error('leaderboardArgs is null');
  }

  const { loading, error, data } = useQuery(GET_LEADERBOARD_EVAL_COUNT, {
    variables: {
      ...LEADERBOARD_DEFAULT_OPTIONS,
      ...leaderboardArgs,
    },
  });

  const { promo, pageNumber, dateTemplate } = leaderboardArgs;

  const { options, controlRef, segments } =
    useLeaderboardEvalCountSegmentedControl();
  const segmentIndex = options.findIndex(
    (option) => option.value === dateTemplate,
  );

  function handleSegmentedControlChange(index: number) {
    const params = new URLSearchParams();

    params.set(DATE, options[index].value);

    setSearchParams(params);
  }

  function handlePromoChange(promo: string | null) {
    const params = new URLSearchParams();

    params.set(DATE, dateTemplate);
    if (promo) {
      params.set(PROMO, promo);
    }

    setSearchParams(params);
  }

  function handlePageNumberChange(pageNumber: number) {
    const params = new URLSearchParams();

    params.set(DATE, dateTemplate);
    if (promo) {
      params.set(PROMO, String(promo));
    }
    params.set(PAGE, String(pageNumber));

    setSearchParams(params);
  }

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
  } = data.getLeaderboardEvalCount.byDateTemplate;

  const unit = '회';

  return (
    <>
      <Seo title="랭킹 › 평가 횟수" />
      <VStack w="100%" spacing="6rem">
        <VStack w="100%" spacing="2rem">
          <SegmentedControl
            index={segmentIndex}
            onIndexChange={handleSegmentedControlChange}
            controlRef={controlRef}
            segments={segments}
          />
          <LeaderboardHeader
            currSegmentIndex={segmentIndex}
            currPromo={promo}
            onPromoChange={handlePromoChange}
            start={new Date(start)}
            end={new Date(end)}
          />
          <Leaderboard me={me} list={nodes} unit={unit} />
        </VStack>
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
}
