import { useQuery } from '@apollo/client';
import { useAtomValue } from 'jotai';
import { useSearchParams } from 'react-router-dom';

import { leaderboardArgsAtom } from '@/Leaderboard/atoms/leaderboardArgsAtom';
import { leaderboardPromoListAtom } from '@/Leaderboard/atoms/leaderboardPromoListAtom';
import { PromoSelect } from '@/Leaderboard/components/PromoSelect';
import { LEADERBOARD_DEFAULT_OPTIONS } from '@/Leaderboard/constants/defaultOptions';
import { LEADERBOARD_PARAM_KEYS } from '@/Leaderboard/constants/paramKeys';
import { Footer } from '@core/components/Footer';
import { Seo } from '@shared/components/Seo';
import { HStack, SegmentedControl, VStack } from '@shared/ui-kit';

import { LeaderboardEvalCountResult } from './components/LeaderboardEvalCountResult';
import { useLeaderboardEvalCountSegmentedControl } from './hooks/useLeaderboardEvalCountSegmentedControl';
import { GET_LEADERBOARD_EVAL_COUNT } from './queries/getLeaderboardEvalCount';

export default function LeaderboardEvalCountPage() {
  const [_, setSearchParams] = useSearchParams();
  const { DATE, PROMO } = LEADERBOARD_PARAM_KEYS;

  const leaderboardArgs = useAtomValue(leaderboardArgsAtom);

  if (leaderboardArgs === null) {
    throw new Error('leaderboardArgs is null');
  }

  const promoList = useAtomValue(leaderboardPromoListAtom);

  if (promoList === null) {
    throw new Error('promoList is null');
  }

  const result = useQuery(GET_LEADERBOARD_EVAL_COUNT, {
    variables: {
      ...LEADERBOARD_DEFAULT_OPTIONS,
      ...leaderboardArgs,
    },
  });

  const { promo, dateTemplate } = leaderboardArgs;

  const { options, controlRef, segments } =
    useLeaderboardEvalCountSegmentedControl();
  const segmentedControlIndex = options.findIndex(
    (option) => option.value === dateTemplate,
  );

  function handleSegmentedControlIndexChange(index: number) {
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

  return (
    <>
      <Seo title="랭킹 › 평가 횟수" />
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
              curr={promo}
              onChange={handlePromoChange}
              list={promoList}
            />
          </HStack>
          <LeaderboardEvalCountResult result={result} />
        </VStack>
      </VStack>
      <Footer />
    </>
  );
}
