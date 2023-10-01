import { Seo } from '@shared/components/Seo';

import LeaderboardCommentContent from './components/LeaderboardCommentContent';

const LeaderboardCommentPage = () => {
  return (
    <>
      <Seo title="랭킹 › 코멘트 길이" />
      <LeaderboardCommentContent />
    </>
  );
};

export default LeaderboardCommentPage;
