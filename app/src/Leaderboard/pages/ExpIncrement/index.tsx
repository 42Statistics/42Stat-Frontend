import { Seo } from '@shared/components/Seo';

import LeaderboardExpIncrementContent from './components/LeaderboardExpIncrementContent';
import LeaderboardExpIncrementSearchParamsParser from './components/LeaderboardExpIncrementSearchParamsParser';

const LeaderboardExpIncrementPage = () => {
  return (
    <LeaderboardExpIncrementSearchParamsParser>
      <Seo title="랭킹 › 경험치 증가량" />
      <LeaderboardExpIncrementContent />
    </LeaderboardExpIncrementSearchParamsParser>
  );
};

export default LeaderboardExpIncrementPage;
