import { useQuery } from '@apollo/client';
import { useAtomValue } from 'jotai';
import { useSearchParams } from 'react-router-dom';

import { leaderboardArgsAtom } from '@/Leaderboard/atoms/leaderboardArgsAtom';
import { leaderboardPromoListAtom } from '@/Leaderboard/atoms/leaderboardPromoListAtom';
import { PromoSelect } from '@/Leaderboard/components/PromoSelect';
import { LEADERBOARD_DEFAULT_OPTIONS } from '@/Leaderboard/constants/defaultOptions';
import { LEADERBOARD_PARAM_KEYS } from '@/Leaderboard/constants/paramKeys';
import { Footer } from '@core/components/Footer';
import { HStack, SegmentedControl, VStack } from '@shared/ui-kit';

import { Seo } from '@shared/components/Seo';
import { LeaderboardScoreResult } from './components/LeaderboardScoreResult';
import { useLeaderboardScoreSegmentedControl } from './hooks/useLeaderboardScoreSegmentedControl';
import { GET_LEADERBOARD_SCORE } from './queries/getLeaderboardScore';

export default function LeaderboardScorePage() {
  const [_, setSearchParams] = useSearchParams();
  const { DATE, PROMO } = LEADERBOARD_PARAM_KEYS;

  const leaderboardArgs = useAtomValue(leaderboardArgsAtom);
  const promoList = useAtomValue(leaderboardPromoListAtom);

  const result = useQuery(GET_LEADERBOARD_SCORE, {
    variables: {
      ...LEADERBOARD_DEFAULT_OPTIONS,
      ...leaderboardArgs,
    },
  });

  const { options, controlRef, segments } =
    useLeaderboardScoreSegmentedControl();
  const segmentedControlIndex = options.findIndex(
    (option) => option.value === leaderboardArgs.dateTemplate,
  );

  function handleSegmentedControlIndexChange(index: number) {
    const params = new URLSearchParams();

    params.set(DATE, options[index].value);

    setSearchParams(params);
  }

  function handlePromoChange(promo: string | null) {
    const params = new URLSearchParams();

    params.set(DATE, leaderboardArgs.dateTemplate);
    if (promo) {
      params.set(PROMO, promo);
    }

    setSearchParams(params);
  }

  return (
    <>
      <Seo title="랭킹 › 코알리숑 스코어" />
      <VStack w="100%" spacing="6rem">
        <SegmentedControl
          index={segmentedControlIndex}
          onIndexChange={handleSegmentedControlIndexChange}
          controlRef={controlRef}
          segments={segments}
        />
        <VStack w="100%" spacing="1rem">
          <HStack w="100%" justify="start">
            <PromoSelect
              curr={leaderboardArgs.promo}
              onChange={handlePromoChange}
              list={promoList}
            />
          </HStack>
          <LeaderboardScoreResult result={result} />
        </VStack>
      </VStack>
      <Footer />
    </>
  );
}
