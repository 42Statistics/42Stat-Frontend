import styled from '@emotion/styled';

import { LeaderboardListItem } from '@/Leaderboard/components/Leaderboard/LeaderboardListItem';
import type { UserRank } from '@shared/__generated__/graphql';

type LeaderboardListProps = {
  list: UserRank[];
  me?: UserRank | null;
  unit?: string;
  fixedNumber?: number;
};

export const LeaderboardList = ({
  list,
  me,
  unit,
  fixedNumber,
}: LeaderboardListProps) => {
  return (
    <Layout>
      {list.map((item) => (
        <LeaderboardListItem
          key={item.userPreview.id}
          item={item}
          unit={unit}
          fixedNumber={fixedNumber}
          isMe={me != null && item.userPreview.id === me.userPreview.id}
        />
      ))}
    </Layout>
  );
};

const Layout = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  width: 100%;
  height: 100%;
`;
