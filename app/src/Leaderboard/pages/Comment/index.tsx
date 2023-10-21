import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import { useAtomValue } from 'jotai';
import { useSearchParams } from 'react-router-dom';

import { leaderboardPromoListAtom } from '@/Leaderboard/atoms/leaderboardPromoListAtom';
import { PromoSelect } from '@/Leaderboard/components/PromoSelect';
import { LEADERBOARD_DEFAULT_OPTIONS } from '@/Leaderboard/constants/defaultOptions';
import { LEADERBOARD_PARAM_KEYS } from '@/Leaderboard/constants/paramKeys';
import { LeaderboardCommentResult } from '@/Leaderboard/pages/Comment/components/LeaderboardCommentResult';
import { GET_LEADERBOARD_COMMENT } from '@/Leaderboard/pages/Comment/queries/getLeaderboardComment';
import { useLeaderboardEvalCountSegmentedControl } from '@/Leaderboard/pages/EvalCount/hooks/useLeaderboardEvalCountSegmentedControl';
import { toLeaderboardArgs } from '@/Leaderboard/utils/toLeaderboardArgs';
import { Footer } from '@core/components/Footer';
import { DateTemplate } from '@shared/__generated__/graphql';
import { Seo } from '@shared/components/Seo';
import { CaptionText, HStack, SegmentedControl, VStack } from '@shared/ui-kit';

const LeaderboardCommentPage = () => {
  const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const leaderboardArgs = toLeaderboardArgs(searchParams);
  const { dateTemplate, promo } = leaderboardArgs;
  const { DATE, PROMO } = LEADERBOARD_PARAM_KEYS;

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

  const handlePromoChange = (newPromo: string | null) => {
    const newURLSearchParams = new URLSearchParams();

    newURLSearchParams.set(DATE, dateTemplate);
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
          <HStack w="100%" justify="start">
            <PromoSelect
              curr={promo}
              onChange={handlePromoChange}
              list={promoList}
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
