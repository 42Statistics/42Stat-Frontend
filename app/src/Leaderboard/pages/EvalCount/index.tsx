import { useQuery } from '@apollo/client';
import { useAtomValue } from 'jotai';
import { useSearchParams } from 'react-router-dom';

import { leaderboardCoalitionListAtom } from '@/Leaderboard/atoms/leaderboardCoalitionListAtom';
import { leaderboardPromoListAtom } from '@/Leaderboard/atoms/leaderboardPromoListAtom';
import { CoalitionSelect } from '@/Leaderboard/components/CoalitionSelect';
import { PromoSelect } from '@/Leaderboard/components/PromoSelect';
import { LEADERBOARD_DEFAULT_OPTIONS } from '@/Leaderboard/constants/defaultOptions';
import { LEADERBOARD_PARAM_KEYS } from '@/Leaderboard/constants/paramKeys';
import { LeaderboardEvalCountResult } from '@/Leaderboard/pages/EvalCount/components/LeaderboardEvalCountResult';
import { useLeaderboardEvalCountSegmentedControl } from '@/Leaderboard/pages/EvalCount/hooks/useLeaderboardEvalCountSegmentedControl';
import { GET_LEADERBOARD_EVAL_COUNT } from '@/Leaderboard/pages/EvalCount/queries/getLeaderboardEvalCount';
import { toLeaderboardArgs } from '@/Leaderboard/utils/toLeaderboardArgs';
import { Footer } from '@core/components/Footer';
import { Seo } from '@shared/components/Seo';
import { HStack, SegmentedControl, VStack } from '@shared/ui-kit';

const LeaderboardEvalCountPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const leaderboardArgs = toLeaderboardArgs(searchParams);
  const { dateTemplate, promo, coalitionId } = leaderboardArgs;
  const { DATE, PROMO, COALITION } = LEADERBOARD_PARAM_KEYS;

  const coalitionList = useAtomValue(leaderboardCoalitionListAtom);
  const promoList = useAtomValue(leaderboardPromoListAtom);

  const result = useQuery(GET_LEADERBOARD_EVAL_COUNT, {
    variables: {
      ...LEADERBOARD_DEFAULT_OPTIONS,
      ...leaderboardArgs,
    },
  });

  const { options, controlRef, segments } =
    useLeaderboardEvalCountSegmentedControl();
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
      <Seo title="랭킹 › 평가 횟수" />
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
          <LeaderboardEvalCountResult result={result} />
        </VStack>
      </VStack>
      <Footer />
    </>
  );
};

export default LeaderboardEvalCountPage;
