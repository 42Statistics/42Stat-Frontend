import { Seo } from '@shared/components/Seo';

import LeaderboardLevelContent from './components/LeaderboardLevelContent';

const LeaderboardLevelPage = () => {
  return (
    <>
      <Seo title="랭킹 › 레벨" />
      <LeaderboardLevelContent />
    </>
  );
};

export default LeaderboardLevelPage;
