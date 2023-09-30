import { useQuery } from '@apollo/client';
import { useSearchParams } from 'react-router-dom';

import { Leaderboard } from '@/Leaderboard/components/Leaderboard';
import LeaderboardDateDescriptor from '@/Leaderboard/components/Leaderboard/LeaderboardDateDescriptor';
import LeaderboardHeader from '@/Leaderboard/components/Leaderboard/LeaderboardHeader';
import PromoSelectList from '@/Leaderboard/components/PromoSelect/PromoSelectList';
import { LeaderboardResultSkeleton } from '@/Leaderboard/components/skeletons/LeaderboardResultSkeleton';
import {
  LEADERBOARD_DEFAULT_OPTIONS,
  SIZE_PER_PAGE,
} from '@/Leaderboard/constants/defaultOptions';
import { LEADERBOARD_PARAM_KEYS } from '@/Leaderboard/constants/paramKeys';
import { useGetLeaderboardPromoListContext } from '@/Leaderboard/contexts/LeaderboardPromoListContext';
import { Footer } from '@core/components/Footer';
import { DateTemplate } from '@shared/__generated__/graphql';
import { FullPageApolloErrorView } from '@shared/components/ApolloError/FullPageApolloErrorView';
import { Pagination } from '@shared/components/Pagination';
import {
  DeferredComponent,
  Select,
  SelectContent,
  SelectTrigger,
  VStack,
} from '@shared/ui-kit';
import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';

import { useGetLeaderboardLevelSearchParamsContext } from '../contexts/LeaderboardLevelSearchParamsContext';
import { GET_LEADERBOARD_LEVEL } from '../queries/getLeaderboardLevel';

export default function LeaderboardLevelContent() {
  const device = useDeviceType();
  const [_, setSearchParams] = useSearchParams();
  const { PAGE, PROMO } = LEADERBOARD_PARAM_KEYS;

  const { pageNumber, promo } = useGetLeaderboardLevelSearchParamsContext();
  const promoList = useGetLeaderboardPromoListContext();

  const { loading, error, data } = useQuery(GET_LEADERBOARD_LEVEL, {
    variables: {
      ...LEADERBOARD_DEFAULT_OPTIONS,
      dateTemplate: DateTemplate.Total,
      pageNumber,
      promo,
    },
  });

  const handlePromoChange = (promo: string | null) => {
    const params = new URLSearchParams();

    if (promo) {
      params.set(PROMO, promo);
    }

    setSearchParams(params);
  };

  const handlePageNumberChange = (pageNumber: number) => {
    const params = new URLSearchParams();

    if (promo) {
      params.set(PROMO, String(promo));
    }
    params.set(PAGE, String(pageNumber));

    setSearchParams(params);
  };

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
  } = data.getLeaderboardLevel.byDateTemplate;

  return (
    <>
      <VStack w="100%" spacing="6rem">
        <VStack w="100%" spacing="2rem">
          <LeaderboardHeader
            left={
              <Select
                width="21rem"
                onValueChange={handlePromoChange}
                defaultValue={promo !== null ? String(promo) : undefined}
                defaultRenderValue={promo !== null ? `${promo}기` : undefined}
              >
                <SelectTrigger placeholder="전체" />
                <SelectContent maxHeight="20rem">
                  <PromoSelectList list={promoList} />
                </SelectContent>
              </Select>
            }
            right={
              <LeaderboardDateDescriptor
                start={new Date(start)}
                end={new Date(end)}
              />
            }
          />
          <Leaderboard me={me} list={nodes} fixedNumber={2} />
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
