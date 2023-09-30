import { Seo } from '@shared/components/Seo';

import LeaderboardLevelContent from './components/LeaderboardLevelContent';
import LeaderboardLevelSearchParamsParser from './components/LeaderboardLevelSearchParamsParser';

const LeaderboardLevelPage = () => {
  return (
    <LeaderboardLevelSearchParamsParser>
      <Seo title="랭킹 › 레벨" />
      <LeaderboardLevelContent />
    </LeaderboardLevelSearchParamsParser>
  );
};

export default LeaderboardLevelPage;
