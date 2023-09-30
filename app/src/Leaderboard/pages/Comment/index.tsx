import { Seo } from '@shared/components/Seo';

import LeaderboardCommentContent from './components/LeaderboardCommentContent';
import LeaderboardCommentSearchParamsParser from './components/LeaderboardCommentSearchParamsParser';

const LeaderboardCommentPage = () => {
  return (
    <LeaderboardCommentSearchParamsParser>
      <Seo title="랭킹 › 코멘트 길이" />
      <LeaderboardCommentContent />
    </LeaderboardCommentSearchParamsParser>
  );
};

export default LeaderboardCommentPage;
