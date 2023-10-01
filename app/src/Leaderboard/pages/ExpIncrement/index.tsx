import { Seo } from '@shared/components/Seo';

import LeaderboardExpIncrementContent from './components/LeaderboardExpIncrementContent';

const LeaderboardExpIncrementPage = () => {
  return (
    <>
      <Seo title="랭킹 › 경험치 증가량" />
      <LeaderboardExpIncrementContent />
    </>
  );
};

export default LeaderboardExpIncrementPage;
