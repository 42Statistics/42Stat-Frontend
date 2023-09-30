import { Seo } from '@shared/components/Seo';

import LeaderboardScoreContent from './components/LeaderboardScoreContent';
import LeaderboardScoreSearchParamsParser from './components/LeaderboardScoreSearchParamsParser';

const LeaderboardScorePage = () => {
  return (
    <LeaderboardScoreSearchParamsParser>
      <Seo title="랭킹 › 코알리숑 스코어" />
      <LeaderboardScoreContent />
    </LeaderboardScoreSearchParamsParser>
  );
};

export default LeaderboardScorePage;
