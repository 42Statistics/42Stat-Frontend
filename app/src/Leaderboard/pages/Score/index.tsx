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
import { DeferredComponent, SegmentedControl, VStack } from '@shared/ui-kit';
import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';

import { useLeaderboardScoreSegmentedControl } from './hooks/useLeaderboardScoreSegmentedControl';
import { GET_LEADERBOARD_SCORE } from './queries/getLeaderboardScore';

export default function LeaderboardScorePage() {
  const device = useDeviceType();
  const [_, setSearchParams] = useSearchParams();
  const { DATE, PAGE, PROMO } = LEADERBOARD_PARAM_KEYS;

  const leaderboardArgs = useAtomValue(leaderboardArgsAtom);

  if (leaderboardArgs === null) {
    throw new Error('leaderboardArgs is null');
  }

  const { loading, error, data } = useQuery(GET_LEADERBOARD_SCORE, {
    variables: {
      ...LEADERBOARD_DEFAULT_OPTIONS,
      ...leaderboardArgs,
    },
  });

  const { promo, pageNumber, dateTemplate } = leaderboardArgs;

  const { options, controlRef, segments } =
    useLeaderboardScoreSegmentedControl();
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
      params.set(PROMO, promo.toString());
    }
    params.set(PAGE, pageNumber.toString());

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
  } = data.getLeaderboardScore.byDateTemplate;

  const unit = 'P';

  return (
    <>
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
