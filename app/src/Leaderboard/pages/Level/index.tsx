import { useQuery } from '@apollo/client';
import { useAtomValue } from 'jotai';
import { useSearchParams } from 'react-router-dom';

import { leaderboardPromoListAtom } from '@/Leaderboard/atoms/leaderboardPromoListAtom';
import { PromoSelect } from '@/Leaderboard/components/PromoSelect';
import { LEADERBOARD_DEFAULT_OPTIONS } from '@/Leaderboard/constants/defaultOptions';
import { LEADERBOARD_PARAM_KEYS } from '@/Leaderboard/constants/paramKeys';
import { toLeaderboardArgs } from '@/Leaderboard/utils/toLeaderboardArgs';
import { Footer } from '@core/components/Footer';
import { DateTemplate } from '@shared/__generated__/graphql';
import { Seo } from '@shared/components/Seo';
import { HStack, VStack } from '@shared/ui-kit';

import { LeaderboardLevelResult } from './components/LeaderboardLevelResult';
import { GET_LEADERBOARD_LEVEL } from './queries/getLeaderboardLevel';

export default function LeaderboardLevelPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const leaderboardArgs = toLeaderboardArgs(searchParams);
  const { promo } = leaderboardArgs;
  const { PROMO } = LEADERBOARD_PARAM_KEYS;

  const promoList = useAtomValue(leaderboardPromoListAtom);

  const result = useQuery(GET_LEADERBOARD_LEVEL, {
    variables: {
      ...LEADERBOARD_DEFAULT_OPTIONS,
      ...leaderboardArgs,
      dateTemplate: DateTemplate.Total,
    },
  });

  function handlePromoChange(newPromo: string | null) {
    const newURLSearchParams = new URLSearchParams();

    if (newPromo) {
      newURLSearchParams.set(PROMO, newPromo);
    }
    setSearchParams(newURLSearchParams);
  }

  return (
    <>
      <Seo title="랭킹 › 레벨" />
      <VStack w="100%" spacing="1rem">
        <HStack w="100%" justify="start">
          <PromoSelect
            curr={promo}
            onChange={handlePromoChange}
            list={promoList}
          />
        </HStack>
        <LeaderboardLevelResult result={result} />
      </VStack>
      <Footer />
    </>
  );
}
