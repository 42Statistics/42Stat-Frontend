import { useSearchParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { useAtomValue } from 'jotai';

import { Footer } from '@core/components/Footer';

import { DateTemplate } from '@shared/__generated__/graphql';
import { Seo } from '@shared/components/Seo';
import { HStack, VStack } from '@shared/ui-kit';

import { leaderboardCoalitionListAtom } from '@/Leaderboard/atoms/leaderboardCoalitionListAtom';
import { leaderboardPromoListAtom } from '@/Leaderboard/atoms/leaderboardPromoListAtom';
import { PromoSelect } from '@/Leaderboard/components/PromoSelect';
import { CoalitionSelect } from '@/Leaderboard/components/CoalitionSelect';
import { LEADERBOARD_DEFAULT_OPTIONS } from '@/Leaderboard/constants/defaultOptions';
import { LEADERBOARD_PARAM_KEYS } from '@/Leaderboard/constants/paramKeys';
import { LeaderboardLevelResult } from '@/Leaderboard/pages/Level/components/LeaderboardLevelResult';
import { GET_LEADERBOARD_LEVEL } from '@/Leaderboard/pages/Level/queries/getLeaderboardLevel';
import { toLeaderboardArgs } from '@/Leaderboard/utils/toLeaderboardArgs';

const LeaderboardLevelPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const leaderboardArgs = toLeaderboardArgs(searchParams);
  const { promo, coalitionId } = leaderboardArgs;
  const { PROMO, COALITION } = LEADERBOARD_PARAM_KEYS;

  const coalitionList = useAtomValue(leaderboardCoalitionListAtom);
  const promoList = useAtomValue(leaderboardPromoListAtom);

  const result = useQuery(GET_LEADERBOARD_LEVEL, {
    variables: {
      ...LEADERBOARD_DEFAULT_OPTIONS,
      ...leaderboardArgs,
      dateTemplate: DateTemplate.Total,
    },
  });

  const handleCoalitionChange = (newCoalitionId: string | null) => {
    const newURLSearchParams = new URLSearchParams();

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
      <Seo title="랭킹 › 레벨" />
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
        <LeaderboardLevelResult result={result} />
      </VStack>
      <Footer />
    </>
  );
};

export default LeaderboardLevelPage;
