import { Seo } from '@shared/components/Seo';

import LeaderboardEvalCountContent from './components/LeaderboardEvalCountContent';

const LeaderboardEvalCountPage = () => {
  return (
    <>
      <Seo title="랭킹 › 평가 횟수" />
      <LeaderboardEvalCountContent />
    </>
  );
};

export default LeaderboardEvalCountPage;
