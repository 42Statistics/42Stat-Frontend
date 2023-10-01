import { Seo } from '@shared/components/Seo';

import LeaderboardScoreContent from './components/LeaderboardScoreContent';

const LeaderboardScorePage = () => {
  return (
    <>
      <Seo title="랭킹 › 코알리숑 스코어" />
      <LeaderboardScoreContent />
    </>
  );
};

export default LeaderboardScorePage;
