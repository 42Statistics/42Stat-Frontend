import { useSearchParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { useAtomValue } from 'jotai';

import { Footer } from '@core/components/Footer';

import { Seo } from '@shared/components/Seo';
import { HStack, SegmentedControl, VStack } from '@shared/ui-kit';

import { leaderboardCoalitionListAtom } from '@/Leaderboard/atoms/leaderboardCoalitionListAtom';
import { leaderboardPromoListAtom } from '@/Leaderboard/atoms/leaderboardPromoListAtom';
import { CoalitionSelect } from '@/Leaderboard/components/CoalitionSelect';
import { PromoSelect } from '@/Leaderboard/components/PromoSelect';
import { LEADERBOARD_DEFAULT_OPTIONS } from '@/Leaderboard/constants/defaultOptions';
import { LEADERBOARD_PARAM_KEYS } from '@/Leaderboard/constants/paramKeys';
import { LeaderboardExpIncrementResult } from '@/Leaderboard/pages/ExpIncrement/components/LeaderboardExpIncrementResult';
import { useLeaderboardExpIncrementSegmentedControl } from '@/Leaderboard/pages/ExpIncrement/hooks/useLeaderboardExpIncrementSegmentedControl';
import { GET_LEADERBOARD_EXP_INCREMENT } from '@/Leaderboard/pages/ExpIncrement/queries/getLeaderboardExpIncrement';
import { toLeaderboardArgs } from '@/Leaderboard/utils/toLeaderboardArgs';

const LeaderboardExpIncrementPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const leaderboardArgs = toLeaderboardArgs(searchParams);
  const { dateTemplate, promo, coalitionId } = leaderboardArgs;
  const { DATE, PROMO, COALITION } = LEADERBOARD_PARAM_KEYS;

  const coalitionList = useAtomValue(leaderboardCoalitionListAtom);
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

  const handleSegmentedControlIndexChange = (newIndex: number) => {
    const newURLSearchParams = new URLSearchParams();

    newURLSearchParams.set(DATE, options[newIndex].value);
    setSearchParams(newURLSearchParams);
  };

  const handleCoalitionChange = (newCoalitionId: string | null) => {
    const newURLSearchParams = new URLSearchParams();

    newURLSearchParams.set(DATE, dateTemplate);
    if (promo) {
      newURLSearchParams.set(PROMO, promo.toString());
    }
    if (newCoalitionId) {
      newURLSearchParams.set(COALITION, newCoalitionId);
    }
    setSearchParams(newURLSearchParams);
  };

  const handlePromoChange = (newPromo: string | null) => {
    const newURLSearchParams = new URLSearchParams();

    newURLSearchParams.set(DATE, dateTemplate);
    if (coalitionId) {
      newURLSearchParams.set(COALITION, coalitionId.toString());
    }
    if (newPromo) {
      newURLSearchParams.set(PROMO, newPromo);
    }
    setSearchParams(newURLSearchParams);
  };

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
          <HStack w="100%" justify="start" wrap="wrap" spacing="1rem">
            <PromoSelect
              curr={promo}
              onChange={handlePromoChange}
              list={promoList}
            />
            <CoalitionSelect
              curr={coalitionId}
              onChange={handleCoalitionChange}
              list={coalitionList}
            />
          </HStack>
          <LeaderboardExpIncrementResult result={result} />
        </VStack>
      </VStack>
      <Footer />
    </>
  );
};

export default LeaderboardExpIncrementPage;
