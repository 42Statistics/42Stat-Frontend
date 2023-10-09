import { useQuery } from '@apollo/client';
import { useAtomValue } from 'jotai';
import { useSearchParams } from 'react-router-dom';

import { leaderboardPromoListAtom } from '@/Leaderboard/atoms/leaderboardPromoListAtom';
import { PromoSelect } from '@/Leaderboard/components/PromoSelect';
import { LEADERBOARD_DEFAULT_OPTIONS } from '@/Leaderboard/constants/defaultOptions';
import { LEADERBOARD_PARAM_KEYS } from '@/Leaderboard/constants/paramKeys';
import { toLeaderboardArgs } from '@/Leaderboard/utils/toLeaderboardArgs';
import { Footer } from '@core/components/Footer';
import { Seo } from '@shared/components/Seo';
import { HStack, SegmentedControl, VStack } from '@shared/ui-kit';

import { LeaderboardExpIncrementResult } from './components/LeaderboardExpIncrementResult';
import { useLeaderboardExpIncrementSegmentedControl } from './hooks/useLeaderboardExpIncrementSegmentedControl';
import { GET_LEADERBOARD_EXP_INCREMENT } from './queries/getLeaderboardExpIncrement';

export default function LeaderboardExpIncrementPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const leaderboardArgs = toLeaderboardArgs(searchParams);
  const { dateTemplate, promo } = leaderboardArgs;
  const { DATE, PROMO } = LEADERBOARD_PARAM_KEYS;

  const promoList = useAtomValue(leaderboardPromoListAtom);

  const result = useQuery(GET_LEADERBOARD_EXP_INCREMENT, {
    variables: {
      ...LEADERBOARD_DEFAULT_OPTIONS,
      ...leaderboardArgs,
    },
  });

  const { options, controlRef, segments } =
    useLeaderboardExpIncrementSegmentedControl();
  const segmentedControlIndex = options.findIndex(
    (option) => option.value === dateTemplate,
  );

  function handleSegmentedControlIndexChange(newIndex: number) {
    const newURLSearchParams = new URLSearchParams();

    newURLSearchParams.set(DATE, options[newIndex].value);
    setSearchParams(newURLSearchParams);
  }

  function handlePromoChange(newPromo: string | null) {
    const newURLSearchParams = new URLSearchParams();

    newURLSearchParams.set(DATE, dateTemplate);
    if (newPromo) {
      newURLSearchParams.set(PROMO, newPromo);
    }
    setSearchParams(newURLSearchParams);
  }

  return (
    <>
      <Seo title="랭킹 › 경험치 증가량" />
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
          <LeaderboardExpIncrementResult result={result} />
        </VStack>
      </VStack>
      <Footer />
    </>
  );
}
