import { useSearchParams } from 'react-router-dom';

import { useTheme } from '@emotion/react';
import { useQuery } from '@apollo/client';
import { useAtomValue } from 'jotai';

import { Footer } from '@core/components/Footer';

import { DateTemplate } from '@shared/__generated__/graphql';
import { Seo } from '@shared/components/Seo';
import { CaptionText, HStack, SegmentedControl, VStack } from '@shared/ui-kit';

import { leaderboardCoalitionListAtom } from '@/Leaderboard/atoms/leaderboardCoalitionListAtom';
import { leaderboardPromoListAtom } from '@/Leaderboard/atoms/leaderboardPromoListAtom';
import { CoalitionSelect } from '@/Leaderboard/components/CoalitionSelect';
import { PromoSelect } from '@/Leaderboard/components/PromoSelect';
import { LEADERBOARD_DEFAULT_OPTIONS } from '@/Leaderboard/constants/defaultOptions';
import { LEADERBOARD_PARAM_KEYS } from '@/Leaderboard/constants/paramKeys';
import { LeaderboardCommentResult } from '@/Leaderboard/pages/Comment/components/LeaderboardCommentResult';
import { GET_LEADERBOARD_COMMENT } from '@/Leaderboard/pages/Comment/queries/getLeaderboardComment';
import { useLeaderboardEvalCountSegmentedControl } from '@/Leaderboard/pages/EvalCount/hooks/useLeaderboardEvalCountSegmentedControl';
import { toLeaderboardArgs } from '@/Leaderboard/utils/toLeaderboardArgs';

const LeaderboardCommentPage = () => {
  const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const leaderboardArgs = toLeaderboardArgs(searchParams);
  const { dateTemplate, promo, coalitionId } = leaderboardArgs;
  const { DATE, PROMO, COALITION } = LEADERBOARD_PARAM_KEYS;

  const coalitionList = useAtomValue(leaderboardCoalitionListAtom);
  const promoList = useAtomValue(leaderboardPromoListAtom);

  const result = useQuery(GET_LEADERBOARD_COMMENT, {
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
      <Seo title="랭킹 › 코멘트 길이" />
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
          {dateTemplate === DateTemplate.Total && (
            <HStack w="100%" justify="end">
              <CaptionText color={theme.colors.mono.gray500}>
                * 평가 횟수가 20회 미만인 유저는 집계되지 않아요.
              </CaptionText>
            </HStack>
          )}
          <LeaderboardCommentResult result={result} />
        </VStack>
      </VStack>
      <Footer />
    </>
  );
};

export default LeaderboardCommentPage;
