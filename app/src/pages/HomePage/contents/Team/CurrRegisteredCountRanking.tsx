import type { RankingItemType } from '@/types/Ranking';
import { useQuery } from '@apollo/client';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { RankingProject } from '@components/elements/DashboardContentView/Ranking/RankingProject';
import { DashboardContent } from '@components/templates/DashboardContent';
import { GET_HOME } from '@pages/HomePage/GET_HOME';
import { Mobile, TabletAndAbove } from '@utils/responsive/Device';

export const CurrRegisteredCountRanking = () => {
  const title = '지금 가장 많은 사람이 참여하는 과제는?';
  const { loading, error, data } = useQuery(GET_HOME);
  if (loading) return <DashboardContentLoading />;
  if (error) return <DashboardContentBadRequest message={error.message} />;
  if (!data) return <DashboardContentNotFound />;

  const { currRegisteredCountRanking } = data.getHomeTeam;
  const unit = '명';

  const list: RankingItemType[] = currRegisteredCountRanking.map(
    ({ projectPreview, value, rank }) => ({
      id: projectPreview.id,
      name: projectPreview.name,
      value: value,
      rank: rank,
    }),
  );

  return (
    <DashboardContent title={title}>
      <TabletAndAbove>
        <RankingProject list={list} cnt={5} unit={unit} />
      </TabletAndAbove>
      <Mobile>
        <RankingProject list={list} cnt={3} unit={unit} />
      </Mobile>
    </DashboardContent>
  );
};
