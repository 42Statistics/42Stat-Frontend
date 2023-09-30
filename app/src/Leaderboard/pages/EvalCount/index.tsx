import { Seo } from '@shared/components/Seo';

import LeaderboardEvalCountContent from './components/LeaderboardEvalCountContent';
import LeaderboardEvalCountSearchParamsParser from './components/LeaderboardEvalCountSearchParamsParser';

const LeaderboardEvalCountPage = () => {
  return (
    <LeaderboardEvalCountSearchParamsParser>
      <Seo title="랭킹 › 평가 횟수" />
      <LeaderboardEvalCountContent />
    </LeaderboardEvalCountSearchParamsParser>
  );
};

export default LeaderboardEvalCountPage;
